/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */



import React,{Component} from 'react';
import {Picker, Alert,Text, View,TouchableOpacity,StyleSheet,AppRegistry,TextInput,Dimensions } from 'react-native'
import LoginComponent from './src/components/loginComponetn';
import AgregarP from './src/components/agregarProComponent';
import Calculadora from './src/components/calculadoraPrecios'
import Menu from './src/components/menu';




 class HomeContainer extends Component{


  

  render(){

    
    return(
      <View
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        alignItems:'center'
      }}>




 
     </View>
    );

  }
}


export default HomeContainer;


