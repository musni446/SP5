import React from 'react';
import {Image,StyleSheet,TextInput,View,ImageBackground,TouchableOpacity} from 'react-native';
import ActionButtonps from './ActionButtonps';

const Peserta=({navigation}) => {
  const handleGoTo = screen => {
    navigation.navigate(screen);
  };
    return(
        <View style={{ flex: 1}}>
            <ImageBackground source={require('../WellcomeAuth2/3.png')} style={styles.image}>
            {/* <TouchableOpacity style={styles.Menu} title="Wellcome auth" onPress={() => navigation.navigate('Login')}> */}
            <TextInput placeholder={"username"}
            style={{height:50, width:"90%", left:30, top:120, borderWidth:2, borderColor:'#0ec7e3', borderRadius:10}}/>
            <TextInput placeholder={"Password"} 
            style={{height:50, width:"90%", left:30, top:140, borderWidth:2,borderColor:'#0ec7e3', borderRadius:10}}/>
            <ActionButtonps title="Submit" onPress={() => handleGoTo('Homes')}/>
            {/* </TouchableOpacity> */}
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

export default Peserta;