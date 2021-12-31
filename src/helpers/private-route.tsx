import { Navigate } from "react-router-dom";
import Loader from "../components/loader/Loader";
import { useAuth } from "./auth-context";

export default function PrivateRoute({ children }: { children: JSX.Element }) {
  const { authenticated } = useAuth();

  if (authenticated === undefined) {
    return <Loader loading />;
  }

  return authenticated ? children : <Navigate to="/login" />;
}
