import {createStackNavigator,createAppContainer} from 'react-navigation';
import Lista from './../containers/producto/listaContainer';
import Crear from './../containers/producto/crearContainer';
import Editar from './../containers/producto/editar-container';


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

    editar: {
        screen: Editar,
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