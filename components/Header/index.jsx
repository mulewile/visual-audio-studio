import styled from 'styled-components';
import { StyledLink } from '@/pages/audio/[id]'; 

const videoLinkText = "Video Equipment";
const audioLinkText = "Audio Equipment";
const customerLinkText = "Customer Details";

const StyledBackground = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%; 
  padding: 1rem;
  margin: 0 auto; 
  background-color: rgba(0, 0, 0, 0.8); 
  border-radius: 8px; 
`;



const StyledHeader = styled.header`
  color: #fff;
  font-size: 2rem; 
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const Header = () => {
  return (
    <StyledBackground>
      <StyledHeader>Visual Audio Studio</StyledHeader>
      <StyledNav>
        <StyledLink href={"/videoEquip"}>{videoLinkText}</StyledLink>
        <StyledLink href={"/audioEquip"}>{audioLinkText}</StyledLink>
        <StyledLink href={"/customerList"}>{customerLinkText}</StyledLink>
      </StyledNav>
    </StyledBackground>
  );
};

export default Header;

