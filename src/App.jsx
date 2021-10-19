import'styles/estilos.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegistroProductos from './pages/RegistroProductos';
import RegistroVentas from './pages/RegistroVentas';
import VerProductos from './pages/VerProductos';
import RegistroUsuarios from './pages/RegistroUsuarios';
import VerVentas from './pages/VerVentas';
import VerUsuarios from './pages/VerUsuarios';
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
        <Route path={['/registroProductos','/registroVentas', '/registroVentas/ventas',
         '/registroUsuarios', '/registroUsuarios/usuarios']}>
          <PrivateLayout>
            <Switch>
              <Route path='/registroVentas/ventas'>
                <VerVentas/>
              </Route>
              <Route path='/registroUsuarios/usuarios'>
                <VerUsuarios/>
              </Route>
              <Route path='/registroProductos'>
                <RegistroProductos/>
              </Route>
              <Route path='/registroVentas'>
                <RegistroVentas/>
              </Route>
              <Route path='/registroUsuarios'>
                <RegistroUsuarios/>
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
