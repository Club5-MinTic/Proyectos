import axios from 'axios';

export const obtenerProductos = async (successCallback, errorCalback) => {
    const options = {method: 'GET', url: 'http://localhost:5000/productos'};
    await axios.request(options).then(successCallback).catch(errorCalback)

};

export const crearProducto = async (data, successCallback, errorCalback) => {
    const options = {
        method: 'POST',
        url: 'http://localhost:5000/productos/nuevo',
        headers: {'Content-Type': 'application/json'},
        data,};
      await axios.request(options).then(successCallback).catch(errorCalback);
};

export const editarProducto = async (data, successCallback, errorCalback) => {
    const options = {
        method: 'PATCH',
        url: 'http://localhost:5000/productos/editar',
        headers: {'Content-Type': 'application/json'},
        data,};
    await axios.request(options).then(successCallback).catch(errorCalback);
}

export const eliminarProduct = async (data, successCallback, errorCalback) => {
    const options = {
        method: 'DELETE',
        url: 'http://localhost:5000/productos/eliminar',
        headers: {'Content-Type': 'application/json'},
        data,};
    await axios.request(options).then(successCallback).catch(errorCalback);
}

//CRUD DE VENTAS

export const obtenerVentas = async (successCallback, errorCalback) => {
    const options = {method: 'GET', url: 'http://localhost:5000/ventas'};
    await axios.request(options).then(successCallback).catch(errorCalback);
}

export const editarVenta = async (data, successCallback, errorCalback) =>{
    const options = {
        method: 'PATCH',
        url: 'http://localhost:5000/ventas/editar',
        headers: {'Content-Type': 'application/json'},
        data,};
    await axios.request(options).then(successCallback).catch(errorCalback);
}

export const crearVenta = async (data, successCallback, errorCalback) => {
    const options = {
        method: 'POST',
        url: 'http://localhost:5000/ventas/nuevo',
        headers: {'Content-Type': 'application/json'},
        data, };
    await axios.request(options).then(successCallback).catch(errorCalback);
}
export const deleteVenta = async (data, successCallback, errorCalback) => {
    const options = {
        method: 'DELETE',
        url: 'http://localhost:5000/ventas/eliminar',
        headers: {'Content-Type': 'application/json'},
        data,
    };
    await axios.request(options).then(successCallback).catch(errorCalback);

}

//CRUD DE USUARIOS 

export const obtenerUsuarios = async(successCallback, errorCalback) =>{
    const options = {
        method: 'GET',
        url: 'http://localhost:5000/usuarios',
        headers: {'Content-Type': 'application/json'}
      };
    await axios.request(options).then(successCallback).catch(errorCalback);
};

export const editarUsuario = async(id, data, successCallback, errorCalback) => {
    const options = {
        method: 'PATCH',
        url: `http://localhost:5000/usuarios/${id}`,
        headers: {'Content-Type': 'application/json'},
        data,
      };
    await axios.request(options).then(successCallback).catch(errorCalback);
};