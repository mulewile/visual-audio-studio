import StyledHeader from "@/components/Header";
import Footer from "@/components/Footer";
import VideoEquipmentStyledTable from "../components/VideoEquipment/index"
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import useSWR from "swr"
import StyledButton from './../components/Button';
import { useRouter } from "next/router";
import { StyledLink } from "./video/[id]";
import Image from "next/image";
import Link from "next/link";
import myVideoImage from "../resources/videocamera.png";


const videoLinkText = "Video Equipment";
const audioLinkText = "Audio Equipment";

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

export default function HomePage() {
  return (
    <div style={backgroundStyle}>
      <StyledHeader>Visual Audio Studio</StyledHeader>
      <StyledLink href={"/videoEquip"}>{videoLinkText}</StyledLink>
      <StyledLink href={"/audioEquip"}>{audioLinkText}</StyledLink>
    </div>
  );
}
