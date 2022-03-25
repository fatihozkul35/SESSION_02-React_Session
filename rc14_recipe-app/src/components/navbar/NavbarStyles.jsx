import styled from "styled-components";
import { Link } from "react-router-dom";
import { FlexContainer } from "../globalStlyes/GlobalStyles";

export const Nav = styled(FlexContainer)`
  padding: 1rem 2rem;
  background: #e1f1dd;
  font-size: 2rem;
  font-family: "Girassol", sans-serif;
`;

export const Logo = styled(Link)`
  padding: 1rem 0;
  color: #393e46;
  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;
  font-family: "Girassol", sans-serif;

  span {
    font-weight: 400;
    font-size: 2rem;
    color: #00adb5;
  }
`;

export const MenuLink = styled(Link)`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #02475e;
  transition: all 0.3s ease-in;
  font-size: 2rem;
  font-family: "Girassol", sans-serif;
  &:hover {
    color: #00adb5;
    font-weight: bold;
  }
  @media (max-width: 940px) {
    background-color: #e1f1dd;
    border: 1px solid #00adb5;
    border-radius: 10px;
    width: 100%;
  }
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  font-family: "Girassol", sans-serif;
  color: #00adb5;
  @media (max-width: 940px) {
    display: flex;
  }
`;

export const Menu = styled(FlexContainer)`
  position: relative;
  @media (max-width: 940px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
  }
`;
