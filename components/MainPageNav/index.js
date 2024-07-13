import styled from "styled-components";
import Link from "next/link";

const videoLinkText = "Video Equipment";
const audioLinkText = "Audio Equipment";
const customerLinkText = "Customer Details";
const lightingLinkText = "Lighting Equipment";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  width: 100%;
  padding: 1rem;
  margin: 0 auto;
  border-radius: 8px;
`;

const CustomLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;

  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.3);

  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    transform: scale(1.05);
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.5);
    transform: scale(0.95);
  }
`;

const MainNavBar = () => {
  return (
    <StyledNav>
      <CustomLink href={"/videoEquip"}>{videoLinkText}</CustomLink>
      <CustomLink href={"/audioEquip"}>{audioLinkText}</CustomLink>
      <CustomLink href={"/lightingEquip"}>{lightingLinkText}</CustomLink>
      <CustomLink href={"/customerList"}>{customerLinkText}</CustomLink>
    </StyledNav>
  );
};

export default MainNavBar;
