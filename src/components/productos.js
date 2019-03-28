import React from 'react';
import {View,Text,TextInput,StyleSheet ,Dimensions, ScrollView,FlatList,Button} from 'react-native';
import { TouchableOpacity } from 'react-native';


const Productos =(props)=>{

    const {datosDeLaLista,eventoPantallaAgregar}= props;
    return(
    <View style={styles.view}>
     <TextInput 
           
            style={styles.textinput}
            placeholder= "Buscar Productos">
        
        </TextInput>
       <ScrollView>
       <Button title="Agregar Producto"
           onPress={eventoPantallaAgregar}
       />
        <FlatList
            data={datosDeLaLista}
            renderItem={({item}) => {
                    return(
                        <Item
                            item={item}
                        />
                    )
                }
            }
        />
       </ScrollView>
    </View>);
    
}

const Item=(props)=>{
    const {item}=props;
    return (
        <TouchableOpacity>
            <View>
                <Text>
                  {item.nombre}
                </Text>
            </View>
            <View>
                <Text>
                    {item.precio}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create(
    {
        view:{flex: 1,
            
            paddingHorizontal: 10,
            alignItems:'center',
            
            backgroundColor:'#D9F3FE'},
        textinput:{
         
            height: 45,backgroundColor:'white',
            borderRadius:10,
            borderColor: 'gray',textAlign:'center',
            borderWidth: 1,fontSize:20, margin:15,
            width:(Dimensions.get('window').width * 80/100)
        },

    }
);

export default Productos;