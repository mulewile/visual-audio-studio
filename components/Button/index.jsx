import styled from 'styled-components';

const StyledButton = styled.button`
  color: #3C4142;
  background-color: #f0f0f0;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.1s;

  &:hover {
    background-color: #e2e2e2;
    transform: scale(1.05);
  }

  &:active {
    background-color: #d0d0d0;
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(60, 64, 66, 0.5);
  }

  &:disabled {
    background-color: #cccccc;
    color: #777777;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

export default function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
