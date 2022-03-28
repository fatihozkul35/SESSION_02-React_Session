import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  align-items: ${(props) => (props.align ? props.align : "center")};
  flex-wrap: ${(props) => props.wrap && props.wrap};
`;
