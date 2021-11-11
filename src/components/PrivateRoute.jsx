import React from 'react'
import { useUser } from 'context/UserContext';

const PrivateRoute = ({ rolesList, children }) => {
    const { userData } = useUser();
  
    if (rolesList.includes(userData.rol)) {
      return children;
    }
  
    return <div className='mt-6 text-center text-3xl font-extrabold text-red-700'>No estás autorizado para ver este sitio.</div>;
  };
  

export default PrivateRoute
