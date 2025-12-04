import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import Error from "../pages/Error/Error";
import About from "../pages/About/About";
import AuthLaout from "../layouts/AuthLaout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/coverage',
                Component: Coverage,
                loader: () => fetch('/serviceCenters.json').then(res => res.json())
            },
            {
                path: '/about',
                Component: About,
            },
            {
                path: '/*',
                Component: Error,
            }
        ],

    },
    {
        path: '/',
        Component: AuthLaout,
        children: [
            {
                path: '/login',
                Component: Login,
            },
            {
                path: '/register',
                Component: Register,
            }
        ]
    }
])

export default router;