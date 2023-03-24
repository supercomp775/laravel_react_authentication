import { Navigate, Outlet } from 'react-router-dom';
import useAuthContext from '../Context/AuthContext'

import logo from '../logo.svg';
import NavBarGuest from '../Components/NavBarGuest';

function GuestLayout() {
    const { user } = useAuthContext();

    return !user ?
        <>
            <NavBarGuest logo={logo}/>
            <Outlet />
        </>
        : 
        <Navigate to="/dashboard" />
}

export default GuestLayout;