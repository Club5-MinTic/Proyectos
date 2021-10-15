//import Navbar from 'components/Navbar'
import React, {useEffect, useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import VerProductos from './VerProductos';

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
                <button onClick={()=>{setMostrarTabla(!mostrarTabla)}} className='bg-gray-700 text-white p-2 w-full rounded'>
                {textoBoton}
                </button>
            </div>
            {mostrarTabla ? 
            (<TablaProductos listaProductos={productos}/> 
            ) : (
            <FormularioProductos 
                funcionParaMostrarTabla={setMostrarTabla} 
                listaProductos={productos}
                funcionParaAgregarProducto={setProductos}/>
            )}
            <ToastContainer position="bottom-center" autoClose={2000}/>
        </div>
    )
}

const TablaProductos = ({ listaProductos }) => {
    return <div className='miTabla'>
            <h1 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>TABLA DE PRODUCTOS</h1>
            <br />
            <table style={{width: '100%'}}>
               <thead>
                    <tr>
                        <th>ID</th>
                        <th>Descripción</th>
                        <th>Precio Unitario por noche</th>
                        <th>Estado</th>     
                    </tr>
                </thead>
                <tbody>
                    {listaProductos.map((producto) => {
                        return(
                            <tr>
                                <td>{producto.id}</td>
                                <td>{producto.descripcion}</td>
                                <td>{producto.valorUnitario}</td>
                                <td>{producto.estado}</td>      
                            </tr>
                        );

                    })} 

                </tbody>
            </table>             
        </div>;   
};

const FormularioProductos =( {funcionParaMostrarTabla, listaProductos, funcionParaAgregarProducto})=> {
    const [id, setId] = useState();
    const [descripcion, setDescripcion] = useState();
    const [valorUnitario, setValorUnitario] = useState();
    const [estado, setEstado] = useState();

    const enviarAlBackend = () => {
        console.log("id", id, "descripcion", descripcion, "valorUnitario", valorUnitario, "estado", estado);
        toast.success("Producto registrado con éxito");
        funcionParaMostrarTabla(true);
        funcionParaAgregarProducto([
            ...listaProductos, 
            {id: id, descripcion: descripcion, valorUnitario: valorUnitario, estado: estado},
        ]);
    };


    return<div  className= 'flex flex-col'>
            <h1 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>REGISTRO DE PRODUCTOS</h1>
            <br />
            <label htmlFor="id">
                Ingrese ID del producto.
                <input required className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
                name="id"
                value ={id}
                onChange={(e) => {
                    setId(e.target.value);
                }}
                />
            </label>
            <br/>
            <label htmlFor='descripcion'>
                Ingrese descripción del producto:
                <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' 
                name="descripcion" 
                rows="5" 
                cols="40"
                value ={descripcion}
                onChange={(e) => {
                    setDescripcion(e.target.value);
                }}
                required/>
            </label>
            <br/>
            <label htmlFor='valorUnitario'>
                Ingrese valor unitario:
                <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
                type="number" 
                name='valorUnitario' 
                min='1'
                value ={valorUnitario}
                onChange={(e) => {
                    setValorUnitario(e.target.value);
                }}
                required/>
            </label>
            <br/>
            <label htmlFor='estado'>Estado</label>
                <select className=' p-2 relative block w-full px-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' 
                name='estado'
                value ={estado}
                onChange={(e) => {
                    setEstado(e.target.value);
                }}
                required>
                    <option selected disabled>Seleccione una opción</option>
                    <option>Disponible</option>
                    <option>No disponible</option>
                </select>
            <br/>

            <div className='space-x-2 items-center justify-center self-end'>
                <button type='submit' 
                className='bg-blue-500 text-white rounded p-1'
                onClick={() => {
                    enviarAlBackend();
                  }}
                >Registrar</button>
                <button type='reset' className='bg-blue-500 text-white rounded p-1'>Borrar</button>
            </div>
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
