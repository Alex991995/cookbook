import { Outlet } from 'react-router';
import UserInfo from '../features/account/user-info/user-info';

function AccountLayout() {
  return (
    <section className="flex  justify-center mx-7">
      <div className="flex flex-col gap-9 items-baseline justify-between basis-[1040px]">
        <UserInfo />
        <Outlet />
      </div>
    </section>
  );
}

export default AccountLayout;
