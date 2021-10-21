import React from 'react'

const RegistroUsuarios = () => {
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
                        <th>Editar/Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>12345</td>
                        <td>Pedro</td>
                        <td>100367489</td>
                        <td>Vendedor</td>
                        <td>Pendiente</td>
                        <td>
                            <div className='flex w-full justify-around'>
                                <i className='fas fa-edit text-yellow-600 hover:text-yellow-700'></i>
                                <i className='fas fa-trash-alt text-red-600 hover:text-red-700'></i>
                            </div>
                        </td>
                    

                    </tr>
                    <tr>
                        <td>12346</td>
                        <td>Alejandra</td>
                        <td>123689467</td>
                        <td>Admin</td>
                        <td>Autorizado</td>
                        <td>
                            <div className='flex w-full justify-around'>
                                <i className='fas fa-edit text-yellow-600 hover:text-yellow-700'></i>
                                <i className='fas fa-trash-alt text-red-600 hover:text-red-700'></i>                  
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>12347</td>
                        <td>Fernando</td>
                        <td>289367567</td>
                        <td>Vendedor</td>
                        <td>No Autorizado</td>
                        <td>
                            <div className='flex w-full justify-around'>
                                <i className='fas fa-edit text-yellow-600 hover:text-yellow-700'></i>
                                <i className='fas fa-trash-alt text-red-600 hover:text-red-700'></i>   
                            </div>
                        </td>
                    </tr>
                </tbody>      
                </table>
            </div>

    )
}

export default RegistroUsuarios
