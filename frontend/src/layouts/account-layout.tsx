import { Outlet, useLocation } from 'react-router';
import UserInfo from 'features/account/user-info/user-info';
import LinksAccountLayout from 'components/links-account-layout';

function AccountLayout() {
  const location = useLocation();
  const route = location.pathname.split('/')[2];

 return (
    <section className="flex  justify-center mx-7 mb-7">
      <div className="flex flex-col gap-9 items-baseline  basis-[1040px] ">
        {route !== 'setting' && <UserInfo />}
        {route !== 'setting' && <LinksAccountLayout />}
        <Outlet />
      </div>
    </section>
  );
}

export default AccountLayout;
