import StyledHeader from "@/components/Header";
import Footer from "@/components/Footer";
import AudioEquipmentStyledTable from "@/components/AudioEquipment";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import useSWR from "swr";
import StyledButton from "../components/Button";
import { useRouter } from "next/router";
import { StyledLink } from "./audio/[id]";

const linkText = "Back to Main";

const videoViewHeader = "Audio Equipment";

export default function AudioEquipment() {
  return (
    <div>
      <StyledHeader>{videoViewHeader}</StyledHeader>
      <StyledLink href={"/"}>{linkText}</StyledLink>
      <AudioEquipmentStyledTable />
    </div>
  );
}
