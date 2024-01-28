import { Home, Login } from '../pages';

type IRoute = {
  path: string;
  element: React.ReactNode;
  isPrivate: boolean;
};

export const publicRoutes: IRoute[] = [
  {
    element: <Login />,
    isPrivate: false,
    path: '/',
  },
  {
    element: <Home />,
    isPrivate: true,
    path: '/home',
  },
];

export const privateRoutes: IRoute[] = [];
