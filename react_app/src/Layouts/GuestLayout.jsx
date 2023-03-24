import { Navigate, Outlet } from 'react-router-dom';
import useAuthContext from '../Context/AuthContext'

import NavBar from '../Components/NavBar';
import logo from '../logo.svg';

function GuestLayout() {
    const {user} = useAuthContext();

    return !user ?  
    <Outlet />
 : <Navigate to="/" /> 
}

export default GuestLayout;