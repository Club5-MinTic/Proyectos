import logo from 'media/logo.png'
import React from 'react'
import 'styles/estilos.css'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <nav className='blue-dark'>
            <ul className='nav flex w-full justify-between my-3'>
                <li><img className='w-40' src={logo} alt="Komuya.png" /></li>
                <li className='titulo'>KOMUYA</li>
                <li>
                    <button onClick={() => loginWithRedirect()} className='button align-bottom'>Iniciar Sesión</button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
