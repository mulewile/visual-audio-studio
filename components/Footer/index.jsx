import styled from "styled-components";

const StyledFooter = styled.footer`
  background: #1c1e1f;
  color: #fff;
  padding: 10px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return <StyledFooter>While we create, others imitate.</StyledFooter>;
};

export default Footer;
