//import Navbar from 'components/Navbar'
import React from 'react'

const RegistroProductos = () => {
    return (
        <div>
            <h1>REGISTRO DE PRODUCTOS</h1>
            <label for="id">
                Ingrese ID del producto.
                <input name="id"/>
            </label>
            <br/>
            <label>
                Ingrese descripción del producto:
                <textarea name="comentarios" rows="5" cols="40"></textarea>
            </label>
            <br/>
            <label>
                Ingrese valor unitario:
                <input type="number"/>
            </label>
            <br/>
            <div class='field'>
                <label>Estado</label>
                <select>
                    <option selected disabled>Seleccione una opción</option>
                    <option>Disponible</option>
                    <option>No disponible</option>
                </select>
            </div>
            <br/>
            <div class='gustos'>
                <label>¿Considera que la información de los productos es adecuada?</label>
                <div><input type="radio" name="gustos" required autocomplete/>Si</div>
                <div><input type="radio" name="gustos" required autocomplete/>No</div>
            </div>
            <br/>
            <div class='privacidad'>
                <input type='checkbox' required/>
                <label>Marque aquí para crear el producto</label>
            </div>
            <br/>
            <p>
                <input type="submit" value="Registrar"/>
                <input type="reset" value="Borrar"/>
                <input type="submit" value="Actualizar"/>
            </p>
        </div>
    )
}

export default RegistroProductos
