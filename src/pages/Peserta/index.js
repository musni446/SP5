import React from 'react';
import {Image,StyleSheet,TextInput,View,ImageBackground,TouchableOpacity} from 'react-native';

const Peserta=() => {
    return(
        <View style={{ flex: 2}}>
            <ImageBackground source={require('../admin/3.jpg')} style={styles.image}>
            <TouchableOpacity style={styles.Menu} title="Wellcome auth" onPress={() => navigation.navigate('Login')}>
            <TextInput placeholder={"username"} onChangeText={(value)=>this.ListeningStateChangedEvent({username:value})}
            style={{height:59, width:"80%", left:30, top:20, borderBottomWidth:1}}/>
            <TextInput placeholder={"Password"} onChangeText={(value)=>this.ListeningStateChangedEvent({username:value})}
            style={{height:59, width:"80%", left:30, top:40, borderBottomWidth:1}}/>
            {/* <Image source={require('../src/images/5.png')} style={styles.lanjut2}/> */}
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
    }
  });

export default Peserta;