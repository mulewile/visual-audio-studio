import { useState } from "react";
import Button from "@/components/Button";
import Form, { FormTitle } from "@/components/Form";
import { StyledFormContainer } from "@/components/Form";
import myEditImage from "../../resources/edit.png";
import { StyledLink } from "../video/[id]";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";

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

async function postVideoToAPI(videoData) {
  try {
    const response = await fetch("/api/video", {
      method: "POST",
      body: JSON.stringify(videoData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.ok;
  } catch (error) {
    console.error("An error occurred:", error);
    return false;
  }
}

function generateUniqueId() {
  return uuidv4();
}

function addVideoToAPI(videoData) {
  const id = generateUniqueId();
  const videoWithId = { ...videoData, id };
  postVideoToAPI(videoWithId);
  console.log("videoWithId", videoWithId);
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

export default function Add() {
  const linkText = "Cancel";
  const router = useRouter();

  return (
    <div style={backgroundStyle}>
      <StyledFormContainer>
        <Form onSubmit={handleSubmit}>
          <FormTitle>Video Details Form</FormTitle>
          <label htmlFor="videoNameInput"> Name</label>
          <input id="videoNameInput" name="name" />
          <label htmlFor="videoTypeInput">Type</label>
          <input id="videoTypeInput" name="type" />
          <label htmlFor="videoModelInput"> Model</label>
          <input id="videoModelInput" name="model" />
          <label htmlFor="videoSerialNumberInput">Serial Number</label>
          <input id="videoSerialNumberInput" name="serialnumber" />
          <label htmlFor="videoPurchaseDateInput"> Purchase Date</label>
          <input id="videoPurchaseDateInput" name="purchasedate" />
          <label htmlFor="videoConditionInput">Condition</label>
          <input id="videoConditionInput" name="condition" />
          <label htmlFor="videoColorInput">Color</label>
          <input id="videoColorInput" name="color" />
          <label htmlFor="videoAvailabilityInput">Availability</label>
          <input id="videoAvailabilityInput" name="availability" />
          <Button type="submit" disabled={false}>
            Submit
          </Button>
          <StyledLink href={"/videoEquip"}>{linkText}</StyledLink>
        </Form>
      </StyledFormContainer>
    </div>
  );
}
