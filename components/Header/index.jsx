import styled from 'styled-components';

const StyledHeader = styled.header`
  background: linear-gradient(90deg, #0A1828, #178582, #BFA181);
  color: #fff;
  padding: 20px;
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-bottom: 2px solid #0A1828;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.4s ease, transform 0.2s ease, text-shadow 0.2s ease;

  &:hover {
    background: linear-gradient(90deg, #178582, #BFA181, #0A1828);
    color: #fff;
    transform: scale(1.05);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
`;

export default StyledHeader;

