import React from 'react';
import {
 Route,
 Router,
 hashHistory,
} from 'react-router';
import Header from './components/Main';
import muiThemeable from 'material-ui/styles/muiThemeable';
//import Home from './components/pages/home';
/*MANEJO DE USUARIOS DEL SISTEMA*/
import Mostrar_Usuarios from './components/pages/usuarios/mostrar_usuarios';
import Crear_Usuario from './components/pages/usuarios/crear_usuario';
import Editar_Usuario from './components/pages/usuarios/editar_usuario';
import RoomTypesShow from './components/pages/tipos-habitacion/Page';
import Suites from './components/pages/habitacion/Suites';
import VerClientes from './components/pages/clientes/verClientes';
import LoginForm from './components/Login';
import RoomTable from './components/pages/spreadsheet/RoomTable'


class AppRoutes extends React.Component {
    render(){
        return (
            <Router history={hashHistory}>
              <Route path="/" component={LoginForm}/>
              <Route path="/main" component={Header} >
                  <Route path="/home" component={RoomTable}/>
                  <Route path="/usuario" component={Mostrar_Usuarios}/>
                  <Route path="/usuario/crear" component={Crear_Usuario}/>
                  <Route path="/usuario/editar" component={Editar_Usuario}/>
                  <Route path="/tipo-habitacion" component={RoomTypesShow}/>
                  <Route path="/habitaciones" component={Suites}/>
                  <Route path="/clientes" component={VerClientes}/>
              </Route>
            </Router>)
    }
};


export default AppRoutes;
