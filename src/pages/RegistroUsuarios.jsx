import React from 'react'

const RegistroUsuarios = () => {
    return (
        <div>
            <h1>Usuarios</h1>
            <form>
                
                <label>Rol :</label><br/>
                <input type="radio" name=" value"/>Administrador <br/>
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
