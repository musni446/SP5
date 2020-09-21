import React from 'react';
import { Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



const ButtonTT =({props, onPress}) =>{
    return (
        <TouchableOpacity 
        style= {{
            backgroundColor:'#75D0E2',
            alignItems: 'center',
            borderRadius: 25,
            paddingVertical: 13,
        }}
        onPress={onPress}>
            <Image source={props.img} 
                onPress={onPress} />
        </TouchableOpacity>
    );
};

export default ButtonTT;