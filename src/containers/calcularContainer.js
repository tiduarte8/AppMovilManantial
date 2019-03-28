 import React,{Component} from 'react';
 import {View} from 'react-native';
 import Calcular from './../components/calculadoraPrecios.js';


 class CalcularContainer extends Component{

  miEventoValor=()=>{
    this.state.language
  }

  miEventoL=()=>
  {
    this.setState({language: itemValue})
  }
   render(){

    
      return(
        <View
        style={{
          flex: 1,
          justifyContent: 'center',
          paddingHorizontal: 10,
          alignItems:'center'
        }}>
  
  
  <Calcular/>
        
   
       </View>
      );
  
      }
    }

    export default CalcularContainer