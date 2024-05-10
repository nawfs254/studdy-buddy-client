import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Registration/Login";
import Registration from "../Pages/Registration/Registration";
import Register from "../Pages/Registration/Register";
import UserProfile from "../Pages/UserProfile/UserProfile";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import ManageProfile from "../Pages/UserProfile/ManageProfile";

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
                path: "/user-profile",
                element: <ProtectedRoute>
                    <UserProfile></UserProfile>
                </ProtectedRoute>
            },
            {
                path: '/manage-profile',
                element: <ProtectedRoute>
                    <ManageProfile></ManageProfile>
                </ProtectedRoute>
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