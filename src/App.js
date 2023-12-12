import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Empresa from "./pages/Empresa";
import Home from "./pages/Home";
import Contrato from "./pages/Contrato";

function App() {
  /*Em navbar são declarados os links que levarão aos destinos 
  e em Route se define a view dessa rota*/
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/empresa" element={<Empresa />} />

        <Route path="contrato" element={<Contrato />} />
      </Routes>
    </Router>
  );
}

export default App;
