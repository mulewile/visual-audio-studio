import styled from "styled-components";

const StyledFooter = styled.footer`
  background: #0a1828;
  color: #fff;
  padding: 10px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Footer = () => {
  return <StyledFooter>While we create, others imitate.</StyledFooter>;
};

export default Footer;
