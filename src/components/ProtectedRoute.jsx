import { Navigate } from "react-router-dom";
import { isAdminLoggedIn } from "@utils/admin";

function ProtectedRoute({ children }) {
  if (!isAdminLoggedIn()) {
    return <Navigate to="/admin" replace />;
  }

  return children;
}

export default ProtectedRoute;
