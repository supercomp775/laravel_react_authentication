import React, { Children } from 'react'
import NavBar from '../Components/NavBar';
import logo from '../logo.svg';

function LoginLayout({children}) {
  return (
    <div className="container">
        <NavBar logo={logo} isLogin={false}></NavBar>
        {children}
    </div>
  )
}

export default LoginLayout