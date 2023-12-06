function List({ itens }) {
  return (
    <div>
      <h3>Lista de itens:</h3>
      {itens.length > 0 ? (
        itens.map((item, index) => <p key={index}>{item}</p>)
      ) : (
        <p>Sem itens na lista</p>
      )}
    </div>
  );
}

export default List;
