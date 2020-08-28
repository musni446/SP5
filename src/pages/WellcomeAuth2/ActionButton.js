import React from 'react';
import {StyleSheet,Text,View,ImageBackground} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../../components/atoms/button';

const ActionButton =({onPress, title})=>{
    return(
    <View style={{marginBottom: 43,maxWidth: 225,marginLeft: 70}}>
        <Button title={title} onPress={onPress}/>
    </View>
    );
};

export default ActionButton;