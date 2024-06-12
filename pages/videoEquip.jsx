import Header from "@/components/Header";

import VideoEquipmentStyledTable from "../components/VideoEquipment/index";

import StyledButton from "../components/Button";
import Link from "next/link";
import { StyledLink } from "./video/[id]";
import myVideoImage from "../resources/video_camera_one.png";
import useStore from "@/store/formStore";



export const backgroundStyle = {
  backgroundImage: `url(${myVideoImage.src})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "1rem",
};

const videoViewHeader = "Video Equipment";
export default function VideoEquipment() {
 


const activateVideoFormCreate = useStore((state)=>(state.activateVideoFormCreate))



  return (
    <div style={backgroundStyle}>
      <Header>{videoViewHeader}</Header>

      <StyledLink href={""}>{videoViewHeader}</StyledLink>

      <Link href={"/add"}>
        <StyledButton
          disabled={false}
          onClick={() => {
            activateVideoFormCreate()
          }}
        >
          Add
        </StyledButton>
      </Link>
      <VideoEquipmentStyledTable />
    </div>
  );
}
