import React from 'react';
import {View,Text,Image} from 'react-native';

const Logo = (props)=>{
    return(
        <View>
            <Image
            
                    source={ require('./../../assets/imagen/logomanantialt.png') }
                    width={10}
                    height={10}>
            </Image>
        </View>
    )
}
export default Logo;