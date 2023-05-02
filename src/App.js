import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./reuseable/Header";
import Marketplace from "./components/Marketplace";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact="true" element={<Home/>} />
        <Route path="/marketplace"  element={<Marketplace/>} />
      </Routes>
    </div>
  );
}

export default App;
