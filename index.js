/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Menu from './src/components/menu';
import {name as appName} from './app.json';
import Calcular from './src/containers/calcularContainer';
import Principal from './src/components/principal';
import Registrarse from './src/components/registrarse';
import ListaContainer from './src/containers/producto/listaContainer';
import MenusStack from './src/components/menustack';
import CrearContainer from './src/containers/producto/crearContainer';
import LoginContainer from './src/containers/loginContainer';
import Login from './src/components/loginComponetn'



AppRegistry.registerComponent(appName, () => Principal);
