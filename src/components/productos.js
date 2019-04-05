import React from 'react';
import {View,Text,TextInput,StyleSheet ,Dimensions, ScrollView,FlatList,Button,Image} from 'react-native';
import { TouchableOpacity } from 'react-native';


const Productos =(props)=>{

    const { datos, miEventoPressPantallaCrear, miEventoPressPantallaEditar } = props;
    return (
        <View style={styles.view}>
            <View>
                <Button
                    title={'Registrar Producto'}
                    onPress={miEventoPressPantallaCrear}
                />
            </View>
            <FlatList
                style={{
                    width: '100%',
                    height: '100%',
                }}
                renderItem={
                    ({ item }) => {
                        return (
                            <TouchableOpacity
                                key={item.key}
                                onPress={
                                    () => {
                                        miEventoPressPantallaEditar(item)
                                    }
                                }
                                style={{
                                    margin: 12,
                                    backgroundColor: '#fff',
                                    borderRadius: 6,
                                    padding: 12,
                                }}
                            >
                                <View>
                                <View style={styles.viewborder}>
                                    <Text style={styles.text}>{item.nombre}</Text>
                                    <Text style={styles.text}>{item.precio} C$</Text>
                                </View> 
                                    <Image
                                        source={{uri: item.imagen}}
                                        style={
                                            { width: '50%', height: 175,left:80, resizeMode: 'cover', }
                                        }
                                    />
                                </View>
                            </TouchableOpacity>
                        )
                    }
                }
                data={datos}
            />
        </View>
    )
 }
const styles=StyleSheet.create(
    {
        view:{flex: 1,
            
            paddingHorizontal: 10,
            alignItems:'center',
            padding:10,
           
            
            backgroundColor:'#D9F3FE'},
        textinput:{
         
            height: 45,backgroundColor:'white',
            borderRadius:10,
            borderColor: 'gray',textAlign:'center',
            borderWidth: 1,fontSize:20, margin:15,
            width:(Dimensions.get('window').width * 80/100)
        },
        text:{
           textAlign:'center',
           fontSize:20,
           fontWeight: 'bold',
           color:'navy',
           
          
           
        },
        viewborder:{
            borderRadius:10,
            backgroundColor:'#67C9F0',

        }

    }
);

export default Productos;