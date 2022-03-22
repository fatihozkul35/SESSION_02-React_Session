import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${(props) => (props.bgColor ? props.bgColor : "white")};
  /* width: 50%; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem auto;
`;
