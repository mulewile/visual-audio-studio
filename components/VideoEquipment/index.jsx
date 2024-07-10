import styled from 'styled-components';
import useSWR from "swr"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import useStore from '@/store/formStore';
import StyledButton from '../Button';
import Link from 'next/link';
import LoadingComponent from '../LoadingHeader';

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


export default function VideoEquipmentStyledTable() {
  

  const success = () => toast.success("Rating successfully updated");
  const errorToast = () => toast.error("Failed to update rating");
  const catchError = () => toast.error("Error updating rating. Contact admin.");
const activateVideoFormEdit = useStore((state)=>(state.activateVideoFormEdit))
const setVideoToEditId = useStore((state)=>(state.setVideoToEditId))
  const { data, error } = useSWR("/api/video" );

  async function deleteVideo(id) {
    const response = await fetch(`/api/video/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      toast.success("Video equipment deleted");
    }else{
      toast.error("Failed to delete video equipment");
    }
  }

  function handleDelete(id) {
    if (confirm("Are you sure you want to delete this item?")) {
      deleteVideo(id);
    }
  }
    
 

  if (error) {
    return (
      <ErrorContainer>
        <ErrorMessage>Error loading data: Administrator will connect to the database soon</ErrorMessage>
        <ErrorMessage>{error.message}</ErrorMessage>
      </ErrorContainer>
    );
  }

  if (!data) {
    
    return <LoadingComponent/>;
  }
  return (
  <TableContainer>
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
          <StyledTableHeaderCell>Type</StyledTableHeaderCell>
          <StyledTableHeaderCell>Model</StyledTableHeaderCell>
          <StyledTableHeaderCell>Serial Number</StyledTableHeaderCell>
          <StyledTableHeaderCell>Purchase Date</StyledTableHeaderCell>
          <StyledTableHeaderCell>Condition</StyledTableHeaderCell>
          <StyledTableHeaderCell>Color</StyledTableHeaderCell>
          <StyledTableHeaderCell>Availability</StyledTableHeaderCell>
          <StyledTableHeaderCell>Location</StyledTableHeaderCell>
          <StyledTableHeaderCell>Details</StyledTableHeaderCell>
          <StyledTableHeaderCell>Update</StyledTableHeaderCell>
          <StyledTableHeaderCell>Delete</StyledTableHeaderCell>
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
            <StyledTableCell><Link href={`/edit/${item._id}`}><StyledButton disabled={false} onClick={() => {
            activateVideoFormEdit(), setVideoToEditId(item._id);
          }} >EDIT</StyledButton></Link></StyledTableCell>
          <StyledTableCell><StyledButton onClick={()=>handleDelete(item._id)} disabled={false} >DELETE</StyledButton></StyledTableCell>
          </StyledTableRow>
        ))}
      </tbody>
    </StyledTable>
  </TableContainer>
  );
}



