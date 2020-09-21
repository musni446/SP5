import React from 'react';
import {View, Text, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const NavBarIcon = (props) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={props.onPress} >
                <Image style={{width: 26, height: 26, marginHorizontal: 50}} source={props.img}/>
                <Text style={{fontSize: 10, color: '#545454', marginTop: 4, textAlign: 'center', color: props.active ? '#78d4e1' : '#545454'}}>{props.title}</Text>
            </TouchableOpacity>
            
        </View>
    )
}

export default NavBarIcon;