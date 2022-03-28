import styled from "styled-components";
import { FlexContainer } from "../../components/globalStlyes/GlobalStyles";

export const MainContainer = styled(FlexContainer)`
  flex-direction: row;
  background-color: #00adb5;
`;

export const RecipeCard = styled(FlexContainer)`
  flex-direction: column;
  height: 300px;
  background: #e1f1dd;
  padding: 5px;
  border-radius: 3px;
  width: 300px;
  margin: 10px;
  box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.3);
  &:hover {
    box-shadow: none;
    transition: all 0.3s ease-in;
  }
`;

export const RecipeImage = styled.img`
  height: 150px;
  border-radius: 10px;
`;

export const Button = styled.button`
  background-color: #00adb5;
  padding: 5px;
  outline: none;
  height: 2rem;
  border: none;
  margin: 10px;
  border-radius: 3px;
  cursor: pointer;
`;

export const RecipeHeader = styled.h1`
  font-size: 1.5rem;
  text-align: center;
`;

export const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px;
`;

export const HomeImg = styled.img`
  width: 80%;
  max-width: 750px;
`;
