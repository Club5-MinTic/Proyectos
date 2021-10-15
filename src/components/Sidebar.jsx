import React from 'react'
import 'styles/estilosMenu.css'
import photo from 'media/photo.png'
import logo from 'media/logo.png'

const Sidebar = () => {

    return (
        <nav className= 'w-64'>
             <body>
                <div class="Menu">
                    <img className='p-5 mt-10' src={photo} alt="No se encontró la imagen"/>
                    <h6 id="Titulo" className='p-5 text-white mb-10'>Menú</h6>
                    <div>
                        <button className="boton mb-2">Inicio</button>
                        <button className="boton mb-2">Gestión de productos</button>
                        <button className="boton mb-2">Gestión de ventas</button>
                        <button className="boton mb-2">Gestión de usuarios y roles</button>
                    </div>
                </div>

            </body>
        </nav>
    )
}

export default Sidebar
