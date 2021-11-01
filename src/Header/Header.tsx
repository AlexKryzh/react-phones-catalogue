import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
  <header className="Header">
    <h1>Phones Catalogue</h1>
		<Link to="/">Home</Link>
	</header>
  );
}

export default Header;
