import React, {Component} from 'react';

import Lista from  './../../components/productos';

import firebase from 'react-native-firebase';



class ListaContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            datos: [],
        };
        
    }

    miEventoPressPantallaCrear = () => {
        this.props.navigation.navigate('crear');
    }

    miEventoPressPantallaEditar = (productos) => {

        this.props.navigation.navigate('editar', {
            photoParaActualizar: productos,
        });
    }

    render() {
        const { datos } = this.state
        return (
            <Lista
                datos={datos}
                miEventoPressPantallaCrear={ this.miEventoPressPantallaCrear }
                miEventoPressPantallaEditar={ this.miEventoPressPantallaEditar }
            />
        )
    }

    componentDidMount() {
        const db = firebase.firestore();
        db.collection('productos').onSnapshot((instantanea) => {
            const { datos } = this.state;
            instantanea.docChanges.forEach((cambio) => {
                const indice = datos.findIndex(item => item.key === cambio.doc.id);
                switch (cambio.type) {
                    case 'added': {
                        datos.push({
                            key: cambio.doc.id,
                            nombre: cambio.doc.data().nombre,
                            precio: cambio.doc.data().precio,
                            imagen: cambio.doc.data().imagen,
                        });
                        break;
                    }
                    case 'modified': {
                        if(indice !== -1) {
                            datos[indice].nombre = cambio.doc.data().nombre;
                            datos[indice].precio = cambio.doc.data().precio;
                            datos[indice].imagen = cambio.doc.data().imagen;
                        }
                        break;
                    }
                    case 'removed': {
                        if(indice !== -1 ) {
                            datos.splice(indice, 1);
                        }
                        break;
                    }
                }
            });
            this.setState({
                datos: datos,
            });
        });
    }

}

export default ListaContainer;