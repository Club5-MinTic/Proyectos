import {getDB } from '../../db/db.js';
import { ObjectId } from 'mongodb';

const obtenerVentas = async (callback) =>{
    const conexion = getDB();
    await conexion
    .collection('ventas').find({}).limit(50).
    toArray(callback);
};

const crearVenta = async (datosVenta, callback) => {
    const conexion = getDB();
    await conexion.collection('ventas').insertOne(datosVenta, callback); 
};

const editarVenta = async (id, edicion, callback) => {
    const filtroVenta = { _id: new ObjectId(id)};
    /* delete edicion._id; */
    const operacion = {
        $set:edicion,
    };
    const conexion = getDB();
    await conexion.collection('ventas').findOneAndUpdate(filtroVenta, operacion, {upsert:true}, callback);
};

const eliminarVenta = async (_id, callback) =>{
    const filtroVenta = { _id: new ObjectId(_id)};
    const conexion = getDB();
    await conexion.collection('ventas').deleteOne(filtroVenta, callback);

};

export {obtenerVentas, crearVenta, editarVenta, eliminarVenta }