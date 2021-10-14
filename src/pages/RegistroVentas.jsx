import React from 'react'

const RegistroVentas = () => {
    return (
        <div>
            <h1 className='text-black'>REGISTRO DE VENTAS</h1>
            <br/>
            <label className="label">
                ID de venta
            </label>
            <input className="controls-product" type="number" placeholder="Ingrese solo numeros"/>
            <br/>
            <label className="label">Valor total</label>
            <input className="controls-product" type="number" placeholder="Ingrese Descripcion del producto"/>
            <br/>
            <label className="label">Cantidad</label>
            <input className="controls-product" type="number" placeholder="Ingrese valor del producto"/>
            <br/>
            <label className="label">Precio unitario</label>  
            <input type="number"/>
            <br/>    
            <label>
                Fecha de venta:
                <input type="date"/>
            </label> 
            <br/>
            <label>
                Documento de identificación:
                <input type="text"/>
            </label> 
            <br/>
            <label>
                Nombre del cliente:
                <input type="text"/>
            </label>
            <br/>
            <label>
                Vendedor:
                <input type="text"/>
            </label> 
            <br/>
            <label for="OS">Estado de venta</label>
            <select name="OS">
                <option value="1">EN PROCESO</option> 
                <option value="2">CANCELADA</option> 
                <option value="3">ENTREGADA</option>
            </select>
            <p>
                <button type="submit" value="Registrar"/>
                <button type="reset" value="Borrar"/>
                <button type="submit" value="Actualizar"/>
            </p>

        </div>
    )
}

export default RegistroVentas
