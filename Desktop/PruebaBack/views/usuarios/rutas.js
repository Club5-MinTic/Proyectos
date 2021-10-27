import Express from 'express';
import { crearUsuario, editarUsuario, eliminarUsuario, obtenerUsuarios } from '../../controllers/usuarios/controller.js';

const rutasUsuarios = Express.Router();

const genericCallback = (res) => (err, result) => {
    if(err){
        res.status(500).send("Error consultando los usuarios");

    } else {
        res.json(result);
    }
};

rutasUsuarios.route('/usuarios').get((req, res) => {
    console.log("Alguien hizo get en la ruta /usuarios");
    obtenerUsuarios(genericCallback(res));

});

rutasUsuarios.route('/usuarios/nuevo').post((req, res) => {
    crearUsuario(req.body, genericCallback(res));

});

/* rutasUsuarios.route('/usuarios/editar').patch((req, res) => {
    editarUsuario(req.body, genericCallback(res));
}); */
rutasUsuarios.route('/usuarios/:id').patch((req, res) => {
    editarUsuario(req.params.id, req.body, genericCallback(res));
  });

rutasUsuarios.route('/usuarios/eliminar').delete((req, res) => {
    eliminarUsuario(req.body._id, genericCallback(res));
});

export default rutasUsuarios;