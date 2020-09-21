import React from 'react';
import {View, Image} from 'react-native';

const MainFeature = (props, onPress) => {
    return (
        <View style={{width: '25%', alignItems: 'center'}}>
            <View style={{width:90, height: 90, borderWidth:1, borderColor: '#EFEFEF', borderRadius: 5, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
                <Image source={props.img} 
                onPress={onPress} />
            </View>
        </View>
    )
}

export default MainFeature;