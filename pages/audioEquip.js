import StyledHeader from "@/components/Header";
import Footer from "@/components/Footer";
import AudioEquipmentStyledTable from "@/components/AudioEquipment";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import useSWR from "swr";
import { useRouter } from "next/router";
import { StyledLink } from "./audio/[id]";
import Link from "next/link";
import Image from "next/image";
import myAudioImage from "../resources/mixer.png";

const linkText = "MENU VIEW";

const audioViewHeader = "Audio Equipment";

export const backgroundStyle = {
  backgroundImage: `url(${myAudioImage.src})`,
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

export default function AudioEquipment() {
  return (
    <div style={backgroundStyle}>
      <StyledHeader>{audioViewHeader}</StyledHeader>
      <StyledLink href={"/"}>{linkText}</StyledLink>
      <AudioEquipmentStyledTable />
    </div>
  );
}
