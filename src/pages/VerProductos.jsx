import React from 'react'
import 'styles/estilos.css'

const VerProductos = () => {

    return (
        <div className='miTabla'>
            <h1>Tabla de productos</h1>
            <table style={{width: '100%'}}>
                <tr>
                    <th>ID</th>
                    <th colspan="2">Descripción</th>
                    <th>Precio Unitario</th>
                    <th>Estado</th>
                    <th colspan="2">Editar Información</th>        
                </tr>
                <tr>
                    <td>0001</td>
                    <td>Plan Cartagena</td>
                    <td>1 noche</td>
                    <td>$400.000</td>
                    <td>        
                        <label>
                            <select name="OS">
                                <option value="1">DISPONIBLE</option> 
                                <option value="2">NO DISPONIBLE</option>
                            </select>
                        </label>
                    </td>
                    <td><input type="submit" value="Editar Info"/></td> 
                    <td><input type="submit" value="Actualizar"/></td> 
                </tr>
                <tr>
                    <td>0002</td>
                    <td>Plan Eje cafetero</td>
                    <td>1 noche</td>
                    <td>$350.000</td>
                    <td>
                        <label>
                            <select name="OS">
                                <option value="1">DISPONIBLE</option> 
                                <option value="2">NO DISPONIBLE</option>
                            </select>
                        </label>
                    </td> 
                    <td><input type="submit" value="Editar Info"/></td> 
                    <td><input type="submit" value="Actualizar"/></td>
                </tr>
                <tr>
                    <td>0003</td>
                    <td>Plan Amazonas</td>
                    <td>1 noche</td>
                    <td>$700.000</td>
                    <td>
                        <label>
                            <select name="OS">
                                <option value="1">DISPONIBLE</option> 
                                <option value="2">NO DISPONIBLE</option>
                            </select>
                        </label>
                    </td> 
                    <td><input type="submit" value="Editar Info"/></td> 
                    <td><input type="submit" value="Actualizar"/></td>
                </tr>
                <tr>
                    <td>0004</td>
                    <td>Plan Llanos Orientales</td>
                    <td>1 noche</td>
                    <td>$1.000.000</td>
                    <td>                
                        <label>
                            <select name="OS">
                                <option value="1">DISPONIBLE</option> 
                                <option value="2">NO DISPONIBLE</option>
                                
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

export default VerProductos
