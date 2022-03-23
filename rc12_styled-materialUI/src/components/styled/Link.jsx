import styled, { css } from "styled-components";

const Link = styled.a`
  font-size: 1rem;
  text-decoration: none;
  color: white;
  &:hover {
    opacity: 0.7;
  }
  ${(props) =>
    props.secondary &&
    css`
      background: yellowgreen;
      border-radius: 5px;
      padding: 0.3rem;
      color: black;
    `}
`;
export const ExtendedLink = styled(Link)`
  color: black;
  background: blue;
`;

export default Link;
