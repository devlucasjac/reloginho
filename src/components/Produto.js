import styles from "./Produto.module.css";
//esta biblioteca é utilizada para se trabalhar com as props passadas a elementos filhos
import PropTypes from "prop-types";

function Produto({ foto, preço, nome }) {
  return (
    <div className={styles.divConteiner}>
      <img src={foto} alt={nome} />
      <h3 className={styles.textConteiner}>{nome}</h3>
      <h4>R$ : {preço}</h4>
    </div>
  );
}
/* Aqui são definidas como devem ser as caractersticas das props passadas ao 
elemento filho, isto funciona como uma especie de serializer, caso alguma prop seja 
enviada de maneira inadequada uma mensagem de erro será disparada no console do navegador*/
Produto.propTypes = {
  foto: PropTypes.string,
  nome: PropTypes.string.isRequired,
  preço: PropTypes.number.isRequired,
};

/* Aqui são definidos os valores default das props, no caso de nenhum valor 
ser passado estes serão utilizados */
Produto.defaultProps = {
  foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKa_NQjH9wgtYXkCzzL9KReR-T0lV_uSJYw68ftKqP2A&s",
  nome: "N/A",
  preço: "N/A",
};

export default Produto;
