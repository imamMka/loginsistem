import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../pages/Homepage";
import ForgotPassword from "../pages/forgetPass";
import Register from "../pages/register";
import NotFound from "../pages/404ntfound"; 

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
        },
        {
            path: "*",
            element: <NotFound />
        }
    ]);

    return <RouterProvider router={router} />;
}