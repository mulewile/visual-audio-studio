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

export default function Add({ videoForm, ref, audioForm }) {
  const videoFormValue = useRef(videoForm);
  const audioFormValue = useRef(audioForm);

  const [errorMessage, setErrorMessage] = useState(null);
  const router = useRouter();
  const linkText = "Cancel";
  const PATH = videoForm ? "/videoEquip" : audioForm ? "/audioEquip" : "/";

  async function postVideoToAPI(videoData) {
    try {
      const response = await fetch("/api/video", {
        method: "POST",
        body: JSON.stringify(videoData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseData = await response.json();

      if (response.ok) {
        router.push("/videoEquip");
        return response.ok;
      } else if (!response.ok) {
        console.log(responseData.error);
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

  async function addVideoToAPI(videoData) {
    const id = generateUniqueId();
    const videoWithId = { ...videoData, id };

    const isSuccess = await postVideoToAPI(videoWithId);
  }

  function handleSubmit(event) {
    console.log("Event:", event);
    event.preventDefault();

    const formData = new FormData(event.target);
    const videoObject = Object.fromEntries(formData);

    addVideoToAPI(videoObject);
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
          ) : null}
          <Button type="submit" disabled={!videoFormValue || !audioFormValue}>
            Submit
          </Button>
          <StyledLink href={PATH}>{linkText}</StyledLink>
        </Form>
      </StyledFormContainer>
    </div>
  );
}
