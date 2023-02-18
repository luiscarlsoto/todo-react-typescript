import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./pages/errorPage/ErrorPage";
import { Login } from "./pages/login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <div className="bg-red-400">Hola putitas</div>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <div className="bg-red-400">Register</div>,
    },
    {
        path: "dashboard",
        element: <div className="bg-red-400">Dashboard</div>,
    },
]);
