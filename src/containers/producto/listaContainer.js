import React, {Component} from 'react';

import Lista from  './../../components/productos';

import {AsyncStorage,Alert} from 'react-native';

import Crear from './../../components/agregarProComponent';



class ListaContainer extends Component {

    constructor(props) {
        super(props);
        this.state={
            agenda:[],
           
        }
    }

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

    eventoPantallaAgregar=()=>{
        this.props.navigation.navigate('crear')
    };
    


    render(){
        const {producto}= this.state;
        console.log('datos',producto);

      return(
        <Lista
           eventoPantallaAgregar={this.eventoPantallaAgregar}
            datosDeLaLista={producto}
        />
        );
        
    }

    async componentDidMount(){
     const datos = await this.obtenerDatos();
     if(datos !== null)
     {
         this.setState({producto:datos,
        });
     }

    }

}

export default ListaContainer;