import { createBrowserRouter } from 'react-router';
import Register from '../pages/register/register';
import Login from '../pages/login/login';

export const router = createBrowserRouter([
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
