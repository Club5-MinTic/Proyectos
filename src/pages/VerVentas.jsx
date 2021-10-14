import React from 'react'
import 'styles/estilos.css'

const VerVentas = () => {
    return (
        <div className='miTabla'>
            <h1>Tabla de Ventas</h1>
            <table>
                <tr>
                    <th>ID venta</th>
                    <th>Producto</th>
                    <th>Precio Unitario</th>
                    <th>Cantidad</th>
                    <th>Valor Total</th>
                    <th>Fecha de Venta</th>
                    <th>Nombre Cliente</th>
                    <th>Documento identificación</th>
                    <th>Vendedor</th>
                    <th>Estado</th>
                    <th colspan="2">Editar Información</th>     
                </tr>
                <tr>
                    <td>1001</td>
                    <td>Plan Llanos Orientales</td>
                    <td>$1.000.000</td>
                    <td>5 noches</td>
                    <td>$5.000.000</td>
                    <td><input type="date"/></td>
                    <td>Carlos Torres</td>
                    <td>20797233</td>
                    <td>Claudia Sapata</td>
                    <td>        
                        <label>
                            <select name="OS">
                                <option value="1">CANCELADO</option> 
                                <option value="2">ENTREGADO</option>
                                <option value="2">EN PROCESO</option>
                            </select>
                        </label>
                    </td>
                    <td><input type="submit" value="Editar Info"/></td> 
                    <td><input type="submit" value="Actualizar"/></td>
                </tr>
                <tr>
                    <td>1002</td>
                    <td>Plan Cartagena</td>
                    <td>$400.000</td>
                    <td>6 noches</td>
                    <td>$2.400.000</td>
                    <td><input type="date"/></td>
                    <td>Alejandra Perez</td>
                    <td>34536105</td>
                    <td>Jeison Pulido</td>
                    <td>        
                        <label>
                            <select name="OS">
                                <option value="1">CANCELADO</option> 
                                <option value="2">ENTREGADO</option>
                                <option value="2">EN PROCESO</option>
                            </select>
                        </label>
                    </td>
                    <td><input type="submit" value="Editar Info"/></td> 
                    <td><input type="submit" value="Actualizar"/></td>
                </tr>
                <tr>
                    <td>1003</td>
                    <td>Plan Amazonas</td>
                    <td>$700.000</td>
                    <td>4 noches</td>
                    <td>$2.800.000</td>
                    <td><input type="date"/></td>
                    <td>Stefany Leal</td>
                    <td>52348761</td>
                    <td>Juan Gutierrez</td>
                    <td>        
                        <label>
                            <select name="OS">
                                <option value="1">CANCELADO</option> 
                                <option value="2">ENTREGADO</option>
                                <option value="2">EN PROCESO</option>
                            </select>
                        </label>
                    </td>
                    <td><input type="submit" value="Editar Info"/></td> 
                    <td><input type="submit" value="Actualizar"/></td>
                </tr>
                <tr>
                    <td>1004</td>
                    <td>Plan Eje cafetero</td>
                    <td>$350.000</td>
                    <td>10 noches</td>
                    <td>$3.500.000</td>
                    <td><input type="date"/></td>
                    <td>Nicolle Silva</td>
                    <td>1002594601</td>
                    <td>Fernanda Avendaño</td>
                    <td>        
                        <label>
                            <select name="OS">
                                <option value="1">CANCELADO</option> 
                                <option value="2">ENTREGADO</option>
                                <option value="2">EN PROCESO</option>
                            </select>
                        </label>
                    </td>
                    <td><input type="submit" value="Editar Info"/></td> 
                    <td><input type="submit" value="Actualizar"/></td>
                </tr>
            
            </table> 

        </div>
    )
}

export default VerVentas
