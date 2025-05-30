import Logo from './logo';
import source from '../assets/pear.svg';
import { Link } from 'react-router';

function Header() {
  return (
    <header>
      <nav className="flex justify-around">
        <div className="flex gap-x-9 items-baseline">
          <div className="flex items-baseline">
            <img className="mr-2 " src={source} alt="pear" />
            <Logo fontSize="24px" width="87px" />
          </div>
          <Link to="/cookbook">Cookbooks</Link>
          <Link to="/recipe">Recipes</Link>
        </div>
        <div className="flex gap-x-2 items-center">
          <Link to="/login">Sign In</Link>
          <Link to="/register">Sign Up</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
