import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-orange-400 mt-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="">
          Navbar
        </a>
        <a className="navbar-brand" href="">
          Inicio
        </a>
        <Link className="navbar-brand" href="">
          Clientes
        </Link>
        <Link to={'/productos'} className="navbar-brand">
          Productos
        </Link>
        <a className="navbar-brand" href="">
          Proveedores
        </a>
      </div>
    </nav>
  );
};

export default Header;
