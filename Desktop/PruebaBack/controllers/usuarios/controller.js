import {getDB } from '../../db/db.js';
import { ObjectId } from 'mongodb';

const obtenerUsuarios = async (callback) =>{
    const conexion = getDB();
    await conexion
    .collection('usuarios').find({}).limit(50).
    toArray(callback);
};

const crearUsuario = async (datosUsuario, callback) => {
    const conexion = getDB();
    await conexion.collection('usuarios').insertOne(datosUsuario, callback); 
};

/* const editarUsuario = async (edicion, callback) => {
    console.log(edicion);
    const filtroUsuario = { _id: new ObjectId(edicion._id)};
    delete edicion._id;
    const operacion = {
        $set:edicion,
    };
    const conexion = getDB();
    await conexion.collection('usuarios').findOneAndUpdate(filtroUsuario, operacion, {upsert:true}, callback);
}; */
const editarUsuario = async (id, edicion, callback) => {
    const filtroUsuario = { _id: new ObjectId(id) };
    const operacion = {
      $set: edicion,
    };
    const conexion = getDB();
    await conexion
      .collection('usuarios')
      .findOneAndUpdate(filtroUsuario, operacion, { upsert: true, returnOriginal: true }, callback);
  };

const eliminarUsuario = async (_id, callback) =>{
    const filtroUsuario = { _id: new ObjectId(_id)};
    const conexion = getDB();
    await conexion.collection('usuarios').deleteOne(filtroUsuario, callback);

};

export {obtenerUsuarios, crearUsuario, editarUsuario, eliminarUsuario }