import { Outlet } from 'react-router';
import Header from 'components/header';
import Footer from 'components/footer';

function Layout() {

  return (
    <div className=" container-grid mx-auto ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
