function Saudacao({ text }) {
  function gerarSaudacao(saudacao) {
    return `Seja Bem-Vindo ${saudacao} `;
  }

  return (
    <>
      {
        //Aqui é utilizado uma condicional com apenas if
        text && <p>{gerarSaudacao(text)}</p>
      }
    </>
  );
}

export default Saudacao;
