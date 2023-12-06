import Button from "./Button";

function Eventos({ numero }) {
  function clica(e) {
    console.log(`clicou ${numero}`);
  }
  return (
    <>
      <Button /*Logo abaixo pode se ver a passagem de um metodo 
      por meio de um prop */
        event={clica}
        text="primeiro evento"
      />
    </>
  );
}

export default Eventos;
