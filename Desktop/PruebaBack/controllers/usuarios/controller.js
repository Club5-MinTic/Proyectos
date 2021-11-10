import {getDB } from '../../db/db.js';
import { ObjectId } from 'mongodb';
import jwt_decode from 'jwt-decode'

const obtenerUsuarios = async (callback) =>{
    const conexion = getDB();
    await conexion
    .collection('usuarios').find({}).limit(50).
    toArray(callback);
};

const consultarOCrearUsuario = async (req, callback) =>{
    const token = req.headers.authorization.split('Bearer ')[1];
    const user = jwt_decode(token)['http://localhost/userData'];
    console.log(user);

    const conexion = getDB();
    await conexion.collection('usuarios').findOne({email: user.email}, async(err, response)=>{
        console.log("Response consulta bd", response);
        if (response){
            callback(err, response)

        }else{
            user.auth0Id = user._id;
            delete user._id;
            user.rol="Sin rol"
            await crearUsuario(user, (err, respuesta)=> callback(err, user))
        }
    })

}

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

export {obtenerUsuarios, crearUsuario, editarUsuario, eliminarUsuario, consultarOCrearUsuario }