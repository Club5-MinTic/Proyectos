import { useUser } from 'context/UserContext';
import React from 'react'

const PrivateComponent = ({roles, children}) => {
    const {userData} = useUser();

    if(roles.includes(userData.rol)){
        return children
    }
    return <></>;

}

export default PrivateComponent
