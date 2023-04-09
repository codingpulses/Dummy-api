import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <div>
    <nav className="navbar">
      <div className="logo">
        <a href="/">My App</a>
      </div>
      <ul className="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/posts">Posts</Link></li>
      </ul>
      </nav>
      </div>
  );
}

export default NavBar;