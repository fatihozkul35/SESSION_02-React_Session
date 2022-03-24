import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const userSigned = true;

  return userSigned ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
