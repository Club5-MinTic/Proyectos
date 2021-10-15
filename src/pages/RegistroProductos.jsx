import React, {useEffect, useState, useRef} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';
//import VerProductos from './VerProductos';
//import axios from 'axios';

const RegistroProductos = () => {
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [productos, setProductos] = useState([]);
    const [textoBoton, setTextoBoton] = useState('Registrar Producto')

    useEffect(() => {
        if (mostrarTabla) {
            setTextoBoton('Registrar Productos')
        }else{
            setTextoBoton('Ver Productos')
        }
    }, [mostrarTabla]);

    useEffect(() => {
        //Obtener lista de vehiculos desde el backend
        setProductos(productosBackend)
        
    }, []);


    return (
        <div className='flex h-full w-full flex-col items-center justify-center'>
            <div className=''>
                <h1 className='mt-6 text-center text-3xl font-extrabold text-gray-900 mb-10 self-start'>Gestión de productos</h1>
                <button onClick={()=>{setMostrarTabla(!mostrarTabla)}} className='text-white p-2 w-full rounded bg-yellow-500'>
                {textoBoton}
                </button>
            </div>
            {mostrarTabla ? 
            (<TablaProductos listaProductos={productos}/> 
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

const TablaProductos = ({ listaProductos }) => {
    return <div className='w-full p-20'>
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
                    {listaProductos.map((producto) => {
                        return(
                            <FilaProducto key={nanoid()} producto={producto}/>
                        );})}
                </tbody>
            </table>             
        </div>;   
};

const FilaProducto = ({producto}) => {
    return (
        <tr >
            <td>{producto.id}</td>
            <td>{producto.descripcion}</td>
            <td>{producto.valorUnitario}</td>
            <td>{producto.estado}</td> 
            <td>
                <div className='flex w-full justify-around'>
                    <i className="far fa-edit text-yellow-600 hover:text-yellow-700 "/>
                    <i className="fas fa-trash-alt text-red-600 hover:text-red-700"/>
                </div>
            </td>     
     </tr>
    );
};
const FormularioProductos =( {setMostrarTabla, listaProductos, setProductos})=> {
    const form = useRef(null)
    const submitForm = (e) =>{
        e.preventDefault();
        const fd = new FormData(form.current);
        const nuevoProducto = {};

        fd.forEach((value, key) => {
            nuevoProducto[key] = value;

        //Codigo de postman para obtener datos (POST)

        });
        setMostrarTabla(true);
        setProductos([...listaProductos, nuevoProducto])
        toast.success("Producto Registrado");
    };

    return<div  className= 'flex flex-col'>
            <h1 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>REGISTRO DE PRODUCTOS</h1>
            <br />
            <form ref={form} onSubmit={submitForm}>
                <label htmlFor="id">
                    Ingrese ID del producto.
                    <input required className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
                    name="id"
                    />
                </label>
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

const productosBackend = [
    {
        id: "0001",
        descripcion: "Plan Cartagena",
        valorUnitario: "400.000",
        estado: "Disponible"
    },
    {
        id: "0002",
        descripcion: "Plan San Andres",
        valorUnitario: "600.000",
        estado: "No disponible"
    }

]
export default RegistroProductos
