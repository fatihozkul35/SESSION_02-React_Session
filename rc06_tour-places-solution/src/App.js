import "./App.scss";
import Cards from "./components/card/Cards";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Cards />
    </div>
  );
}

export default App;
