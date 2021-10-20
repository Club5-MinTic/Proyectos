import Express from 'express';
import { crearVenta, editarVenta, eliminarVenta, obtenerVentas } from '../../controllers/ventas/controller.js';

const rutasVentas = Express.Router();

const genericCallback = (res) => (err, result) => {
    if(err){
        res.status(500).send("Error consultando los Ventas");

    } else {
        res.json(result);
    }
};

rutasVentas.route('/ventas').get((req, res) => {
    console.log("Alguien hizo get en la ruta /Ventas");
    obtenerVentas(genericCallback(res));

});

rutasVentas.route('/ventas/nuevo').post((req, res) => {
    crearVenta(req.body, genericCallback(res));

});

rutasVentas.route('/ventas/:id').patch((req, res) => {
    editarVenta(req.params.id, req.body, genericCallback(res));
});

rutasVentas.route('/ventas/eliminar').delete((req, res) => {
    eliminarVenta(req.body._id, genericCallback(res));
});

export default rutasVentas;