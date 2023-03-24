import React from 'react'
import { Link } from 'react-router-dom'
import useAuthContext from '../Context/AuthContext'


function NavBar({ logo }) {
    const { logout } = useAuthContext();

    return (
        <nav className="navbar navbar-expand-sm bg-light">

            <div className='text-primary mr-5'>
                <img src={logo} alt="logo" width={60} height={60} />
            </div>

            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/registration">Registration</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" onClick={logout} >Logout</Link>
                </li>
            </ul>

        </nav>
    )
}

export default NavBar