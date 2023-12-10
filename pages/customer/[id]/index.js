import Router from "next/router";
import useSWR from "swr";
import { styled } from "styled-components";
import StyledHeader from "@/components/Header";
import StyledItemCard from "@/components/DetailsCard";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import myStudioImage from "../../../resources/customer.png";

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

const linkText = " CUSTOMER LIST";

export default function Details() {
  const router = useRouter();
  const { id } = router.query;

  const { data: customer, error } = useSWR(id ? `/api/customer/${id}` : null);
  if (error) {
    return <p>Error loading customer data...</p>;
  }
  if (!customer) {
    return (
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading customer details...</span>
      </div>
    );
  }
  const HEADERTEXT = `${customer.company_name} Details`;
  console.log("Customer details and id are ====", customer);
  return (
    <>
      <div style={backgroundStyle}>
        <StyledHeader>{HEADERTEXT}</StyledHeader>
        <StyledLink href={"/customerList"}>{linkText}</StyledLink>
        <StyledItemCardContainer>
          <StyledItemCard>
            <h2>{customer.company_name}</h2>
            <p>
              Address:{" "}
              {`${customer.address.street}, ${customer.address.city}, ${customer.address.state} ${customer.address.zip_code}`}
            </p>
            <p>Contact Person: {`${customer.contact_person.name}`}</p>
            <p>Email: {`${customer.contact_person.email}`}</p>
          </StyledItemCard>
          <StyledItemCard>
            <h2>MORE DETAILS</h2>
            <p>Industry: {`${customer.industry}`}</p>
            <p>Specialisation: {`${customer.specialization}`}</p>
          </StyledItemCard>
        </StyledItemCardContainer>
      </div>
    </>
  );
}
