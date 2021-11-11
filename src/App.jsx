import'styles/estilos.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegistroProductos from './pages/RegistroProductos';
import GestionVentas from './pages/GestionVentas';
import Usuarios from './pages/Usuarios';
import Login from './pages/Login';
import Home from 'pages/Home';
import Inicio from './pages/Inicio';
import PublicLayout from './layouts/PublicLayout';
import PrivateLayout from 'layouts/PrivateLayout';
import LoginLayout from 'layouts/LoginLayout';
import { Auth0Provider } from "@auth0/auth0-react";
import { UserContext } from 'context/UserContext';
import { useState } from 'react/cjs/react.development';
import PrivateRoute from 'components/PrivateRoute';

function App() {
  const [userData, setUserData] = useState({});

  return (  
    <Auth0Provider
    domain="misiontic-komuya.us.auth0.com"
    clientId="elQinPRmYGjXj6UK2K3tDb80i83wGAcH"
    redirectUri={window.location.origin}
    audience= 'api-autenticacion-komuya-mintic'
    >
      <div>
        <UserContext.Provider value={{userData, setUserData}}>
          <Router>
            <Switch>
              <Route path={['/login']}>
                <LoginLayout>
                  <Switch>
                    <Route path='/login'>
                      <Login/>
                    </Route>
                  </Switch>
                </LoginLayout>
              </Route>
              <Route path={['/gestionProductos','/gestionVentas',
              '/usuarios', '/home' ]}>
                <PrivateLayout>
                  <Switch>
                    <Route path='/gestionProductos'>
                      <PrivateRoute rolesList={['Admin', 'Vendedor']}>  
                        <RegistroProductos/>
                      </PrivateRoute>
                    </Route>
                    <Route path={['/home']}>
                      <Home/>
                    </Route>
                    <Route path='/gestionVentas'>
                      <PrivateRoute rolesList={['Admin', 'Vendedor']}>
                        <GestionVentas/>
                      </PrivateRoute>
                    </Route>
                    <Route path='/usuarios'>
                      <PrivateRoute rolesList={['Admin']}>
                        <Usuarios/>
                      </PrivateRoute>
                    </Route>
                  </Switch>

                </PrivateLayout>
              </Route>
              <Route path={['/']}>
                <PublicLayout>
                  <Switch>
                    <Route path='/'>
                      <Inicio/>
                    </Route>
                  </Switch>
                </PublicLayout>
              </Route>
            </Switch>
          </Router>
        </UserContext.Provider>
      </div>
    </Auth0Provider>
  )
}

export default App;
