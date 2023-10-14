import { ReactNode } from "react";
import UserCredentialFromLocalStorage from "../utility/UserCredential";
import { Navigate, useLocation } from "react-router-dom";

interface IProps {
  children: ReactNode;
}
const PrivateRoute = ({ children }: IProps) => {
  const location = useLocation();
  console.log(location);
  const UserCredential = UserCredentialFromLocalStorage();
  if (!UserCredential?.email) {
    return <Navigate to="/login" state={{ path:location.pathname }} />;
  }

  return children;
};

export default PrivateRoute;
