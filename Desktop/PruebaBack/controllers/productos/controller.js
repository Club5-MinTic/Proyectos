import {getDB } from '../../db/db.js';
import { ObjectId } from 'mongodb';

const obtenerProductos = async (callback) =>{
    const conexion = getDB();
    await conexion
    .collection('productos').find({}).limit(50).
    toArray(callback);
};

const crearProducto = async (datosProducto, callback) => {
    if( Object.keys(datosProducto).includes('descripcion')
        && Object.keys(datosProducto).includes('valorUnitario')
        && Object.keys(datosProducto).includes('estado')
        ) {
            const conexion = getDB();
            await conexion.collection('productos').insertOne(datosProducto, callback); 
        } else {
            return 'Error'
        }
};

const editarProducto = async (edicion, callback) => {
    console.log(edicion);
    const filtroProducto = { _id: new ObjectId(edicion._id)};
    delete edicion._id;
    const operacion = {
        $set:edicion,
    };
    const conexion = getDB();
    await conexion.collection('productos').findOneAndUpdate(filtroProducto, operacion, {upsert:true}, callback);
};

const eliminarProducto = async (_id, callback) =>{
    const filtroProducto = { _id: new ObjectId(_id)};
    const conexion = getDB();
    await conexion.collection('productos').deleteOne(filtroProducto, callback);

};

export {obtenerProductos, crearProducto, editarProducto, eliminarProducto }