import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

export default function Header() {
  const location = useLocation();

  return (
    <header>
      <Link to="/"><img src="/images/nameLogoW.png" alt="Logo" /></Link>
      <nav>
        <Link
          to="/"
          className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
        >
          Home
        </Link>
        <Link
          to="/todo-app"
          className={`nav-link ${location.pathname === '/todo-app' ? 'active' : ''}`}
        >
          Todo App
        </Link>
      </nav>
    </header>
  );
}
