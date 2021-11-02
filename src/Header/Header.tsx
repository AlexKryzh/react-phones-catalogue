import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {
    return (
    <header className="header fixed-top">
        <h1 className="visually-hidden">Phones Catalogue App</h1>
        <nav className="header__navbar navbar navbar-expand-md">
          <div className="container-lg">
            <Link to="/" className="header__title">Phones Catalogue App</Link>
              <ul className="header__nav navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link" aria-current="page">Home</Link>
                </li>
              </ul>
              {/* <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form> */}
          </div>
        </nav>
    </header>
  );
}

export default Header;
