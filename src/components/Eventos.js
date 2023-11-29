function Eventos() {
  function clica(e) {
    console.log("clicou");
  }
  return (
    <>
      <button onClick={clica}>Clique aqui!</button>
    </>
  );
}

export default Eventos;
