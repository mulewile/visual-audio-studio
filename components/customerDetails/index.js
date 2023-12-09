import styled from "styled-components";
import useSWR from "swr";
import StyledButton from "../Button";
import Link from "next/link";

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
      <StyledTableHeader>
        <StyledTableRow>
          <StyledTableHeaderCell>Name</StyledTableHeaderCell>
          <StyledTableHeaderCell>Address</StyledTableHeaderCell>
          <StyledTableHeaderCell>Details</StyledTableHeaderCell>
          <StyledTableHeaderCell>Manage</StyledTableHeaderCell>
        </StyledTableRow>
      </StyledTableHeader>
      <tbody>
        {data.map((item) => (
          <StyledTableRow key={item._id}>
            <StyledTableCell>{item.company_name}</StyledTableCell>
            <StyledTableCell>{`${item.address.street}, ${item.address.city}, ${item.address.state} ${item.address.zip_code}`}</StyledTableCell>
            <StyledTableCell>
              <Link href={`/customer/${item._id}`}>
                <StyledButton>SHOW</StyledButton>
              </Link>
            </StyledTableCell>
            <StyledTableCell>
              <StyledButton disabled={true}>EDIT</StyledButton>
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </tbody>
    </StyledTable>
  );
}
