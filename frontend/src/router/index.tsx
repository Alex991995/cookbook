import { createBrowserRouter } from 'react-router';
import Register from '../pages/register/register';

export const router = createBrowserRouter([
  {
    path: '/register',
    element: <Register />,
  },
]);
