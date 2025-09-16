import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../pages/Homepage";
import ForgotPassword from "../pages/forgetPass";
import Register from "../pages/register"

export default function Routes() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Homepage />
        },
        {
            path: "/forgot-password",
            element: <ForgotPassword />
        },
        {
            path: "/Register",
            element: <Register />
        }
    ]);

    return <RouterProvider router={router} />;
}