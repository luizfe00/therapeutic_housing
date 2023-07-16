import Home from "../pages/Home";
import Login from "../pages/Login";

type IRoute = {
    path: string;
    element: React.ReactNode;
    isPrivate: boolean;
}

export const publicRoutes: IRoute[] = [
    {
        element: <Login />,
        isPrivate: false,
        path: '/'
    }
]

export const privateRoutes: IRoute[] = [
    {
        element: <Home />,
        isPrivate: true,
        path: '/home'
    }
]