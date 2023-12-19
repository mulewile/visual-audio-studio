import { useState } from "react";
import Button from "@/components/Button";
import Form, { FormTitle } from "@/components/Form";
import { StyledFormContainer } from "@/components/Form";
import myEditImage from "../../resources/edit.png";
import { StyledLink } from "../video/[id]";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import StyledErrorMessage from "@/components/ErrorMessage";

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

export default function Add() {
  const [errorMessage, setErrorMessage] = useState(null);

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
        <Form onSubmit={handleSubmit}>
          {errorMessage && (
            <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
          )}
          <FormTitle>Video Details Form</FormTitle>
          <label htmlFor="videoNameInput"> Name</label>
          <input
            id="videoNameInput"
            name="name"
            aria-label="Name"
            placeholder="Enter video equipment name"
          />

          <label htmlFor="videoTypeInput">Type</label>
          <input
            id="videoTypeInput"
            name="type"
            aria-label="Type"
            placeholder="e.g., Documentary"
          />

          <label htmlFor="videoModelInput"> Model</label>
          <input
            id="videoModelInput"
            name="model"
            aria-label="Model"
            placeholder="Enter the model"
          />

          <label htmlFor="videoSerialNumberInput">Serial Number</label>
          <input
            id="videoSerialNumberInput"
            name="serialnumber"
            aria-label="Serial Number"
            placeholder="Enter the serial number"
          />

          <label htmlFor="videoPurchaseDateInput"> Purchase Date</label>
          <input
            id="videoPurchaseDateInput"
            name="purchasedate"
            type="date"
            aria-label="Purchase Date"
          />

          <label htmlFor="videoConditionInput">Condition</label>
          <input
            id="videoConditionInput"
            name="condition"
            aria-label="Condition"
            placeholder="e.g., Good, Excellent, etc."
          />

          <label htmlFor="videoColorInput">Color</label>
          <input
            id="videoColorInput"
            name="color"
            aria-label="Color"
            placeholder="Enter the color"
          />

          <label htmlFor="videoAvailabilityInput">Availability</label>
          <input
            id="videoAvailabilityInput"
            name="availability"
            aria-label="Availability"
            placeholder="Enter the availability status"
          />

          <label htmlFor="videoDepartmentlocationInput">Location</label>
          <input
            id="videoDepartmentlocationInput"
            name="departmentlocation"
            aria-label="Location"
            placeholder="Enter the location"
          />

          <Button type="submit" disabled={false}>
            Submit
          </Button>
          <StyledLink href={"/videoEquip"}>{linkText}</StyledLink>
        </Form>
      </StyledFormContainer>
    </div>
  );
}
