import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const userContext = true;

  return userContext ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
