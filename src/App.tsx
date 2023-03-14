import { Navigate } from "react-router";
import { Routes, Route, useLocation } from "react-router-dom";
import { getToken } from "./features/auth/authActions";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Login } from "./pages/login";
import { useAppSelector } from "./store/hooks";

interface IValidateRoute {
    authRequired?: boolean;
    to: string;
    element: React.ElementType;
}

const ValidateRoute = ({
    authRequired,
    to,
    element: Element,
}: IValidateRoute) => {
    const isLogged = useAppSelector(getToken);
    const location = useLocation();

    if (authRequired) {
        if (!isLogged) {
            return <Navigate to={to} state={{ from: { location } }} replace />;
        }
    } else {
        if (isLogged) {
            return <Navigate to={to} state={{ from: { location } }} replace />;
        }
    }
    return <Element />;
};

const App = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <ValidateRoute
                        to="/login"
                        authRequired
                        element={Dashboard}
                    />
                }
            />
            <Route
                path="/login"
                element={<ValidateRoute to="/" element={Login} />}
            />
            <Route
                path="/register"
                element={<ValidateRoute to="/" element={Login} />}
            />
        </Routes>
    );
};

export default App;
