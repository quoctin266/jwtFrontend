import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../../App";
import Login from "../../components/login/Login";
import Register from "../register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        //   path: "team",
        //   element: <Team />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

const Router = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Router;
