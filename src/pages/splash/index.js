import React, { useEffect } from 'react';
import {StyleSheet,View,ImageBackground} from 'react-native';
import { fire } from '../../config';

const Splash =({navigation})=>{
    useEffect (() =>{
      const unsubscribe = fire.auth().onAuthStateChanged(user => {
        setTimeout(() => {
                if(user){
                    navigation.replace('Homes');
                } else {
                    navigation.replace('Login')
                }
            }, 2000);
          });
          return() =>unsubscribe();
        }, [navigation]);
    
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