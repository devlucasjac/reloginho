function Form({ nome }) {
  function cadastro(e) {
    e.preventDefault();
    console.log("cadastrou " + nome);
  }

  return (
    <form onSubmit={cadastro}>
      <p>Meu cadastro {nome}</p>
      <button type="submit">Cadastrar!</button>
    </form>
  );
}

export default Form;
