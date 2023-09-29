import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const PrivateRoutes = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{props.component}</>;
};

export default PrivateRoutes;
