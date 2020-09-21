import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



const Buttonps =({title, onPress}) =>{
    return (
        <TouchableOpacity 
        style= {{
            backgroundColor:'#75D0E2',
            alignItems: 'center',
            borderRadius: 25,
            paddingVertical: 13,
        }}
        onPress={onPress}>
            <Text style={{
                fontSize:12,
                fontWeight: 'bold',
                color: 'white',
                textTransform: 'uppercase',
                textAlign: 'center',
            }}>{title}
            </Text>
        </TouchableOpacity>
    );
};

export default Buttonps;