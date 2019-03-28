import React,{Component} from 'react';
import agregarProComponent from './../../components/agregarProComponent';
import {AsyncStorage,Alert} from 'react-native';



class CrearProducto extends Component{

    
    agregarDatos=async(producto)=>{
        try{

            const productoEnString=JSON.stringify({
                datosDeLaLista:producto,
            });

            const resultadoObtenerDatos = this.obtenerDatos();
            if(resultadoObtenerDatos === null)
            {
               
                await AsyncStorage.setItem('PRODUCTO',productoEnString);
            }

            else{
               
                await AsyncStorage.mergeItem('PRODUCTO',productoEnString);
            }
           
             
        }

        catch(error){

        }
    }

    obtenerDatos = async () => {
    
        try{
            const producto = await AsyncStorage.getItem('PRODUCTO')
            if(Lista=== null){
              Alert.alert('mensaje','No hay datos');
              return  null;
                
            }
            else{
               
                const arregloProducto= JSON.parse(producto);
                return arregloProducto.datosDeLaLista;
            }
        }
        catch(error){

        }

    }

    render(){
        const {producto}= this.state;
        console.log('datos',producto);

      return(
        <agregarProComponent
        
         eventoCrear={this.agregarDatos}

        />
        );
        
    }


}

export default CrearProducto;