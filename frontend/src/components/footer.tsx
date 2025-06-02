import Logo from './logo';
import sourcePear from '../assets/pear.svg';
import iconCompany from '../assets/icon-company.png';

import { Link } from 'react-router';

function Footer() {
  return (
    <footer className='flex justify-center mt-6  bg-black text-white pt-10 pb-8'>
      <nav className="flex gap-9 items-baseline justify-between basis-[1200px] mx-3">
        <div className="flex items-baseline ">
          <img className="mr-2 " src={sourcePear} alt="pear" />
          <Logo fontSize="24px" width="87px" color='white'/>
        </div>

        <div className='flex gap-20'>
          <Link to="/cookbook">Cookbooks</Link>
          <Link to="/recipe">Recipes</Link>
          <Link to="*">About Us</Link>
        </div>

        <p className='text-primary'>plzfeedme@itechart.com</p>

        <div className="flex gap-x-9 ">
          <p>Study Project v2, 2021</p>
          <img className="mr-2 object-contain" src={iconCompany} alt="pear" />
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
