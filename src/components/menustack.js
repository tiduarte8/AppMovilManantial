import {createStackNavigator,createAppContainer} from 'react-navigation';
import Lista from './../containers/producto/listaContainer';
import Crear from './agregarProComponent';


const menuStack = createStackNavigator({
    lista:{
        screen:Lista,
        navigationOptions: {
            headerTitle: 'Lista de Productos',
    },
},

    crear:{
        screen:Crear,
        navigationOptions: {
            headerTitle: 'Agregar Producto',
          },
    },
},
{

    defaultNavigationOptions: {
        navigationOptions: {
          headerTitle: 'Lista de Productos',
        },
          headerStyle: {
              backgroundColor: '#000080',
          },
          headerTintColor: '#ffffff',
      },
    

});

export default createAppContainer(menuStack);