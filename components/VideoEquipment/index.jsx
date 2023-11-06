import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import videoEquipment from '../../data/video_equipment.json';

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 16px;
  color: #333;

`;
const StyledListItem = styled.li`
  margin: 8px 0;
`;

function VideoEquipmentStyledList() {
  return (

 <StyledList>
      {videoEquipment.map((item) => (
        <StyledListItem key={uuidv4()}>
          {item.Name} - {item.Type} | {item.Type} |  {item.Model} | {item.SerialNumber}
        </StyledListItem>
      ))}
    </StyledList>
  );
}

export default VideoEquipmentStyledList;
