
import React,{Component} from 'react';
import { Alert,Text, View,TouchableOpacity,Button,StyleSheet,AppRegistry,TextInput,Dimensions } from 'react-native'

import Login from './../components/loginComponetn';





 class LoginContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      usuario: '',
      contrasena: '',
    }
  }



miEventoUsuario=(text)=>{
  this.setState({usuario: text,});
}
miEventoContra=(text)=>{
  this.setState({contrasena: text,});
}


miEventoBoton=()=>{
  const usuario = this.state.usuario;
  const contra = this.state.contrasena;
  
 
  if (usuario==="tiduarte8"&& contra==="tito1993") {
    Alert.alert("Hola "+usuario,"Bienvenido");
    this.props.navigation.navigate('PantallaPrincipal');  
  }
  else{
     Alert.alert("error","nombreusuario o contrasena incorrecto");
    // this.setState({EstaLogueado:false})
  //  this.props.navigation.navigate('PantallaPrincipal');
  }
  
}

  render(){

    const { nombreusuario, contrasena } = this.state;
   
    
    return(
      <Login
       miOnChangeDeUsuario={this.miEventoUsuario}
       miOnChangeDePassword={this.miEventoContra}
       nombreusuario={nombreusuario}
       contrasena={contrasena}
       miOnPressDeBoton={this.miEventoBoton}
      />
    );
  }
}

export default  LoginContainer;