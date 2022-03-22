import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => (props.primary ? "purple" : "white")};
  color: ${(props) => (props.primary ? "white" : "purple")};
  border: 2px solid purple;
  cursor: pointer;
  font-size: 1.1rem;
  border-radius: 5px;
  padding: 0.7rem 2rem;
  font-family: "tahoma";
  &:hover {
    transform: scale(0.97);
  }
`;

//! inheritance
export const TomatoButton = styled(Button)`
  background: ${(props) => (props.primary ? "tomato" : "white")};
  color: ${(props) => (props.primary ? "white" : "tomato")};
  border-color: tomato;
`;
