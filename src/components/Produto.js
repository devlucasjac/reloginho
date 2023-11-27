import styles from "./Produto.module.css";

function Produto({ foto, preço, nome }) {
  return (
    <div className={styles.divConteiner}>
      <img src={foto} alt={nome} />
      <h3 className={styles.textConteiner}>{nome}</h3>
      <h4>R$ : {preço}</h4>
    </div>
  );
}

export default Produto;
