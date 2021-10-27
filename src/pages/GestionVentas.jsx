import { nanoid } from 'nanoid';
import React from 'react'
import { useState, useEffect, useRef} from 'react/cjs/react.development'
import { crearVenta } from 'utils/api';
import { obtenerProductos, editarVenta} from 'utils/api';
import { obtenerVentas } from 'utils/api';
import { ToastContainer, toast } from 'react-toastify';
import { deleteVenta } from 'utils/api';


const GestionVentas = () => {
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [textoBoton, setTextoBoton] = useState('Registrar Ventas');
    const [ejecutarConsulta, setEjecutarConsulta] = useState(false);
    const [ventas, setVentas] = useState([]);

    useEffect(() => {
        if (ejecutarConsulta){
            obtenerVentas(
                (response)=>{
                    setVentas(response.data)
                },
                (error)=>{
                    console.error(error)
                });
            setEjecutarConsulta(false);
        }
    }, [ejecutarConsulta]);

    useEffect(() => {
        if (mostrarTabla) {
          setEjecutarConsulta(true);
        }
      }, [mostrarTabla]);

    useEffect(() => {
        if (mostrarTabla) {
            setTextoBoton('Registrar Ventas')
        }else{
            setTextoBoton('Ver Ventas')
        }
    }, [mostrarTabla]);

    return(
        <div className='flex h-full w-full flex-col items-center justify-center mt-5'>
            <div>
                <h1 className='mt-6 text-center text-3xl font-extrabold text-gray-900 mb-10 self-start'>Gestión de ventas</h1>
                <button onClick={()=>{setMostrarTabla(!mostrarTabla)}} className='text-white p-2 w-full rounded bg-yellow-500'>
                {textoBoton}
                </button>
            </div>
            <div>
                {mostrarTabla ? (<TablaVentas listaVentas={ventas}
                setEjecutarConsulta={setEjecutarConsulta}/>):(
                <FormularioVentas 
                setMostrarTabla= {setMostrarTabla} 
                listaVentas={ventas}
                setVentas={setVentas}/>)}
                <ToastContainer position="bottom-center" autoClose={2000}/>
            </div>
        </div>
    )
};


const TablaVentas = ({ listaVentas, setEjecutarConsulta}) =>{

    return(
    <div className='w-full px-20 py-5'>
        <h1 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>TABLA DE VENTAS</h1>
        <br />
        <table className='tabla p-20'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Producto</th>
                    <th>Precio unitario</th> 
                    <th>Cantidad</th>
                    <th>Valor total</th>
                    <th>Fecha de venta</th>  
                    <th>Doc Cliente</th>
                    <th>Nombre Cliente</th>
                    <th>Vendedor</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {listaVentas.map((venta) => {
                    return(
                        <FilaVenta key={nanoid()}
                        venta={venta}
                        setEjecutarConsulta = {setEjecutarConsulta}/>
                    );})}
            </tbody>
        </table>
    </div>
    )};

const FilaVenta = ({venta, setEjecutarConsulta}) => {
    const[edit, setEdit]= useState(false);
    const [infoNuevaVenta, setInfoNuevaVenta] = useState({  
        idVenta: venta._id,
        producto: venta.producto,
        valorTotal: venta.valorTotal,
        cantidad: venta.cantidad,
        precioUnitario : venta.precioUnitario,
        fecha: venta.fecha,
        docCliente: venta.docCliente,
        nameCliente: venta.nameCliente,
        vendedor: venta.vendedor,
        estado: venta.estado
});
    const ActualizarVenta = async() => {
        await editarVenta(
            {...infoNuevaVenta, _id:venta._id},
            (response) => {
                toast.success("Venta modificada")
                console.log(response.data);
                setEdit(false);
                setEjecutarConsulta(true);
            }, (error) =>{
                toast.error("Error al modificar producto")
                console.error(error);
            }

        )};
    
    const EliminarVentas = async () =>{
        await deleteVenta(
            {_id: venta._id},
            (response) => {            
                console.log(response.data);
                toast.success("Venta eliminada")
                setEjecutarConsulta(true);
            }, (error) =>{
                console.error(error);
                toast.error("Error al eliminar venta")
            }  
        )
    }

    return(
        <tr>
        {edit? (
        <>
            <td>{infoNuevaVenta._id}</td>
            <td>
            <input type="text" 
                className='appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-blue-500'
                value = {infoNuevaVenta.producto}
                onChange={(e)=> setInfoNuevaVenta({...infoNuevaVenta, producto: e.target.value})} />
            </td>
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
            <td>{venta.producto}</td>
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
            {edit? (
                    <>           
                    <i onClick={()=> ActualizarVenta()}  className="fas fa-check-circle text-green-500 hover:text-green-700"/>
                    <i onClick={()=> setEdit(!edit)} className="fas fa-window-close text-red-600 hover:text-red-700"/>
                    </>
                ):(
                    <>
                    <i onClick={()=> setEdit(!edit)} className="fas fa-edit text-yellow-600 hover:text-yellow-700"/>
                    <i onClick={()=> EliminarVentas()} className="fas fa-trash-alt text-red-600 hover:text-red-700"/>
                    </>
                )} 
            </div>
        </td>
    </tr>
    );
}

const FormularioVentas = ({setMostrarTabla}) =>{
    const form = useRef(null);
    const [productos, setProductos] = useState([]);

    const submitForm = async(e) =>{
        e.preventDefault();
        const fd = new FormData(form.current);
        const formData = {};

        fd.forEach((value, key) => {
            formData[key] = value
        });
        console.log(formData);

        await crearVenta(
            {   producto: formData.producto,
                precioUnitario: formData.precioUnitario,
                cantidad: formData.cantidad,
                valorTotal: formData.valorTotal,
                fecha: formData.fecha,
                docCliente: formData.docCliente,
                nameCliente: formData.nameCliente,
                vendedor: formData.vendedor,
                estado: formData.estado},
            (response) => {
                console.log(response.data);
                toast.success("Venta Registrada");
                setMostrarTabla(true);
            }, (error) =>{
                console.error(error);
                toast.error("Error registrando venta")
            }
        );
    };

    useEffect(() => {

        const fetchProductos = async () => {
            await obtenerProductos(
                (response)=>{
                    setProductos(response.data)
                },
                (error)=>{
                    console.error(error)
                }
            );
        }
        fetchProductos();

    }, []);

    return(
        <div>
            <h1 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>REGISTRO DE VENTAS</h1>
            <form ref={form} onSubmit={submitForm}>
                <label htmlFor="producto"></label>
                <select required name="producto" className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
                >
                    <option>Seleccione un producto</option>
                    {productos.map((el) => {
                        return <option key={nanoid()} value= {el.descripcion}>{`${el.descripcion}`}</option>
                    })}
                </select>

                <label className="label">Precio unitario</label>  
                <input required className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' 
                type="number" name='precioUnitario'/>
                
                <label className="label">Cantidad</label>
                <input required className="'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'" 
                type="number" name='cantidad'/>
                
                <label className="label">Valor total</label>
                <input required className="'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'" 
                type="number" name='valorTotal'/>
                    
                <label>
                    Fecha de venta:
                    <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' 
                    type="date"
                    name='fecha'/>
                </label> 
                <label>
                    Documento de identificación:
                    <input required className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' 
                    type="text" name='docCliente'/>
                </label> 
                <label>
                    Nombre del cliente:
                    <input required className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' 
                    type="text" name='nameCliente'/>
                </label>
                <label htmlFor="vendedor">Vendedor:</label>
                <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' 
                    type="text" name='vendedor'/>
                
                <label for="estado">Estado de venta</label>
                <select required className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
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

export default GestionVentas
