import React from 'react'
import 'styles/estilosMenu.css'
import { Link } from 'react-router-dom'
import photo from 'media/photo.png'

const Sidebar = () => {

    return (
        <nav className= 'w-64'>
             <div className='body'>
                <div className="Menu">
                    <img className='p-5 mt-10' src={photo} alt="No se encontró la imagen"/>
                    <h6 id="Titulo" className='p-5 text-white mb-10'>Menú</h6>
                    <div>
                        <Link to='/'>
                            <button className="boton mb-2">Inicio</button>
                        </Link>
                        <Link to='/gestionProductos'>
                            <button className="boton mb-2">Gestión de productos</button>
                        </Link>
                        <Link to='/gestionVentas'>
                            <button className="boton mb-2">Gestión de ventas</button>
                        </Link>
                        <Link to='/usuarios'>
                            <button className="boton mb-2">Gestión de usuarios y roles</button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Sidebar
