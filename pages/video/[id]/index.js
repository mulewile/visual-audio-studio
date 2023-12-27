import useSWR from "swr";
import { styled } from "styled-components";
import StyledHeader from "@/components/Header";
import StyledItemCard from "@/components/DetailsCard";
import { useRouter } from "next/router";
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

  "@media (max-width: 768px)": {
    backgroundSize: "contain",
    width: "auto",
  },
};

const StyledItemCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: space-around;
  padding: 1rem;
  margin: 0 auto;
  width: 100%;
`;
export const StyledLink = styled.a`
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
const linkText = "VIDEO EQUIPMENT";

export default function Details() {
  const router = useRouter();
  const { id } = router.query;

  const { data: video, error } = useSWR(id ? `/api/video/${id}` : null);
  if (error) {
    return <p>Error loading video data...</p>;
  }
  if (!video) {
    return <p>Loading video details....</p>;
  }
  const HEADERTEXT = `${video.name} Details`;

  return (
    <>
      <div style={backgroundStyle}>
        <StyledHeader>{HEADERTEXT}</StyledHeader>
        <StyledLink href={"/videoEquip"}>{linkText}</StyledLink>
        <StyledItemCardContainer>
          <StyledItemCard>
            <h2>{video.name}</h2>
            <p>Type: {video.type}</p>
            <p>Model: {video.model}</p>
            <p>Serial Number: {video.serialnumber}</p>
            <p>Purchase Date: {video.purchasedate}</p>
            <p>Condition: {video.condition}</p>
            <p>Color: {video.color}</p>
            <p>Availability: {video.availability}</p>
            <p>Department Location: {video.departmentlocation}</p>
          </StyledItemCard>
          <StyledItemCard>
            <h2>{technicalDetails}</h2>
            <span>Description</span>
            <p> {video.description}</p>
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
