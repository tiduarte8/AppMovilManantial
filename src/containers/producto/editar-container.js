import React, { Component } from 'react';
import Editar from './../../components/editar';
import firebase from 'react-native-firebase'

class EditarContainer extends Component {

    constructor(props) {
        super(props);

        const  photoParaActualizar = props.navigation.getParam('photoParaActualizar',{});

        console.log('photoParaActualizar',  photoParaActualizar);

        this.state = {
            //estado de nuestros datos
            key:  photoParaActualizar.key,
            nombre: photoParaActualizar.nombre,
            precio: photoParaActualizar.precio,
            imagen: photoParaActualizar.imagen,

            //estado de nuestra interfaz
            estadoEnEditado: 'comienzo',
        };
    }

    miEventoCambiarNombre = (nombre) => {
        this.setState({
            nombre: nombre,
            estadoEnEditado: 'comienzo',
        });
    }

    miEventoCambiarPrecio = (precio) => {
        this.setState({
            precio: precio,
            estadoEnEditado: 'comienzo',
        });
    }

    miEventoCambiarImagen = (imagen) => {
        this.setState({
            imagen: imagen,
            estadoEnEditado: 'comienzo',
        })
    }

    miEventoPressEditar = () => {

        this.setState({
            estadoEnEditado: 'cargando',
        })

        const db = firebase.firestore();

        const {
            key: photoId,
            nombre,
            precio,
            imagen,
        } = this.state;

        db
        .collection('productos')
        .doc(photoId)
        .update({
            nombre: nombre,
            precio:precio,
            imagen: imagen,
        })
        .then(() => {
            this.setState({
                nombre: '',
                precio:'',
                imagen: '',
                estadoEnEditado: 'guardado',
                
            })
            this.props.navigation.navigate('lista');
        })
        .catch((error) => {
            this.setState({
                estadoEnEditado: 'error',
            })
        })

       
    }

    render() {

        const { 
            nombre,
            precio,
            imagen,
            estadoEnEditado,
        } = this.state

        console.log('nombre', nombre)

        return(
            <Editar
                nombre={nombre}
                miEventoCambiarNombre={this.miEventoCambiarNombre}
                precio={precio}
                miEventoCambiarPrecio={this.miEventoCambiarPrecio}
                imagen={imagen}
                miEventoCambiarImagen={this.miEventoCambiarImagen}
                miEventoPressEditar={this.miEventoPressEditar}
                estadoEnEditado={estadoEnEditado}
            />
        )

    }

}

export default EditarContainer;