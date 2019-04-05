import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    Dimensions
} from 'react-native';

const Editar = (props) => {
    
    const {
        nombre,
        miEventoCambiarNombre,
        precio,
        miEventoCambiarPrecio,
        imagen,
        miEventoCambiarImagen,
        miEventoPressEditar,
        estadoEnEditado,
    } = props
    return (
        <View>
            <View>
                <Text style={styles.textoestilo}>Nombre</Text>
                <TextInput
                    style={styles.textinput}
                    value={nombre}
                    onChangeText={miEventoCambiarNombre}
                    editable={ estadoEnEditado === 'cargando' ? false : true }
                />
            </View>
            <Text  style={styles.textoestilo}>Precio</Text>
                <TextInput
                    style={styles.textinput}
                    value={precio}
                    onChangeText={miEventoCambiarPrecio}
                    editable={ estadoEnEditado === 'cargando' ? false : true }
                />
            <View>
                <Text  style={styles.textoestilo}>URL de Imagen</Text>
                <TextInput
                    style={styles.textinput}
                    value={imagen}
                    onChangeText={miEventoCambiarImagen}
                    editable={ estadoEnEditado === 'cargando' ? false : true }
                />
            </View>
            <View>
                <Button
                    title={'Guardar'}
                    onPress={ miEventoPressEditar}
                    disabled={ estadoEnEditado === 'cargando' ? true : false }
                />
            </View>
        </View>
    )
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
      width:(Dimensions.get('window').width * 93/100)},
  
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
          left:15,
        }
  
      
  
    });  

export default Editar;