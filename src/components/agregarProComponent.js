import React from 'react';
import {Console,TextInput,Text,View,Button,Dimensions,TouchableOpacity,Alert,Image,StyleSheet} from 'react-native';





const agregarProComponent = (props)=>{

  const{
     codigodebarra,
     eventoCodigodeBarra,

     nombre,
     eventoNombre,

     precio,
     eventoPrecio,
     eventoCrear
  }= props;

  return(
      <View style={styles.view}>
        <Image   style={styles.imagen}
                    source={ require('./../../assets/imagen/gota.png') }
                    width={333}
                    height={199}
                    >

        </Image>
        <TextInput 
            onChangeText={eventoCodigodeBarra}
            value={codigodebarra}
            keyboardType='numeric'
            style={styles.textinput}
            placeholder= "Código de Barra">
        
        </TextInput>
        <TextInput 
            onChangeText={eventoNombre}
            value={nombre}
            style={styles.textinput}
            placeholder= "Nombre Presentación">
        
        </TextInput>
        

          <TextInput 

           onChangeText={eventoPrecio}
           value={precio}
           style={styles.textinput}  
            keyboardType="numeric"
            placeholder= "Precio C$">

          </TextInput>
         
<TouchableOpacity style = {styles.touchboton}
onPress={eventoCrear}
>

    <Text style={styles.textboton} >Guardar</Text>
    
</TouchableOpacity>

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
    borderRadius:10,
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

export default agregarProComponent;
