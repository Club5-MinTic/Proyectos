import axios from 'axios';

const getToken = () =>{
    return `Bearer ${localStorage.getItem('token')}`;
}

export const obtenerProductos = async (successCallback, errorCalback) => {
    const options = {method: 'GET', 
    url: 'http://localhost:5000/productos', 
    headers: {
        Authorization: getToken(),
      }};
    await axios.request(options).then(successCallback).catch(errorCalback)

};

export const crearProducto = async (data, successCallback, errorCalback) => {
    const options = {
        method: 'POST',
        url: 'http://localhost:5000/productos/nuevo',
        headers: {'Content-Type': 'application/json', Authorization: getToken()},
        data,};
      await axios.request(options).then(successCallback).catch(errorCalback);
};

export const editarProducto = async (data, successCallback, errorCalback) => {
    const options = {
        method: 'PATCH',
        url: 'http://localhost:5000/productos/editar',
        headers: {'Content-Type': 'application/json', Authorization: getToken()},
        data,};
    await axios.request(options).then(successCallback).catch(errorCalback);
}

export const eliminarProduct = async (data, successCallback, errorCalback) => {
    const options = {
        method: 'DELETE',
        url: 'http://localhost:5000/productos/eliminar',
        headers: {'Content-Type': 'application/json', Authorization: getToken()},
        data,};
    await axios.request(options).then(successCallback).catch(errorCalback);
}

//CRUD DE VENTAS

export const obtenerVentas = async (successCallback, errorCalback) => {
    const options = {method: 'GET', url: 'http://localhost:5000/ventas',
    headers: {
        Authorization: getToken(),
      }
    };
    await axios.request(options).then(successCallback).catch(errorCalback);
}

export const editarVenta = async (id, data, successCallback, errorCalback) =>{
    const options = {
        method: 'PATCH',
        url: `http://localhost:5000/ventas/${id}`,
        headers: {'Content-Type': 'application/json', Authorization: getToken()},
        data,};
    await axios.request(options).then(successCallback).catch(errorCalback);
}

export const crearVenta = async (data, successCallback, errorCalback) => {
    const options = {
        method: 'POST',
        url: 'http://localhost:5000/ventas/nuevo',
        headers: {'Content-Type': 'application/json', Authorization: getToken()},
        data, };
    await axios.request(options).then(successCallback).catch(errorCalback);
}
export const deleteVenta = async (data, successCallback, errorCalback) => {
    const options = {
        method: 'DELETE',
        url: 'http://localhost:5000/ventas/eliminar',
        headers: {'Content-Type': 'application/json', Authorization: getToken()},
        data,
    };
    await axios.request(options).then(successCallback).catch(errorCalback);

}

//CRUD DE USUARIOS 

export const obtenerUsuarios = async(successCallback, errorCalback) =>{
    const options = {
        method: 'GET',
        url: 'http://localhost:5000/usuarios',
        headers: {'Content-Type': 'application/json', Authorization: getToken()},
      };
    await axios.request(options).then(successCallback).catch(errorCalback);
};

export const obtenerDatosUsuarios = async(successCallback, errorCalback) =>{
    const options = {
        method: 'GET',
        url: 'http://localhost:5000/usuarios/self',
        headers: {Authorization: getToken()},
      };
    await axios.request(options).then(successCallback).catch(errorCalback);
};

export const editarUsuario = async(id, data, successCallback, errorCalback) => {
    const options = {
        method: 'PATCH',
        url: `http://localhost:5000/usuarios/${id}`,
        headers: {'Content-Type': 'application/json', Authorization: getToken()},
        data,
      };
    await axios.request(options).then(successCallback).catch(errorCalback);
};