import styled from "styled-components";
import { FlexContainer } from "../../components/globalStlyes/GlobalStyles";

export const AboutContainer = styled(FlexContainer)`
  flex-direction: column;
  background-color: #00adb5;
  min-height: calc(100vh - 80px);
  line-height: 2;
  span {
    color: white;
    font-family: "Girassol", sans-serif;
    font-size: 3rem;
  }
`;

export const InfoContainer = styled.div`
  text-align: right;
  margin: 0 10px;
  max-width: 1000px;
  border: 1px solid white;
  padding: 25px;
  border-radius: 5px;
  a {
    color: white;
  }
`;
export const StyledImage = styled.img`
  width: 500px;
  margin-bottom: 2rem;
`;
