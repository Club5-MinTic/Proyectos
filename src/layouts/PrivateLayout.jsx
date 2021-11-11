import Sidebar from 'components/Sidebar'
import React from 'react'
import { useEffect, useState } from 'react';
import { useAuth0  } from "@auth0/auth0-react";
import { obtenerDatosUsuarios } from 'utils/api';
import { useUser } from 'context/UserContext';
import ReactLoading from 'react-loading';


const PrivateLayout = ({ children }) => {
    const { isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently, logout } = useAuth0();
    const {setUserData} = useUser();
    const [loadingUserInformation, setLoadingUserInformation] = useState(false);

    useEffect(() => {
        const fetchAuth0Token = async () => {
            setLoadingUserInformation(true);
            const accessToken = await getAccessTokenSilently({
                audience: `api-autenticacion-komuya-mintic`,
            });
            localStorage.setItem('token', accessToken);
            console.log(accessToken);

            await obtenerDatosUsuarios(
                (response)=>{
                console.log('response', response);
                setUserData(response.data);
                setLoadingUserInformation(false);
            },(err)=>{
                console.log('err', err);
                setLoadingUserInformation(false);
                logout({ returnTo: 'http://localhost:3000/' });
            })
        };
        if (isAuthenticated){
            fetchAuth0Token()
        }
    }, [isAuthenticated, getAccessTokenSilently, setUserData])

    
    if (isLoading || loadingUserInformation)
    return <ReactLoading type='cylon' color='#abc123' height={667} width={375} />;
    
    if (!isAuthenticated) {
        return loginWithRedirect();
      };


    return (
            <div className='flex w-screen h-screen'>
                <Sidebar/>
                <main className='flex w-full overflow-y-scroll justify-center'>{children}</main>
            </div>
    )
}

export default PrivateLayout
