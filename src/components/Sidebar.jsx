import React from 'react'
import 'styles/estilosMenu.css'
import { Link } from 'react-router-dom'
import photo from 'media/photo.png'
import PrivateComponent from './PrivateComponent'
import { useAuth0 } from '@auth0/auth0-react'
import PrivateRoute from './PrivateRoute'

const Sidebar = () => {
    const { logout } = useAuth0();

    const cerrarSesion = () => {
        logout({ returnTo: 'http://localhost:3000/' });
        localStorage.setItem('token', null);
      };

    return (
        <nav className= 'w-64'>
             <div className='body'>
                <div className="Menu">
                    <img className='p-5 mt-10' src={photo} alt="No se encontró la imagen"/>
                    <h6 id="Titulo" className='p-5 text-white mb-10'>Menú</h6>
                    <div>
                        <PrivateComponent roles={['Sin rol']}>
                            <Link to='/home'>
                                <button className="boton mb-2">Inicio</button>
                            </Link>
                        </PrivateComponent>
                        <PrivateComponent roles={['Admin', 'Vendedor']}>
                            <Link to='/gestionProductos'>
                                <button className="boton mb-2">Gestión de productos</button>
                            </Link>
                        </PrivateComponent>
                        <PrivateComponent roles={['Admin', 'Vendedor']}>
                            <Link to='/gestionVentas'>
                                <button className="boton mb-2">Gestión de ventas</button>
                            </Link>
                        </PrivateComponent>
                        <PrivateComponent roles={['Admin']}>
                            <Link to='/usuarios'>
                                <button className="boton mb-2">Gestión de usuarios y roles</button>
                            </Link>
                        </PrivateComponent>
                        <button onClick={() => cerrarSesion()} className="boton mb-2">Cerrar Sesión</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Sidebar
