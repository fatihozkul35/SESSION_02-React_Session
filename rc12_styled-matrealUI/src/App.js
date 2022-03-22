import MaterialUI from "./components/material-ui/MaterialUI";
import StyledComponents from "./components/styled/StyledComponents";
import { Wrapper } from "./components/styled/Wrapper";
import HeaderText from "./components/styled/HeaderText";

function App() {
  return (
    <div style={{ textAlign: "center", color: "hotpink" }}>
      <HeaderText color="blue">MATERIAL UI COMPONENT</HeaderText>
      <MaterialUI />
      <StyledComponents />
    </div>
  );
}

export default App;
