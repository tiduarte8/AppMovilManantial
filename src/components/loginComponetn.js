import React from 'react';
import {Console,TextInput,Text,View,Button,Dimensions,TouchableOpacity,Alert,Image,StyleSheet} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Registrarse from './registrarse';



const LoginComponen = (props)=>{

  const App = createStackNavigator({
    Main:{
    screen: Registrarse}
  })
 

  return(
      <View style={styles.view}>
        <Image   style={styles.imagen}
                    source={ require('./../../assets/imagen/logomanantialt.png') }
                    width={350}
                    height={200}>

        </Image>
           <TextInput 
            
            style={styles.textinput}
            placeholder= "Usuario">
        
        </TextInput>

          <TextInput 
           style={styles.textinput}
            secureTextEntry={true}
            
            placeholder= "contraseña">

          </TextInput>
         
<TouchableOpacity 
style = {styles.touchboton}
>
    <Text style={styles.textboton} >Entrar</Text>
    
</TouchableOpacity>
<Text style={styles.textoestilo} onPress={()=>props.navigation.navigate('Registrarse')} >
  Registrarse
</Text>
</View>

  );
};

const styles=StyleSheet.create({
  view:{flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    alignItems:'center',
    backgroundColor:'#D9F3FE'},

    textinput:{height: 45,backgroundColor:'white',
    borderColor: 'gray',textAlign:'center',
    borderWidth: 1,fontSize:20, margin:15,
    width:(Dimensions.get('window').width * 80/100)},

    touchboton:{ height: 40, marginTop: 10,
      backgroundColor:'navy',
      width:150,borderWidth:2, 
      borderRadius:4, 
      flexDirection:'row'},

      textboton:{color:'white',
      justifyContent:'center',
      alignItems:'center',
      textAlign:'center',
      flex:1,
      fontSize:25},

      textoestilo:{
        fontSize: 20,
        marginTop:5,
        color:'navy',
      }

    




});

const MenuNavigator = createStackNavigator({
  Login: {
      screen: LoginComponen,
      navigationOptions: {
        headerTitle: 'Login',
      },
     
  },
  Registrarse: {
    screen: Registrarse,
    navigationOptions: {
      headerTitle: 'Registrarse',
    },
},
}, {
  
  defaultNavigationOptions: {
    navigationOptions: {
      headerTitle: 'Login',
    },
      headerStyle: {
          backgroundColor: '#000080',
      },
      headerTintColor: '#ffffff',
  },
})

export default createAppContainer(MenuNavigator)