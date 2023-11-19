import styled from 'styled-components';
import useSWR from "swr"
import StyledButton from '../Button';
import Link from 'next/link';

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  font-size: 16px;
  color: #333;
  margin-top: 70px;
`;

const StyledTableHeader = styled.thead`
  background-color: #f2f2f2;
`;

const StyledTableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const StyledTableHeaderCell = styled.th`
  padding: 10px;
  border-bottom: 2px solid #837a7a;
`;


const StyledTableHeaderActioCell = styled.th`
  padding: 10px;
  border-bottom: 2px solid #837a7a;
`;

const StyledTableCell = styled.td`
  padding: 10px;
`;

export default function VideoEquipmentStyledTable() {
  

  const { data, error } = useSWR("/api/video" );
 

  if (error) {
    console.error('Error fetching data:', error);
    return <h1>Error loading data</h1>;
  }

  if (!data) {
    
    return <h1>Loading...</h1>;
  }
  return (
    <StyledTable>
      <StyledTableHeader>
      <StyledTableRow>
          <StyledTableHeaderCell>Name</StyledTableHeaderCell>
          <StyledTableHeaderCell>Type</StyledTableHeaderCell>
          <StyledTableHeaderCell>Model</StyledTableHeaderCell>
          <StyledTableHeaderCell>Serial Number</StyledTableHeaderCell>
          <StyledTableHeaderCell>Purchase Date</StyledTableHeaderCell>
          <StyledTableHeaderCell>Condition</StyledTableHeaderCell>
          <StyledTableHeaderCell>Color</StyledTableHeaderCell>
          <StyledTableHeaderCell>Availability</StyledTableHeaderCell>
          <StyledTableHeaderCell>Location</StyledTableHeaderCell>
          <StyledTableHeaderCell>Details</StyledTableHeaderCell>
          <StyledTableHeaderCell>Manage</StyledTableHeaderCell>
        </StyledTableRow>
      </StyledTableHeader>
      <tbody>
        {data.map((item) => (
          <StyledTableRow key={item._id}>
            <StyledTableCell>{item.name}</StyledTableCell>
            <StyledTableCell>{item.type}</StyledTableCell>
            <StyledTableCell>{item.model}</StyledTableCell>
            <StyledTableCell>{item.serialnumber}</StyledTableCell>
            <StyledTableCell>{item.purchasedate}</StyledTableCell>
            <StyledTableCell>{item.condition}</StyledTableCell>
            <StyledTableCell>{item.color || item.brand}</StyledTableCell>
            <StyledTableCell>{item.availability}</StyledTableCell>
            <StyledTableCell>{item.departmentlocation}</StyledTableCell>
            <StyledTableCell><Link href={`/video/${item._id}`}><StyledButton >SHOW</StyledButton></Link></StyledTableCell>
            <StyledTableCell><StyledButton>EDIT</StyledButton></StyledTableCell>
          </StyledTableRow>
        ))}
      </tbody>
    </StyledTable>
  );
}



