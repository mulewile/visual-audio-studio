import Router from "next/router";
import useSWR from "swr";
import { styled } from "styled-components";
import StyledHeader from "@/components/Header";
import StyledItemCard from "@/components/DetailsCard";
import { useRouter } from "next/router";
import Link from "next/link";

import myStudioImage from "../../../resources/studio.png";

export const backgroundStyle = {
  backgroundImage: `url(${myStudioImage.src})`,
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

const StyledItemCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 1rem;
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  position: sticky;
  margin-top: 1rem;
  margin-left: 2rem;
  color: white;
  background-color: black;
  text-decoration: none;
  font-weight: bold;
  padding: 0.5rem 2rem;
  border: 2px solid black;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: whitesmoke;
    color: black;
  }
`;

const technicalDetails = " TECHNICAL DETAILS";
const appearanceDetail = "APPEARANCE DETAILS";
const linkText = "AUDIO EQUIPMENT";

export default function Details() {
  const router = useRouter();
  const { id } = router.query;

  const { data: audio, error } = useSWR(id ? `/api/audio/${id}` : null);
  if (error) {
    return <p>Error loading audio data...</p>;
  }
  if (!audio) {
    return <p>Loading audio equipment...</p>;
  }
  const HEADERTEXT = `${audio.name} Details`;

  return (
    <>
      <div style={backgroundStyle}>
        <StyledHeader>{HEADERTEXT}</StyledHeader>
        <StyledLink href={"/audioEquip"}>{linkText}</StyledLink>
        <StyledItemCardContainer>
          <StyledItemCard>
            <h2>{audio.name}</h2>
            <p>Type: {audio.type}</p>
            <p>Model: {audio.model}</p>
            <p>Serial Number: {audio.serialnumber}</p>
            <p>Purchase Date: {audio.purchasedate}</p>
            <p>Condition: {audio.condition}</p>
            <p>Color: {audio.color}</p>
            <p>Availability: {audio.availability}</p>
            <p>Department Location: {audio.departmentlocation}</p>
          </StyledItemCard>
          <StyledItemCard>
            <h2>{technicalDetails}</h2>
            <span>Description</span>
            <p> {audio.description}</p>
          </StyledItemCard>
          <StyledItemCard>
            <h2>{appearanceDetail}</h2>
            <span>Curent Look</span>
            <p> The section will be updated soon</p>
          </StyledItemCard>
        </StyledItemCardContainer>
      </div>
    </>
  );
}
