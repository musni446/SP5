import React from 'react';
import {StyleSheet,View,TouchableOpacity,ImageBackground,Image} from 'react-native';

const WellcomeAuth=({navigation}) => {
    return(
        <View style={{ flex: 1}}>
            <ImageBackground source={require('../WellcomeAuth/11.jpg')} style={styles.image}> 
            <TouchableOpacity onPress={() => navigation.navigate('WellcomeAuth2')}>
            <Image source={require('../WellcomeAuth/4.png')} style={styles.lanjut}/>
            </TouchableOpacity>
            </ImageBackground>
        </View>
        );
    };

    const styles = StyleSheet.create({
        image: {
          flex: 1,
          resizeMode: "cover",
          justifyContent: "center"
        },
       lanjut: {
          marginTop:650,
          marginLeft:240,
        }
      });   
export default WellcomeAuth;