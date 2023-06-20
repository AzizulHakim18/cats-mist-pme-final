import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import Error from "../Sheared/Error";
import TestRates from "../Pages/TestRates";
import Expersts from "../Pages/Expersts";
import Contact from "../Pages/Contact";
import About from "../Pages/About";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/testsrates',
                element: <TestRates></TestRates>
            },
            {
                path: '/experts',
                element: <Expersts></Expersts>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/about',
                element: <About></About>
            },
        ]
    }
])