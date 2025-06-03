import { Link, Outlet } from 'react-router';
import UserInfo from '../features/account/user-info/user-info';

function AccountLayout() {
  return (
    <section className="flex  justify-center mx-7">
      <div className="flex flex-col gap-9 items-baseline  basis-[1040px]">
        <UserInfo />
        <div className='text-secondary flex gap-10 text-2xl'>
          <Link to="cookbook">My Cookbooks</Link>
          <Link to="recipe">My Recipes</Link>
          <Link to="setting">My Settings</Link>
        </div>
        <Outlet />
      </div>
    </section>
  );
}

export default AccountLayout;
