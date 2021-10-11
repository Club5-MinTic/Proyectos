import logo from 'media/logo.png'
import React from 'react'
import 'styles/estilos.css'

const Navbar = () => {
    return (
        <nav className='blue-dark'>
            <ul className='nav flex w-full justify-between my-3'>
                <li><img className='w-40' src={logo} alt="Komuya.png" /></li>
                <li className='titulo'>KOMUYA</li>
                <li>
                    <button className='button align-bottom'>Iniciar Sesión</button>
                </li>
            </ul>
        </nav>
        /*<div className='header'>
            <div className='wrapper'>
                <section className="milogo">
                    <img src={logo} alt="KOMUYA" width="120px"/>
                    <h1 className="titulo">KOMUYA</h1>
                </section>
                <nav className="minav">
                    <a href="./Formulario.html">Iniciar sesión</a>
                </nav>
            </div>  
        </div> */
    )
}

export default Navbar
