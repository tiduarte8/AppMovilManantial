import React from 'react';
import{StyleSheet,ScrollView} from 'react-native';
import {
    createDrawerNavigator,
    createAppContainer,
    createStackNavigator,
    DrawerItems,
    SafeAreaView,
} from 'react-navigation';
import agregarProComponent from './agregarProComponent';
import CalculadoraPrecios from './calculadoraPrecios';
import Productos from './productos';
import Lista from './../containers/producto/listaContainer'
import Login from './loginComponetn';
import LoginContainer from './../containers/loginContainer'
import {Image} from 'react-native';
import MenuStack from './menustack';
import Registrarse from './registrarse';
import Logo from './logo';

const CustomDrawerContentComponent = props => (
    <ScrollView>
      <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
        <Image
            style={styles.imagen}
            source={require('./../../assets/imagen/logomanantialt.png')}
        />
        <DrawerItems {...props} />

      </SafeAreaView>
    </ScrollView>
  );

  const styles = StyleSheet.create({
   
    imagen: {
        left:20,
        width: 250,
        height: 150,
        resizeMode: 'cover',
        marginBottom: 30,
    }
});


const MenuDrawer = createDrawerNavigator({

   

    PantallaProductos:{
        screen:MenuStack,
        navigationOptions:{
            drawerLabel: 'Lista de Productos',
            drawerIcon: <Image source={require('./../../assets/imagen/logos/productos.png')} style={{resizeMode: 'cover', width: 24, height: 24,}}/>,
        },
    },

   PantallaProComponent:{
       screen:agregarProComponent,
       navigationOptions:{
           drawerLabel: 'Agregar Productos',
           drawerIcon: <Image source={require('./../../assets/imagen/logos/icono-producto-png-1.png')} style={{resizeMode: 'cover', width: 24, height: 24,}}/>,
       },
    },
       PantallaCalculadoraPrecio:{
        screen:CalculadoraPrecios,
        navigationOptions:{
            drawerLabel: 'Calcular Precios',
            drawerIcon: <Image source={require('./../../assets/imagen/logos/descarga.png')} style={{resizeMode: 'cover', width: 24, height: 24,}}/>,
        },
    },
        Salir:{
        screen:LoginContainer,
        navigationOptions:{
            drawerLabel: 'Salir',
            drawerIcon: <Image source={require('./../../assets/imagen/logos/cerrarsesion.png')} style={{resizeMode: 'cover', width: 24, height: 24,}}/>,
        }
    }
   
},
{
    contentComponent: CustomDrawerContentComponent,
}  

);

const menuPrincipal = createStackNavigator({
    PantallaLogin: {
        screen:LoginContainer,
        navigationOptions:{
            title: 'Iniciar Sesión',
        },
    },
    PantallaPrincipal: {
        screen: MenuDrawer,
        navigationOptions: {
            title: 'Principal',
        },
    },
    Registrarse: {
        screen: Registrarse,
        navigationOptions: {
            title: 'Registrarse',
        },
    },
    
},

{
    
    headerMode: 'none',
   
}



)

export default createAppContainer(menuPrincipal)