import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="p-4 text-white bg-blue-600">
      <ul className="flex justify-center gap-4 space-x-4">
        <li>
          <Link to="/todos">Todos</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
