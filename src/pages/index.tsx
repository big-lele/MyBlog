import { FC, lazy } from "react"
import { Outlet, RouteObject } from "react-router-dom"

//const Home = lazy<FC>(() => import("./home"))
//const AboutMe = lazy<FC>(() => import("./aboutme"))
import Home from './home';
import AboutMe from './aboutme';
import Publications from './pubulications';

const routes: RouteObject[] = [
    {
        children: [
            {
                Component: Home,
                path: "",
            },
            {
                Component: AboutMe,
                path: "/aboutme",
            },
            {
                Component: Publications,
                path: "/publications",
            },
            {
                Component: Outlet,
                path: "*",
            },
        ],
    },
]

export default routes
