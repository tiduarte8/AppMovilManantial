import React from 'react';
import {Console,TextInput,Text,View,Button,Dimensions,TouchableOpacity,Alert,Image,StyleSheet} from 'react-native';





const agregarProComponent = (props)=>{

  const{
    nombre,
    miEventoCambiarNombre,
    precio,
    miEventoCambiarPrecio,
    imagen,
    miEventoCambiarImagen,
    miEventoPressGuardar,
    estadoEnGuardado,
  }= props;

  return(
      <View style={styles.view}>
        <Image   style={styles.imagen}
                    source={ require('./../../assets/imagen/gota.png') }
                    width={333}
                    height={199}
                    >

        </Image>
        <Text style={styles.textoestilo}>Nombre</Text>
        <TextInput style={styles.textinput} 
           value={nombre}
           onChangeText={miEventoCambiarNombre}
           editable={ estadoEnGuardado === 'cargando' ? false : true }
           >
        
        </TextInput>
        <Text style={styles.textoestilo}>Precio</Text>
        <TextInput keyboardType='numeric' style={styles.textinput}
            value={precio}
           onChangeText={miEventoCambiarPrecio}
           editable={ estadoEnGuardado === 'cargando' ? false : true }>
        
        </TextInput>
        
          <Text style={styles.textoestilo}>Imagen</Text>
          <TextInput style={styles.textinput} 

           value={imagen}
           onChangeText={miEventoCambiarImagen}
           editable={ estadoEnGuardado === 'cargando' ? false : true }>

          </TextInput>
         
          <View style={styles.touchboton}>
                <Button
                    title={'Guardar'}
                    onPress={miEventoPressGuardar}
                    disabled={ estadoEnGuardado === 'cargando' ? true : false }
                />
            </View>

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
      width:85,borderWidth:2, 
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
