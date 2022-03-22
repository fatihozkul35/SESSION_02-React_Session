import Buttons from "./Buttons";
import MakeStylesComp from "./MakeStylesComp";
import TextFieldComp from "./TextFieldComp";
import { createTheme, ThemeProvider } from "@mui/material";
import { green, orange } from "@mui/material/colors";
import AppBarComp from "./AppBarComp";
import CardComp from "./CardComp";
import Checkbox from "./CheckboxComp";

const MaterialUI = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: orange[400],
      },
      secondary: {
        main: green[300],
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <AppBarComp />
      <Buttons />
      <br />
      <TextFieldComp />
      <br />
      <MakeStylesComp />
      <div
        style={{ display: "flex", justifyContent: "center", margin: "1rem" }}
      >
        <CardComp />
      </div>
      <Checkbox />
    </ThemeProvider>
  );
};

export default MaterialUI;
