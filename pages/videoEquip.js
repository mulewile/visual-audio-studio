import StyledHeader from "@/components/Header";
import Footer from "@/components/Footer";
import VideoEquipmentStyledTable from "../components/VideoEquipment/index";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import useSWR from "swr";
import StyledButton from "../components/Button";
import { useRouter } from "next/router";
import { StyledLink } from "./video/[id]";

const linkText = "Back to Main";

const videoViewHeader = "Video Equipment";
export default function VideoEquipment() {
  return (
    <div>
      <StyledHeader>{videoViewHeader}</StyledHeader>
      <StyledLink href={"/"}>{linkText}</StyledLink>
      <VideoEquipmentStyledTable />
    </div>
  );
}
