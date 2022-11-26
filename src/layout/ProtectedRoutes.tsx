import { Navigate, Outlet, Route, useLocation } from "react-router-dom";
import { UserProfile } from "../utility";

const ProtectedRoutes = () => {
  return UserProfile.getCredential() ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoutes;
