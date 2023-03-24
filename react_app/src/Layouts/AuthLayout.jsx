import { Navigate, Outlet } from 'react-router-dom';
import useAuthContext from '../Context/AuthContext'
import NavBar from '../Components/NavBar';
import logo from '../logo.svg';

function AuthLayout() {
  const { user } = useAuthContext();

  return user ?

    <>
      <NavBar logo={logo}></NavBar>

      <Outlet />
    </>

    :

    <Navigate to="/login" />
}

export default AuthLayout