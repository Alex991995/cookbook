import Logo from './logo';
import source from '../assets/pear.svg';
import defaultImage from 'assets/icon-user.png';
import { Link } from 'react-router';
import { useNavigate } from 'react-router';
import { useGetUserQuery, useLogOutMutation } from 'store/api/api';
import Button from './button';

function Header() {
  const navigate = useNavigate();
  const { data } = useGetUserQuery();
  const [logOut, result] = useLogOutMutation();

  function handleClick() {
    logOut();
    console.log(result)
  }

  return (
    <header className="shadow-[0_0_25px_0_rgba(0,0,0,0.12)] py-6">
      <nav className="flex justify-around ">
        <div className="flex gap-x-9 items-baseline">
          <div className="flex items-baseline cursor-pointer" onClick={() => navigate('/')}>
            <img className="mr-2 " src={source} alt="pear" />
            <Logo fontSize="24px" width="87px" color="black" />
          </div>
          <Link to="/cookbook">Cookbooks</Link>
          <Link to="/recipe">Recipes</Link>
        </div>
        <div className="flex gap-x-2 items-center basis-40">
          {data ? (
            <>
              <Link to="/account/setting">
                <img src={data.image || defaultImage} className="w-16 rounded-2xl" alt="" />
              </Link>
              <Button text="Log Out" maxWidth="120px" paddingX="0" handleClick={handleClick} />
            </>
          ) : (
            <>
              <Link to="/login">Sign In</Link>
              <Link to="/register">Sign Up</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
