import { useState, useRef } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import Button from "@/components/Button";
import Form from "@/components/Form";
import { StyledFormContainer } from "@/components/Form";
import myEditImage from "../../../resources/edit.png";
import { StyledLink } from "../../video/[id]";
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

export default function Edit({ ref, formStatus }) {



  const router = useRouter();
  
  const { id } = router.query;
  
  const { data: video, error } = useSWR(id ? `/api/video/${id}` : null);

  if (error) {
    return (
      <ErrorContainer>
        <ErrorMessage>Error loading data: Administrator will connect to the database soon</ErrorMessage>
        <ErrorMessage>{error.message}</ErrorMessage>
      </ErrorContainer>
    );
  }

  if (!video) { 
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } 

  console.log(video);
  
  console.log(id);
  
 


  return (
    <div style={backgroundStyle}>
  
      <StyledFormContainer>
      </StyledFormContainer>
    </div>
  );
}
