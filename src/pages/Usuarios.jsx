import React, {useEffect, useState} from 'react'
import { editarUsuario } from 'utils/api';
import { obtenerUsuarios } from 'utils/api';
import { nanoid } from 'nanoid';


const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const fetchUsuarios = async () => {
          await obtenerUsuarios(
            (respuesta) => {
              console.log('usuarios', respuesta.data);
              setUsuarios(respuesta.data);
            },
            (err) => {
              console.log(err);
            }
          );
        };
        fetchUsuarios();
      }, []);


    return (
        <div className='w-full px-20 py-5'>
            <h1 className='mt-6 text-center text-3xl font-extrabold text-gray-900 p-6'>Gestión de usuarios y roles</h1>
            <table className='tabla p-20'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Documento</th>
                        <th>Rol</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((user) => {
                        return (
                        <tr key={nanoid()}>
                            <td>{user._id.slice(20)}</td>
                            <td>{user.nombre}</td>
                            <td>{user.documento}</td>
                            <td>
                            <RolesUsuario user={user} />
                            </td>
                            <td>
                            <EstadoUsuario user={user} />
                            </td>
                        </tr>
                        );
                    })}
                </tbody>     
            </table>
        </div>

    )};

    const RolesUsuario = ({ user }) => {
        const [rol, setRol] = useState(user.rol);
      
        useEffect(() => {
          const editUsuario = async () => {
            await editarUsuario(
              user._id,
              { rol },
              (res) => {
                console.log(res);
              },
              (err) => {
                console.error(err);
              }
            );
          };
          if (user.rol !== rol) {
            editUsuario();
          }
        }, [rol, user]);
      
        return (
          <select value={rol} onChange={(e) => setRol(e.target.value)}>
            <option value='' disabled>
              Seleccione un rol
            </option>
            <option value='admin'>Admin</option>
            <option value='vendedor'>Vendedor</option>
            <option value='sin rol'>Sin rol</option>
          </select>
        );
      };
      const EstadoUsuario = ({ user }) => {
        const [estado, setEstado] = useState(user.estado ?? '');
      
        useEffect(() => {
          const editUsuario = async () => {
            await editarUsuario(
              user._id,
              { estado },
              (res) => {
                console.log(res);
              },
              (err) => {
                console.error(err);
              }
            );
          };
          if (user.estado !== estado) {
            editUsuario();
          }
        }, [estado, user]);
      
        return (
          <select value={estado} onChange={(e) => setEstado(e.target.value)}>
            <option value='' disabled>
              Seleccione un estado
            </option>
            <option value='autorizado' className='text-green-500'>
              Autorizado
            </option>
            <option value='pendiente' className='text-yellow-500'>
              Pendiente
            </option>
            <option value='rechazado' className='text-red-500'>
              Rechazado
            </option>
          </select>
        );
      };


export default Usuarios
