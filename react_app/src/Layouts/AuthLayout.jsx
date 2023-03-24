import { Navigate, Outlet } from 'react-router-dom';
import useAuthContext from '../Context/AuthContext'
import NavBar from '../Components/NavBar';
import logo from '../logo.svg';
import Footer from '../Components/Footer';

function AuthLayout() {
  const { user } = useAuthContext();

  return user ?

    <>
      <NavBar logo={logo}></NavBar>

      <Outlet />

      <Footer />
    </>

    :

    <Navigate to="/" />
}

export default AuthLayout