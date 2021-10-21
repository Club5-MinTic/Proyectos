import React, {useEffect, useState, useRef} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';
import axios from 'axios';

const RegistroProductos = () => {
    const [productos, setProductos] = useState([]);
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [textoBoton, setTextoBoton] = useState('Registrar Producto')
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

    const obtenerProductos = async () => {
        const options = {method: 'GET', url: 'http://localhost:5000/productos'};

        await axios
        .request(options)
        .then(function (response) {
            setProductos(response.data);
        })
        .catch(function (error) {
        console.error(error);
        });
        setEjecutarConsulta(false);

    };
    useEffect(() => {
        if (ejecutarConsulta){
            obtenerProductos();
        }
    }, [ejecutarConsulta])

    useEffect(() => {
        if (mostrarTabla) {
          setEjecutarConsulta(true);
        }
      }, [mostrarTabla]);


    useEffect(() => {
        if (mostrarTabla) {
            setTextoBoton('Registrar Productos')
        }else{
            setTextoBoton('Ver Productos')
        }
    }, [mostrarTabla]);


    return (
        <div className='flex h-full w-full flex-col items-center justify-center'>
            <div className=''>
                <h1 className='mt-6 text-center text-3xl font-extrabold text-gray-900 mb-10 self-start'>Gestión de productos</h1>
                <button onClick={()=>{setMostrarTabla(!mostrarTabla)}} className='text-white p-2 w-full rounded bg-yellow-500'>
                {textoBoton}
                </button>
            </div>
            {mostrarTabla ? 
            (<TablaProductos listaProductos={productos} 
                setEjecutarConsulta={setEjecutarConsulta}/> 
            ) : (
            <FormularioProductos 
                setMostrarTabla={setMostrarTabla} 
                listaProductos={productos}
                setProductos={setProductos}/>
            )}
            <ToastContainer position="bottom-center" autoClose={2000}/>
        </div>
    )
}

const TablaProductos = ({ listaProductos, setEjecutarConsulta}) => {
    const [busqueda, setBusqueda] = useState('');
    const [productosFiltro, setProductosFiltro] = useState(listaProductos);

    useEffect(() => {
        console.log('busqueda:', busqueda)
        console.log('lista original', listaProductos);
        setProductosFiltro(
            listaProductos.filter((elemento)=>{
                return JSON.stringify(elemento).toLowerCase().includes(busqueda);
            })
        );
    }, [busqueda, listaProductos]);

    return (
    <div className='w-full p-20'>
        <input type="text" 
        value={busqueda}
        onChange={e =>setBusqueda(e.target.value)}
        placeholder = "Buscar"
        className='border border-gray-600 px-3 py-1 self-end rounded focus:border-blue-700'
        />

            <h1 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>TABLA DE PRODUCTOS</h1>
            <br />
                <table className='tabla p-20'>
                <thead>
                        <tr>
                            <th>ID</th>
                            <th>Descripción</th>
                            <th>Precio Unitario por noche</th>
                            <th>Estado</th> 
                            <th>Editar/Eliminar</th>    
                        </tr>
                    </thead>
                    <tbody>
                        {productosFiltro.map((producto) => {
                            return(
                                <FilaProducto key={nanoid()} 
                                producto={producto} 
                                setEjecutarConsulta={setEjecutarConsulta}/>
                            );})}
                    </tbody>
                </table>             
        </div>   
    )};

const FilaProducto = ({producto, setEjecutarConsulta}) => {
    const[edit, setEdit]= useState(false);
    const [infoNuevoProducto, setInfoNuevoProducto] = useState({

        id: producto._id,
        descripcion: producto.descripcion,
        valorUnitario: producto.valorUnitario,
        estado: producto.estado

    });


    const actualizarProducto = async() =>{
        console.log(infoNuevoProducto);
        //Enviar info al backend
        const options = {
            method: 'PATCH',
            url: 'http://localhost:5000/productos/editar',
            headers: {'Content-Type': 'application/json'},
            data: {...infoNuevoProducto, _id: producto._id}
            };
              
        await axios.request(options).then(function (response) {
            toast.success("Producto modificado")
            console.log(response.data);
            setEdit(false);
            setEjecutarConsulta(true);

            }).catch(function (error) {
            toast.error("Error al modificar producto")
            console.error(error);
            }); 
    }; 
    const eliminarProducto = async () => {
        const options = {
            method: 'DELETE',
            url: 'http://localhost:5000/productos/eliminar',
            headers: {'Content-Type': 'application/json'},
            data: {_id: producto._id},
        };
        
        await axios.request(options).then(function (response) {
            console.log(response.data);
            toast.success("Producto eliminado");
            setEjecutarConsulta(true);
        }).catch(function (error) {
            console.error(error);
            toast.error("Error al eliminar producto");
        });
    };
    return (
        <tr>
            {edit? (
                <>
                    <td>{infoNuevoProducto._id}</td>
                    <td>
                        <input className='appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-blue-500' 
                        type="text" 
                        value={infoNuevoProducto.descripcion} 
                        onChange={(e)=> setInfoNuevoProducto({...infoNuevoProducto, descripcion: e.target.value})}
                        />
                    </td>
                    <td>
                        <input className='appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-blue-500' 
                        type="text" 
                        value={infoNuevoProducto.valorUnitario} 
                        onChange={(e)=> setInfoNuevoProducto({...infoNuevoProducto, valorUnitario: e.target.value})}
                        />
                    </td>
                    <td>
                        <select
                        className='appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-blue-500'
                        value={infoNuevoProducto.estado} 
                        onChange={(e)=> setInfoNuevoProducto({...infoNuevoProducto, estado: e.target.value})}>
                            <option>Disponible</option>
                            <option>No disponible</option>
                        </select>
                    </td>
                </>  
        ) : (
            <>
                <td>{producto._id.slice(20)}</td>
                <td>{producto.descripcion}</td>
                <td>{producto.valorUnitario}</td>
                <td>{producto.estado}</td> 
            </>

        )}
            <td>
                <div className='flex w-full justify-around'>
                    {edit ? (
                        <>           
                        <i onClick={()=> actualizarProducto()} className="fas fa-check-circle text-green-500 hover:text-green-700"/>
                        <i onClick={()=> setEdit(!edit)} className="fas fa-window-close text-red-600 hover:text-red-700"/>
                        </>
                    ):(
                        <>
                        <i onClick={()=> setEdit(!edit)} className="fas fa-edit text-yellow-600 hover:text-yellow-700"/>
                        <i onClick={()=> eliminarProducto()} className="fas fa-trash-alt text-red-600 hover:text-red-700"/>
                        </>
                    )} 

                </div>
            </td>     
        </tr>
    );
};

const FormularioProductos =( {setMostrarTabla, listaProductos, setProductos})=> {
    const form = useRef(null);
    const submitForm = async(e) =>{
        e.preventDefault();
        const fd = new FormData(form.current);
        const nuevoProducto = {};

        fd.forEach((value, key) => {
            nuevoProducto[key] = value
        });
        const options = {
            method: 'POST',
            url: 'http://localhost:5000/productos/nuevo',
            headers: {'Content-Type': 'application/json'},
            data: {
              id: nuevoProducto.id,
              descripcion: nuevoProducto.descripcion,
              valorUnitario: nuevoProducto.valorUnitario,
              estado: nuevoProducto.estado
            }
          };
          
         await axios.request(options).then(function (response) {
            console.log(response.data);
            toast.success("Producto Registrado");
          }).catch(function (error) {
            console.error(error);
            toast.error("Error registrando producto")
          });
        setMostrarTabla(true);
        
    };

    return<div  className= 'flex flex-col'>
            <h1 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>REGISTRO DE PRODUCTOS</h1>
            <br />
            <form ref={form} onSubmit={submitForm}>
{/*                 <label htmlFor="id">
                    Ingrese ID del producto.
                    <input required className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
                    name="id"
                    />
                </label> */}
                <br/>
                <label htmlFor='descripcion'>
                    Ingrese descripción del producto:
                    <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' 
                    name="descripcion" 
                    
                    required/>
                </label>
                <br/>
                <label htmlFor='valorUnitario'>
                    Ingrese valor unitario:
                    <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
                    type="number" 
                    placeholder="Valor por noche"
                    name='valorUnitario' 
                    min='1'
                    required/>
                </label>
                <br/>
                <label htmlFor='estado'>Estado</label>
                    <select className=' p-2 relative block w-full px-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' 
                    name='estado'
                    required>
                        <option selected disabled>Seleccione una opción</option>
                        <option>Disponible</option>
                        <option>No disponible</option>
                    </select>
                <br/>

                <div className='space-x-2 items-center justify-center self-end'>
                    <button type='submit' 
                    className='bg-blue-500 text-white rounded p-1'
                    >Registrar</button>
                    <button type='reset' className='bg-blue-500 text-white rounded p-1'>Borrar</button>
                </div>
            </form>
        </div>;

};

export default RegistroProductos
