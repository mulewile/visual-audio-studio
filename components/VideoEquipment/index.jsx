import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import videoEquipment from '../../database/video_equipment.json';
import StyledButton from '../Button';

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

export default  function VideoEquipmentStyledTable() {
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
          <StyledTableHeaderCell>Manage Entries</StyledTableHeaderCell>
        </StyledTableRow>
      </StyledTableHeader>
      <tbody>
        {videoEquipment.map((item) => (
          <StyledTableRow key={uuidv4()}>
            <StyledTableCell>{item.Name}</StyledTableCell>
            <StyledTableCell>{item.Type}</StyledTableCell>
            <StyledTableCell>{item.Model}</StyledTableCell>
            <StyledTableCell>{item.SerialNumber}</StyledTableCell>
            <StyledTableCell>{item.PurchaseDate}</StyledTableCell>
            <StyledTableCell>{item.Condition}</StyledTableCell>
            <StyledTableCell>{item.Color || item.Brand}</StyledTableCell>
            <StyledTableCell>{item.Availability}</StyledTableCell>
            <StyledTableCell>{item.DepartmentLocation}</StyledTableCell>
            <StyledTableCell><StyledButton >EDIT</StyledButton></StyledTableCell>
          </StyledTableRow>
        ))}
      </tbody>
    </StyledTable>
  );
}



