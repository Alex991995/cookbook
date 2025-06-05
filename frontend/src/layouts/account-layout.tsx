import { NavLink, Outlet, useLocation } from 'react-router';
import UserInfo from 'features/account/user-info/user-info';

function AccountLayout() {
  const location = useLocation();
  const route = location.pathname.split('/')[2];

  function setActive({ isActive }: { isActive: boolean }) {
    if (isActive) {
      return 'border-b-2  border-primary font-semibold text-black';
    }
    return '';
  }

  function swapPlaces() {
    if (route === 'setting') {
      return 'order-1';
    }
  }

  return (
    <section className="flex  justify-center mx-7 mb-7">
      <div className="flex flex-col gap-9 items-baseline  basis-[1040px] ">
        {route !== 'setting' && <UserInfo />}
        <div className={`text-secondary flex gap-10 text-2xl ${swapPlaces()}`}>
          <NavLink   className={setActive} to="cookbook">
            My Cookbooks
          </NavLink>
          <NavLink className={setActive} to="recipe">
            My Recipes
          </NavLink>
          <NavLink className={setActive} to="setting">
            My Settings
          </NavLink>
        </div>
        <Outlet />
      </div>
    </section>
  );
}

export default AccountLayout;
