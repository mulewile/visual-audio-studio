import StyledHeader from "@/components/Header";
import Footer from "@/components/Footer";
import VideoEquipmentStyledTable from "../components/VideoEquipment/index";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import useSWR from "swr";
import StyledButton from "../components/Button";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { StyledLink } from "./video/[id]";
import myVideoImage from "../resources/video_camera_one.png";

const linkText = "MENU VIEW";

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
};

const videoViewHeader = "Video Equipment";
export default function VideoEquipment() {
  return (
    <div style={backgroundStyle}>
      <StyledHeader>{videoViewHeader}</StyledHeader>

      <StyledLink href={"/"}>{linkText}</StyledLink>

      <VideoEquipmentStyledTable />
    </div>
  );
}
