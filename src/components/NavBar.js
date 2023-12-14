import { Link } from "react-router-dom";

function NavBar() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/empresa">Empresa</Link>
      </li>
      <li>
        <Link to="/contrato">Contrato</Link>
      </li>
    </ul>
  );
}

export default NavBar;