import React, { useEffect } from 'react';
import {StyleSheet,View,ImageBackground} from 'react-native';

const Splash =({navigation})=>{
    useEffect (() =>{
        setTimeout(() =>{
            navigation.replace('WellcomeAuth');}, 
            2000);
          });
    return(
        <View style={{ flex: 1}}>
            <ImageBackground source={require('../splash/1.png')} style={styles.image}/> 
        </View>
    );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
});

export default Splash;