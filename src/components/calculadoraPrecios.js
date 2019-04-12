import React from 'react';
import {Picker,Console,TextInput,Text,View,Button,Dimensions,TouchableOpacity,Alert,Image,StyleSheet} from 'react-native';





const CalculadoraPrecio = (props)=>{

  const {producto,
  eventoL}= props;

  
  
  return(
    
      <View style={styles.view}>





<Text style={styles.text}>Producto:</Text>
<Picker
  selectedValue={producto}
  style={styles.picker}
  onValueChange={(itemValue, itemIndex) =>
    eventoL
  }>
  <Picker.Item label="Galon" value="gl" />
  <Picker.Item label="Bidon" value="bd" />
</Picker>


        <Text style={styles.text}>Precio:</Text>
        
        <TextInput style={styles.textinput}
        value={Picker.Item.selectedValue}
           editable = {false}
           style={styles.textinput}
          >
       
       </TextInput>
       <Text style={styles.text}>Cantidad:</Text>
        <TextInput 
           keyboardType="numeric"
            style={styles.textinput}
            placeholder= "Cantidad">
        
        </TextInput>

         
<TouchableOpacity 
style = {styles.touchboton}
>
    <Text style={styles.textboton} >Calcular</Text>
    
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
    borderRadius:10,
    borderColor: 'gray',textAlign:'center',
    borderWidth: 1,fontSize:20, margin:15,
    width:(Dimensions.get('window').width * 40/100)},

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
      },
      text:{
         color:'#999999',
          fontSize:22        
      },
      picker:{
        height: 45,
        borderRadius:10,
        borderColor: 'gray',textAlign:'center',
        borderWidth: 1,fontSize:20, margin:15,
        width:(Dimensions.get('window').width * 40/100)

      }

      

    })


export default CalculadoraPrecio;