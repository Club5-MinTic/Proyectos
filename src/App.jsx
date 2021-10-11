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

function App() {

  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/registroProductos'>
          <PrivateLayout>
            <RegistroProductos/>
          </PrivateLayout>
        </Route>
        <Route path='/registroVentas'>
          <RegistroVentas/>
        </Route>
        <Route path='/registroUsuarios'>
          <RegistroUsuarios/>
        </Route>
        <Route path='/productos'>
          <VerProductos/>
        </Route>
        <Route path='/ventas'>
          <VerVentas/>
        </Route>
        <Route path='/usuarios'>
          <VerUsuarios/>
        </Route>
        <Route path='/'>
          <PublicLayout>
            <Inicio/>
          </PublicLayout> 
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
