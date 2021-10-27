import React, { useState, useEffect, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';
import axios from 'axios';

const RegistroVentas = () => {
    const [ventas, setVentas] = useState([]);
    const [mostrarTablaVentas, setMostrarTablaVentas] = useState(true);
    const [textoBoton, setTextoBoton] = useState('Registrar Ventas');
    const [ejecutarConsultaVentas, setEjecutarConsultaVentas] = useState(true);

    const obtenerVentas = async () => {
        const options = {method: 'GET', url: 'http://localhost:5000/ventas'};

        await axios
        .request(options)
        .then(function (response) {
            setVentas(response.data);
        })
        .catch(function (error) {
        console.error(error);
        });
        setEjecutarConsultaVentas(false);
    };

    useEffect(() => {
        if (ejecutarConsultaVentas){
            obtenerVentas();
        }
    }, [ejecutarConsultaVentas])

    useEffect(() => {
        if (mostrarTablaVentas) {
          setEjecutarConsultaVentas(true);
        }
      }, [mostrarTablaVentas]);


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
                (<TablaVentas listaVentas={ventas} 
                    setEjecutarConsultaVentas={setEjecutarConsultaVentas}/>
                    ) : (
                <FormularioVentas 
                    setMostrarTablaVentas={setMostrarTablaVentas} 
                    listaVentas = {ventas}
                    setVentas={setVentas}/>
                )}
                <ToastContainer position="bottom-center" autoClose={2000}/>
            </div>
        </div>
    )
}
const TablaVentas = ({listaVentas, setEjecutarConsultaVentas}) =>{
    const [busquedaVentas, setBusquedaVentas] = useState('');
    const [ventasFiltro, setVentasFiltro] = useState(listaVentas);

    useEffect(() => {
        console.log('busqueda: ', busquedaVentas)
        console.log('Lista original', listaVentas)
        setVentasFiltro(
            listaVentas.filter((elemento)=>{
                return JSON.stringify(elemento).toLowerCase().includes(busquedaVentas);
            })
        );

    }, [busquedaVentas, listaVentas]);

    return(
    <div className='w-full px-20 py-5'>
        <input type="text" 
        value={busquedaVentas}
        onChange={e =>setBusquedaVentas(e.target.value)}
        placeholder = "Buscar"
        className='border border-gray-600 px-3 py-1 self-end rounded focus:border-blue-700'
        />
        <h1 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>TABLA DE VENTAS</h1>
        <br />
        <table className='tabla p-20'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Valor total</th>
                    <th>Cantidad</th>
                    <th>Precio unitario</th> 
                    <th>Fecha de venta</th>  
                    <th>Doc Cliente</th>
                    <th>Nombre Cliente</th>
                    <th>Vendedor</th>
                    <th>Estado</th>
                    <th>Acciones</th>

                </tr>
            </thead>
            <tbody>
                {ventasFiltro.map((venta) => {
                    return(
                        <FilaVenta key={nanoid()}
                        venta={venta}
                        setEjecutarConsultaVentas = {setEjecutarConsultaVentas}/>
                    );})}
            </tbody>
        </table>
    </div>


)}

const FilaVenta = ({venta, setEjecutarConsultaVentas}) =>{
    const[editar, setEditar]= useState(false);
    const [infoNuevaVenta, setInfoNuevaVenta] = useState({
        
        idVenta: venta._id,
        valorTotal: venta.valorTotal,
        cantidad: venta.cantidad,
        precioUnitario : venta.precioUnitario,
        fecha: venta.fecha,
        docCliente: venta.docCliente,
        nameCliente: venta.nameCliente,
        vendedor: venta.vendedor,
        estado: venta.estado
});
    const actualizarVenta = async() => {

        console.log(infoNuevaVenta)

        const options = {
            method: 'PATCH',
            url: 'http://localhost:5000/ventas/editar',
            headers: {'Content-Type': 'application/json'},
            data: {...infoNuevaVenta, _id:venta._id}
          };
          
        await axios.request(options).then(function (response) {
            toast.success("Venta modificada")
            console.log(response.data);
            setEditar(false);
            setEjecutarConsultaVentas(true);

          }).catch(function (error) {
            toast.error("Error al modificar producto")
            console.error(error);
          });

        };

    const eliminarVenta = async () => {
        const options = {
            method: 'DELETE',
            url: 'http://localhost:5000/ventas/eliminar',
            headers: {'Content-Type': 'application/json'},
            data: {_id: venta._id}
        };
              
        await axios.request(options).then(function (response) {
            console.log(response.data);
            toast.success("Venta eliminada")
            setEjecutarConsultaVentas(true);
        }).catch(function (error) {
            console.error(error);
            toast.error("Error al eliminar venta")
        });
              
    };
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
                <td>{venta._id.slice(20)}</td>
                <td>{venta.valorTotal}</td>
                <td>{venta.cantidad}</td>
                <td>{venta.precioUnitario}</td> 
                <td>{venta.fecha}</td> 
                <td>{venta.docCliente}</td> 
                <td>{venta.nameCliente}</td> 
                <td>{venta.vendedor}</td>
                <td>{venta.estado}</td>  
            </>

        )}
            <td>
                <div className='flex w-full justify-around'>
                {editar ? (
                        <>           
                        <i onClick={()=> actualizarVenta()} className="fas fa-check-circle text-green-500 hover:text-green-700"/>
                        <i onClick={()=> setEditar(!editar)} className="fas fa-window-close text-red-600 hover:text-red-700"/>
                        </>
                    ):(
                        <>
                        <i onClick={()=> setEditar(!editar)} className="fas fa-edit text-yellow-600 hover:text-yellow-700"/>
                        <i onClick={()=> eliminarVenta()} className="fas fa-trash-alt text-red-600 hover:text-red-700"/>
                        </>
                    )} 
                </div>
            </td>
        </tr>
    );
};


const FormularioVentas = ({setMostrarTablaVentas, listaVentas, setVentas}) =>{
    const form = useRef(null);
    const submitForm = async(e) =>{
        e.preventDefault();
        const fd = new FormData(form.current);
        const nuevaVenta = {};

        fd.forEach((value, key) => {
            nuevaVenta[key] = value
        });
        const options = {
            method: 'POST',
            url: 'http://localhost:5000/ventas/nuevo',
            headers: {'Content-Type': 'application/json'},
            data: {
              valorTotal: nuevaVenta.valorTotal,
              cantidad: nuevaVenta.cantidad,
              precioUnitario: nuevaVenta.precioUnitario,
              fecha: nuevaVenta.fecha,
              docCliente: nuevaVenta.docCliente,
              nameCliente: nuevaVenta.nameCliente,
              vendedor: nuevaVenta.vendedor,
              estado: nuevaVenta.estado
            }
          };
          
          await axios.request(options).then(function (response) {
            console.log(response.data);
            toast.success("Venta Registrada");
          }).catch(function (error) {
            console.error(error);
            toast.error("Error registrando venta")
          });
          setMostrarTablaVentas(true);
        
        };
        
    return(
        <div className='flex flex-col'>
            <h1 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>REGISTRO DE VENTAS</h1>
            <form ref={form} onSubmit={submitForm}>
                
                <label className="label">Valor total</label>
                <input className="'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'" 
                type="number" name='valorTotal'/>
                
                <label className="label">Cantidad</label>
                <input className="'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'" 
                type="number" name='cantidad'/>
                
                <label className="label">Precio unitario</label>  
                <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' 
                type="number" name='precioUnitario'/>
                    
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
                    <option selected disabled>Seleccione una opción</option>
                    <option >En proceso</option> 
                    <option >Cancelada</option> 
                    <option >Entregada</option>
                </select>
                <br />
                <div className='space-x-2 items-center justify-center'>
                    <button type='submit' className='bg-blue-500 text-white rounded p-1'>Registrar</button>
                    <button className='bg-blue-500 text-white rounded p-1'>Borrar</button>
                </div>
            </form>
        </div>
     )};

export default RegistroVentas
