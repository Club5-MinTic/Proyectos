import React from 'react'

const RegistroUsuarios = () => {
    return (
        <div>
            <h1>Usuarios</h1>
            <form className='mt-8 space-y-6'>
                <label>Rol :</label><br/>
                <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'  type="radio" name=" value"/>Administrador <br/>
                <input type="radio" name=" value"/>Vendedor<br/>
                <br/>
                <label>Estado de usuario :</label><br/>
                <input type="text" name="nombre" size="15"/><br/>
                <input type="radio" name=" value"/>Pendiente<br/> 
                <input type="radio" name=" value"/>Autorizado<br/>
                <input type="radio" name=" value"/>No Autorizado<br/>
                <br/>			
                <p>
                    <input type="submit" value="Registrar"/>
                    <input type="reset" value="Borrar"/>
                    <input type="submit" value="Actualizar"/>
                </p>	
            </form>
        </div>
    )
}

export default RegistroUsuarios
