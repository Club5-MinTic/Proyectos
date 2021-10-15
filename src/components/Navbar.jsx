import logo from 'media/logo.png'
import React from 'react'
import 'styles/estilos.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='blue-dark'>
            <ul className='nav flex w-full justify-between my-3'>
                <li><img className='w-40' src={logo} alt="Komuya.png" /></li>
                <li className='titulo'>KOMUYA</li>
                <li>
                    <Link to='/login'>
                        <button className='button align-bottom'>Iniciar Sesión</button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
