import StyledHeader from "@/components/Header";
import Footer from "@/components/Footer";
import CustomerDetailsStyledTable from "@/components/customerDetails";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import useSWR from "swr";
import StyledButton from "../components/Button";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { StyledLink } from "./customer/[id]";
import myVideoImage from "../resources/kunde.png";
import { TableContainer } from "@/components/customerDetails";

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

const customerViewHeader = "Customer Details";
export default function customerDetails() {
  return (
    <div style={backgroundStyle}>
      <StyledHeader>{customerViewHeader}</StyledHeader>
      <StyledLink href={"/"}>{linkText}</StyledLink>
      <TableContainer>
        <CustomerDetailsStyledTable />
      </TableContainer>
    </div>
  );
}
