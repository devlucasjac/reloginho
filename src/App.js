import "./App.css";
import Produto from "./components/Produto";

function App() {
  let hora = 4;
  let pic =
    "https://m.media-amazon.com/images/I/71oNM3Qg57L._AC_UF894,1000_QL80_.jpg";
  let nome = "Liquidificador";
  let price = 319.5;

  function conta(a) {
    let b = 1;
    for (let x = 1; x < a; x++) {
      b *= x;
    }
    return b;
  }

  return (
    <div className="App">
      <h1>Olá React De novo!</h1>
      <h2>vou ficar aqui por mais tempo ainda!{conta(hora)}</h2>
      <Produto foto={pic} nome={nome} preço={price} />
      <Produto nome={nome} preço={price} />
      <Produto foto={pic} preço={price} />
      <Produto />
    </div>
  );
}

export default App;
