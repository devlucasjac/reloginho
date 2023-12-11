import "./App.css";
import Eventos from "./components/Eventos";
import Form from "./components/Form";
import List from "./components/Lista";
import Saudacao from "./components/Saudacao";
import { useState } from "react";

function App() {
  let hora = 5;
  let itens = ["Django", "python", "javascript", "React"];
  const [email, setEmail] = useState();

  function conta(a) {
    let b = 1;
    for (let x = 1; x <= a; x++) {
      b *= x;
    }
    return b;
  }

  return (
    <div className="App">
      <h1>Olá React De novo!</h1>
      <h2>vou ficar aqui por mais tempo ainda! {conta(hora)}</h2>
      <Eventos numero={1} />
      <Eventos numero={2} />
      <Form
        nome="lucas"
        /*Abaixo os States usados no elemento form são passados por prop
      Isto é chamada State Lift em React*/
        setEmail={setEmail}
        email={email}
      />
      <Saudacao text={email} />
      <List itens={itens} />
      <List itens={[]} />
    </div>
  );
}

export default App;
