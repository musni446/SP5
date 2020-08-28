import React from 'react';
import {StyleSheet,Text,View,ImageBackground} from 'react-native';
import ActionButton from './ActionButton';

const WellcomeAuth2=({navigation}) => {
  const handleGoTo = screen => {
    navigation.navigate(screen);
  };
    return(
        <View style={{ flex: 1,
        }}>
            <ImageBackground source={require('../WellcomeAuth2/2.jpg')} style={styles.image}> 
            <ActionButton title="Admin" onPress={() => handleGoTo('admin')}/>
            <ActionButton title="Peserta"onPress={() => handleGoTo('Peserta')}/>
            </ImageBackground>
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
export default WellcomeAuth2;