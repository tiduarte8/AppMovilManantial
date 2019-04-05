import React, { Component } from 'react';
import Crear from './../../components/agregarProComponent';
import firebase from 'react-native-firebase'

class CrearContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //estado de nuestros datos
            nombre: '',
            precio:'',
            imagen: '',
           

            //estado de nuestra interfaz
            estadoEnGuardado: 'comienzo',
        };
    }

    miEventoCambiarNombre = (nombre) => {
        this.setState({
            nombre: nombre,
            estadoEnGuardado: 'comienzo',
        });
    }

    miEventoCambiarPrecio = (precio) => {
        this.setState({
            precio: precio,
            estadoEnGuardado: 'comienzo',
        });
    }


    miEventoCambiarImagen = (imagen) => {
        this.setState({
            imagen: imagen,
            estadoEnGuardado: 'comienzo',
        })
    }

    miEventoPressGuardar = () => {

        this.setState({
            estadoEnGuardado: 'cargando',
        })

        const db = firebase.firestore();

        const {
            nombre,
            precio,
            imagen
        } = this.state;

        db
        .collection('productos')
        .add({
            nombre: nombre,
            precio: precio,
            imagen:imagen,
        })
        .then(() => {
            this.setState({
                nombre: '',
                precio:'',
                imagen: '',
                estadoEnGuardado: 'guardado',
                
            })
            this.props.navigation.navigate('lista');
        })
        
        .catch((error) => {
            this.setState({
                estadoEnGuardado: 'error',
            })
        })
    }

    render() {

        const { 
            nombre,
            precio,
            imagen,
            estadoEnGuardado,
        } = this.state

        return(
            <Crear
                nombre={nombre}
                miEventoCambiarNombre={this.miEventoCambiarNombre}
                precio={precio}
                miEventoCambiarPrecio={this.miEventoCambiarPrecio}
                imagen={imagen}
                miEventoCambiarImagen={this.miEventoCambiarImagen}
                miEventoPressGuardar={this.miEventoPressGuardar}
                estadoEnGuardado={estadoEnGuardado}
            />
        )

    }

}

export default CrearContainer;