import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src="/images/nameLogoW.png" alt="Logo" />
      </Link>
    </header>
  );
}
