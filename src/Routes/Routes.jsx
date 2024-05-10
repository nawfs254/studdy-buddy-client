import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Registration/Login";
import Registration from "../Pages/Registration/Registration";
import Register from "../Pages/Registration/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/registration",
                element: <Registration></Registration>,
                children: [
                    {
                        path: "/registration/login",
                        element: <Login></Login>
                    },
                    {
                        path: "/registration/register",
                        element: <Register></Register>
                    }
                ]
            }
        ]
    },
]);

export default router;