import React from 'react';
import{View,Text,TextInput,TouchableOpacity,StyleSheet} from 'react-native';
import { createDrawerNavigator,
    createAppContainer,} from 'react-navigation';
import agregarProComponent from './agregarProComponent';
import CalculadoraPrecios from './calculadoraPrecios';
import Productos from './productos';
import Lista from './../containers/producto/listaContainer'
import Login from './loginComponetn'
import {Image} from 'react-native';
import MenuStack from './menustack';


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
        PantallaLogin:{
            screen:Login,
            navigationOptions:{
                drawerLabel: 'Salir',
                drawerIcon: <Image source={require('./../../assets/imagen/logos/cerrarsesion.png')} style={{resizeMode: 'cover', width: 24, height: 24}}/>,
            },
        
        
     
   },
})

export default createAppContainer(MenuDrawer)
