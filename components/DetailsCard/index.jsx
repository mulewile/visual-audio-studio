import styled from "styled-components"


const StyledCard = styled.article`
  max-width: 375px;
  border-radius: 5px;
  margin-right: 12px;
  padding: 1.5rem;
  margin: 0.25rem;
  margin-top: 70px;
  margin-bottom: 40%;
  background-color: #f5f5f5;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);



  h2 {
    font-size: 24px;
    margin-bottom: 12px;
    width: 100%;
    padding: 1rem;
    background-color: #87744f;
    color: #ffffff;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  p {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 12px;
    text-align: justify;
    color: #333333;
  }

  span {
    font-weight: normal;
    color: #7c677f;
  }
`;


export default function StyledItemCard({children}){
    return ( <StyledCard>{children}</StyledCard>)
}