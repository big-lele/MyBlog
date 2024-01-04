import { FC, lazy } from "react"
import { Outlet, RouteObject } from "react-router-dom"


const Home = lazy<FC>(() => import("./home"))

const routes: RouteObject[] = [
    {
        children: [
            {
                Component: Home,
                path: "",
                index: true,
            },
            {
                Component: Outlet,
                path: "*",
            },
        ],
    },
]

export default routes
