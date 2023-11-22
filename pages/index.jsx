import StyledHeader from "@/components/Header";
import Footer from "@/components/Footer";
import VideoEquipmentStyledTable from "../components/VideoEquipment/index"
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import useSWR from "swr"
import StyledButton from './../components/Button';
import { useRouter } from "next/router";
import { StyledLink } from "./video/[id]";

const videoLinkText = "Video Equipment"
const audioLinkText = "Audio Equipment"
export default function HomePage() {

  return (
    <div>
      <StyledHeader>Visual Audio Studio</StyledHeader>
      <StyledLink href={"/videoEquip"}>{videoLinkText}</StyledLink>
      <StyledLink href={"/audioEquip"}>{audioLinkText}</StyledLink>
    </div>
  );
}
