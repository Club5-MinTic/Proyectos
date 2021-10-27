import'styles/estilos.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegistroProductos from './pages/RegistroProductos';
import GestionVentas from './pages/GestionVentas';
import Usuarios from './pages/Usuarios';
import Login from './pages/Login';
import Inicio from './pages/Inicio';
import PublicLayout from './layouts/PublicLayout';
import PrivateLayout from 'layouts/PrivateLayout';
import LoginLayout from 'layouts/LoginLayout';

function App() {

  return (  
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
         '/usuarios', ]}>
          <PrivateLayout>
            <Switch>
              <Route path='/gestionProductos'>
                <RegistroProductos/>
              </Route>
              <Route path='/gestionVentas'>
                <GestionVentas/>
              </Route>
              <Route path='/usuarios'>
                <Usuarios/>
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
  )
}

export default App;
