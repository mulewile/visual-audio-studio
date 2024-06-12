import useStore from "@/store/formStore";
import Header from "@/components/Header";
import CustomerDetailsStyledTable from "@/components/customerDetails";
import StyledButton from "../components/Button";
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
export default function CustomerDetails() {

  const activateCustomerFormCreate = useStore((state)=>(state.activateCustomerFormCreate))
  return (
    <div style={backgroundStyle}>
      <Header>{customerViewHeader}</Header>
      <StyledLink href={""}>{customerViewHeader}</StyledLink>
      <Link href={`/add`}>
        <StyledButton
          disabled={false}
          onClick={() => {
            activateCustomerFormCreate();
          }}
        >
          Add
        </StyledButton>
      </Link>
      <TableContainer>
        <CustomerDetailsStyledTable />
      </TableContainer>
    </div>
  );
}
