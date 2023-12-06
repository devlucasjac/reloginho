import { useState } from "react";

function Form({ nome }) {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function cadastro(e) {
    e.preventDefault();
    setUserEmail(email);
    console.log("cadastrou " + nome);
  }

  return (
    <form>
      <p>Cadastre seu e-mail: {nome}</p>
      <input
        type="email"
        placeholder={`Digite seu E-mail ${nome}`}
        /*Esta função onChange esta alterando o valor do state e-mail
        a partir do setEmail, de acordo com o que foi digitado na caixa input*/
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={cadastro} type="submit">
        Cadastrar!
      </button>

      {
        /* Aqui é feita a renderização condicional, se utilizando o state userEmail
      como parametro onde o simbolo && funciona como uma condicional if/else.*/
        userEmail && (
          <div>
            <h2>o e-mail {email} foi cadastrado</h2>
          </div>
        )
      }
    </form>
  );
}

export default Form;
