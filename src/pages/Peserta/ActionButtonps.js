import React from 'react';
import {StyleSheet,Text,View,ImageBackground} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Buttonps from '../../components/atoms/buttonps';

const ActionButtonps =({onPress, title})=>{
    return(
    <View style={{marginBottom: 23,maxWidth: 225,marginLeft: 70}}>
        <Buttonps title={title} onPress={onPress}/>
    </View>
    );
};

export default ActionButtonps;