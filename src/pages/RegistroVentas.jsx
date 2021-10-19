import React, { useState, useEffect } from 'react'

const RegistroVentas = () => {
    const [ventas, setVentas] = useState([]);
    const [mostrarTablaVentas, setMostrarTablaVentas] = useState(true);
    const [textoBoton, setTextoBoton] = useState('Registrar Ventas');

    useEffect(() => {
        if (mostrarTablaVentas) {
            setTextoBoton('Registrar Ventas')
        }else{
            setTextoBoton('Ver Ventas')
        }
    }, [mostrarTablaVentas]);


    return (
        <div className='flex h-full w-full flex-col items-center justify-center mt-5'>
            <div className='p-10 mt-10'>
                <h1 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Gestión de ventas</h1>
                <button onClick={()=>{setMostrarTablaVentas(!mostrarTablaVentas)}} className='text-white p-2 w-full rounded bg-yellow-500'>
                    {textoBoton}
                    </button>
            </div>
            <div>
                {mostrarTablaVentas ?
                (<TablaVentas/>
                    ) : (
                    <FormularioVentas setMostrarTablaVentas={setMostrarTablaVentas} 
                    listaVentas = {ventas}
                    setVentas={setVentas}/>
                )
            }
            </div>
        </div>
    )
}
const TablaVentas = (listaVentas) =>{
    return(
    <div className='w-full px-20 py-5'>
        <h1 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>TABLA DE VENTAS</h1>
        <table className='tabla p-20'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Valor total</th>
                    <th>Cantidad</th>
                    <th>Precio unitario</th> 
                    <th>Fecha de venta</th>  
                    <th>Documento Cliente</th>
                    <th>Nombre Cliente</th>
                    <th>Vendedor</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    </div>


)}

const FilaVenta = (ventas) =>{
    const[editar, setEditar]= useState(false);
    const [infoNuevaVenta, setInfoNuevaVenta] = useState({
        
        idVenta: ventas._id,
        valorTotal: ventas.valorTotal,
        cantidad: ventas.cantidad,
        precioUnitario : ventas.precioUnitario,
        fecha: ventas.fecha,
        docCliente: ventas.docCliente,
        nameCliente: ventas.nameCliente,
        vendedor: ventas.vendedor,
        estado: ventas.estado

    })
    return(
        <tr>
            {editar? (
            <>
                <td>{infoNuevaVenta._id}</td>
                <td>
                    <input type="text" 
                    className='appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-blue-500'
                    value = {infoNuevaVenta.valorTotal}
                    onChange={(e)=> setInfoNuevaVenta({...infoNuevaVenta, valorTotal: e.target.value})} />
                </td>
                <td>
                    <input type="text" 
                    className='appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-blue-500'
                    value = {infoNuevaVenta.cantidad}
                    onChange={(e)=> setInfoNuevaVenta({...infoNuevaVenta, cantidad: e.target.value})} />
                </td>
                <td>
                    <input type="text" 
                    className='appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-blue-500'
                    value = {infoNuevaVenta.precioUnitario}
                    onChange={(e)=> setInfoNuevaVenta({...infoNuevaVenta, precioUnitario: e.target.value})} />
                </td>
                <td>
                    <input type="text" 
                    className='appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-blue-500'
                    value = {infoNuevaVenta.fecha}
                    onChange={(e)=> setInfoNuevaVenta({...infoNuevaVenta, fecha: e.target.value})} />
                </td>
                <td>
                    <input type="text" 
                    className='appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-blue-500'
                    value = {infoNuevaVenta.docCliente}
                    onChange={(e)=> setInfoNuevaVenta({...infoNuevaVenta, docCliente: e.target.value})} />
                </td>
                <td>
                    <input type="text" 
                    className='appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-blue-500'
                    value = {infoNuevaVenta.nameCliente}
                    onChange={(e)=> setInfoNuevaVenta({...infoNuevaVenta, nameCliente: e.target.value})} />
                </td>
                <td>
                    <input type="text" 
                    className='appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-blue-500'
                    value = {infoNuevaVenta.vendedor}
                    onChange={(e)=> setInfoNuevaVenta({...infoNuevaVenta, vendedor: e.target.value})} />
                </td>
                <td>
                    <select
                        className='appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-blue-500'
                        value={infoNuevaVenta.estado} 
                        onChange={(e)=> setInfoNuevaVenta({...infoNuevaVenta, estado: e.target.value})}>
                            <option>En proceso</option>
                            <option>Cancelada</option>
                            <option>Entregada</option>
                    </select>
                </td>
            </>

            
        ) : (
            <>
                <td>{ventas._id.slice(20)}</td>
                <td>{ventas.valorTotal}</td>
                <td>{ventas.cantidad}</td>
                <td>{ventas.precioUnitario}</td> 
                <td>{ventas.fecha}</td> 
                <td>{ventas.docCliente}</td> 
                <td>{ventas.nameCliente}</td> 
                <td>{ventas.vendedor}</td>
                <td>{ventas.estado}</td>  
            </>

        )}
        </tr>
    );
}


const FormularioVentas = () =>{
    return(
        <form className='flex-row'>
            
            <label className="label">Valor total</label>
            <input className="'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'" 
            type="number" name='valorTotal'/>
            
            <label className="label">Cantidad</label>
            <input className="'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'" 
            type="number" name='cantidad'/>
            
            <label className="label">Precio unitario</label>  
            <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' 
            type="number" name='valorUnitario'/>
                
            <label>
                Fecha de venta:
                <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' 
                type="date"
                name='fecha'/>
            </label> 
            
            <label>
                Documento de identificación:
                <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' 
                type="text" name='docCliente'/>
            </label> 
            
            <label>
                Nombre del cliente:
                <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' 
                type="text" name='nameCliente'/>
            </label>
        
            <label>
                Vendedor:
                <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' 
                type="text" name='vendedor'/>
            </label> 
            
            <label for="OS">Estado de venta</label>
            <select className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
            name='estado'>
                <option selected disabled value="1">Seleccione una opción</option>
                <option value="2">En proceso</option> 
                <option value="3">Cancelada</option> 
                <option value="3">Entregada</option>
            </select>
            <br />
            <div className='space-x-2 items-center justify-center'>
                <button type='submit' className='bg-blue-500 text-white rounded p-1'>Registrar</button>
                <button className='bg-blue-500 text-white rounded p-1'>Borrar</button>
            </div>
        </form>
 )};

export default RegistroVentas
