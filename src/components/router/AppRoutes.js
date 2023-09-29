import Users from "../manageUsers/Users";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import Login from "../login/Login";
import Register from "../register/Register";
import Home from "../home/Home";
import PrivateRoutes from "./PrivateRoutes";

const AppRoutes = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "users",
        element: <PrivateRoutes component={<Users />} />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <ErrorBoundary>
        <Login />
      </ErrorBoundary>
    ),
  },
  {
    path: "/register",
    element: <Register />,
  },
];

export default AppRoutes;
