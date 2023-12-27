import { useState, useRef } from "react";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import Button from "@/components/Button";
import Form from "@/components/Form";
import { StyledFormContainer } from "@/components/Form";
import myEditImage from "../../resources/edit.png";
import { StyledLink } from "../video/[id]";
import StyledErrorMessage from "@/components/ErrorMessage";
import VideoFormDetails from "@/components/FormComponents/videoForm";
import AudioFormDetails from "@/components/FormComponents/audioForm";
import CustomerFormDetails from "@/components/FormComponents/customerForm";

export const backgroundStyle = {
  backgroundImage: `url(${myEditImage.src})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  alignItems: "center",
};

export default function Add({ ref, formStatus }) {
  const videoForm = formStatus.videoForm;
  const audioForm = formStatus.audioForm;
  const customerForm = formStatus.customerForm;

  const videoFormValue = useRef(videoForm);
  const audioFormValue = useRef(audioForm);
  const customerFormValue = useRef(customerForm);

  const [errorMessage, setErrorMessage] = useState(null);

  const router = useRouter();
  const LINK_TEXT = "Cancel";
  const PATH = videoForm
    ? "/videoEquip"
    : audioForm
    ? "/audioEquip"
    : customerForm
    ? "/customerList"
    : "/";

  async function postVideoToAPI(userInputData) {
    const VIDEO_API = "/api/video";
    const AUDIO_API = "/api/audio";
    const CUSTOMER_API = "/api/customer";

    const API_PATH = videoForm
      ? VIDEO_API
      : audioForm
      ? AUDIO_API
      : customerForm
      ? CUSTOMER_API
      : null;

    try {
      const response = await fetch(API_PATH, {
        method: "POST",
        body: JSON.stringify(userInputData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseData = await response.json();

      if (response.ok) {
        router.push(PATH);
        return response.ok;
      } else if (!response.ok) {
        console.log(
          "response ======",
          responseData.error,
          userInputData,
          API_PATH
        );
        setErrorMessage(responseData.error);
        return;
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setErrorMessage("An unexpected error occurred");
      return false;
    }
  }

  function generateUniqueId() {
    return uuidv4();
  }

  async function addVideoToAPI(userInputData) {
    const id = generateUniqueId();
    const userInputDataWithId = { ...userInputData, id };

    const isSuccess = await postVideoToAPI(userInputDataWithId);
  }

  function handleSubmit(event) {
    console.log("Event:", event);
    event.preventDefault();

    const formData = new FormData(event.target);
    const userInputDataObject = Object.fromEntries(formData);

    addVideoToAPI(userInputDataObject);
    console.log("Object:", userInputDataObject);
  }

  return (
    <div style={backgroundStyle}>
      <StyledFormContainer>
        <Form
          onSubmit={handleSubmit}
          className="video_equipment-form"
          ref={ref}
        >
          {errorMessage && (
            <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
          )}
          {videoForm ? (
            <VideoFormDetails />
          ) : audioForm ? (
            <AudioFormDetails />
          ) : customerForm ? (
            <CustomerFormDetails />
          ) : null}
          <Button
            type="submit"
            disabled={!videoFormValue || !audioFormValue || !customerFormValue}
          >
            Submit
          </Button>
          <StyledLink href={PATH}>{LINK_TEXT}</StyledLink>
        </Form>
      </StyledFormContainer>
    </div>
  );
}
