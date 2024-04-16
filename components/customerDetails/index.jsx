import styled from "styled-components";
import useSWR from "swr";
import StyledButton from "../Button";
import Link from "next/link";
import Rating from "react-rating";
import useStore from "@/store/formStore";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TableContainer = styled.div`
  overflow: auto;
  height: 65vh;
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;

  display: block;
  font-size: 16px;
  color: #333;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const StyledTableHeader = styled.thead`
  background-color: #f2f2f2;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const StyledTableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const StyledTableHeaderCell = styled.th`
  padding: 10px;
  border-bottom: 2px solid #837a7a;
`;

const StyledTableCell = styled.td`
  padding: 10px;
  background-color: whitesmoke;
`;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ErrorMessage = styled.h1`
  text-align: center;
  color: red;
`;

export default function CustomerDetailsStyledTable() {
  const { data, error } = useSWR("/api/customer");

  const success = () => toast.success("Rating successfully updated");
  const errorToast = () => toast.error("Failed to update rating");
  const catchError = () => toast.error("Error updating rating. Contact admin.");

  const activateCustomerFormEdit = useStore((state) => state.activateCustomerFormEdit);
  const setCustomerToEditId = useStore((state) => state.setCustomerToEditId);

  const insetCustomerRating = async (value, item_id) => {

    try {
      const response = await fetch(`api/customer/${item_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rating: value }),
      });

      const data = await response.json();
      console.log("Data from posting customer rating:", data);

      if (response.ok) {
        success();
        return;
      } else {
        errorToast();
      }
    } catch (error) {
      console.error("Error while posting customer rating:", error);
      catchError();
    }
  };

  if (error) {
    return (
      <ErrorContainer>
        <ErrorMessage>
          Error loading data: Administrator will connect to the database soon
        </ErrorMessage>
      </ErrorContainer>
    );
  }

  if (!data) {
    return <h1>Loading...</h1>;
  }
  return (
    <StyledTable>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <StyledTableHeader>
        <StyledTableRow>
          <StyledTableHeaderCell>Name</StyledTableHeaderCell>
          <StyledTableHeaderCell>Address</StyledTableHeaderCell>
          <StyledTableHeaderCell>Our Favourites</StyledTableHeaderCell>
          <StyledTableHeaderCell>Details</StyledTableHeaderCell>
          <StyledTableHeaderCell>Manage</StyledTableHeaderCell>
          <StyledTableHeaderCell></StyledTableHeaderCell>
        </StyledTableRow>
      </StyledTableHeader>
      <tbody>
        {data.map((item) => (
          <StyledTableRow key={item._id}>
            <StyledTableCell>{item.company_name}</StyledTableCell>
            <StyledTableCell>{`${item.address.street}, ${item.address.city}, ${item.address.state} ${item.address.zip_code}`}</StyledTableCell>
            <StyledTableCell>
              <Rating
                onClick={(value) => insetCustomerRating(value, item._id)}
                initialRating={item.rating}
                fractions={2}
                quiet={false}
              />
            </StyledTableCell>
            <StyledTableCell>
              <Link href={`/customer/${item._id}`}>
                <StyledButton>SHOW</StyledButton>
              </Link>
            </StyledTableCell>
            <StyledTableCell>
              <Link href={`/edit/${item._id}`}>
                <StyledButton
                  disabled={false}
                  onClick={() => {
                    activateCustomerFormEdit();
                    setCustomerToEditId(item._id);
                    
                  }}
                >
                  EDIT
                </StyledButton>
              </Link>
            </StyledTableCell>
            <StyledTableCell>
              <StyledButton disabled={true}>DELETE</StyledButton>
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </tbody>
    </StyledTable>
  );
}
