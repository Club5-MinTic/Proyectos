import React from 'react'

const RegistroVentas = () => {
    return (
        <div>
            <h1 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>REGISTRO DE VENTAS</h1>
            <br/>
            <form className='flex-row'>
                <label className="label">
                    ID de venta
                </label>
                <input className="'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'" type="number" placeholder="Ingrese solo numeros"/>
                
                <label className="label">Valor total</label>
                <input className="'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'" type="number" placeholder="Ingrese Descripcion del producto"/>
                
                <label className="label">Cantidad</label>
                <input className="'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'" type="number" placeholder="Ingrese valor del producto"/>
                
                <label className="label">Precio unitario</label>  
                <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' type="number"/>
                    
                <label>
                    Fecha de venta:
                    <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' type="date"/>
                </label> 
                
                <label>
                    Documento de identificación:
                    <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' type="text"/>
                </label> 
                
                <label>
                    Nombre del cliente:
                    <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' type="text"/>
                </label>
            
                <label>
                    Vendedor:
                    <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' type="text"/>
                </label> 
                
                <label for="OS">Estado de venta</label>
                <select className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'>
                    <option value="1">EN PROCESO</option> 
                    <option value="2">CANCELADA</option> 
                    <option value="3">ENTREGADA</option>
                </select>
                <br />

                <div className='space-x-2 items-center justify-center'>
                    <button className='bg-blue-500 text-white rounded p-1'>Registrar</button>
                    <button className='bg-blue-500 text-white rounded p-1'>Borrar</button>
                </div>
                

            </form>

        </div>
    )
}

export default RegistroVentas
