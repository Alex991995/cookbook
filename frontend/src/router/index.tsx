import { createBrowserRouter } from 'react-router';
import Register from '../pages/register/register';
import Login from '../pages/login/login';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import ErrorBoundary from '../pages/error-boundary/error-boundary';
import Layout from '../layouts/main-layout';
import MainPage from '../pages/main-page/main-page';
import AccountLayout from '../layouts/account-layout';
import AccountSetting from '../pages/account-setting/account-setting';

export const router = createBrowserRouter([
  {
    path: '/register',
    element: <Register />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorBoundary />,
  },
  {
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/account',
        element: <AccountLayout />,
        children:[
          {
            path: 'setting',
            element: <AccountSetting />
          }
        ]
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
