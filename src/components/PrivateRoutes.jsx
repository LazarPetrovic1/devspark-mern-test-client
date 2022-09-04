import { Navigate, Outlet } from 'react-router-dom';
import { getToken } from '../auth';

function PrivateRoutes() {
  return getToken() ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;