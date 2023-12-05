import Button from "./Button";

function Eventos({ numero }) {
  function clica(e) {
    console.log(`clicou ${numero}`);
  }
  return (
    <>
      <Button event={clica} text="primeiro evento" />
    </>
  );
}

export default Eventos;
