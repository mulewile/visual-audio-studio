import { useState } from "react";
import Button from "@/components/Button";
import Form, { FormTitle } from "@/components/Form";
import { StyledFormContainer } from "@/components/Form";
import myEditImage from "../../resources/edit.png";
import { StyledLink } from "../video/[id]";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import StyledErrorMessage from "@/components/ErrorMessage";
import { styled } from "styled-components";
import VideoFormDetails from "@/components/FormComponents/videoForm";

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

export default function Add({ videoForm }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const router = useRouter();
  const linkText = "Cancel";

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
    console.log("videoObject", videoObject);

    addVideoToAPI(videoObject);
    console.log("videoData", videoObject);
  }

  return (
    <div style={backgroundStyle}>
      <StyledFormContainer>
        <Form onSubmit={handleSubmit} className="video_equipment-form">
          {errorMessage && (
            <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
          )}
          {videoForm ? (
            <VideoFormDetails />
          ) : (
            <h2>
              No Form Available. Contact the system administrator or the IT
              department
            </h2>
          )}
          <Button type="submit" disabled={!videoForm}>
            Submit
          </Button>
          <StyledLink href={"/videoEquip"}>{linkText}</StyledLink>
        </Form>
      </StyledFormContainer>
    </div>
  );
}
