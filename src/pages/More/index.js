import React, { useState } from "react";
import { View, StyleSheet, Button, Alert,TouchableOpacity,Image,ImageBackground,Text } from "react-native";
import { fire } from "../../config";

  const Profil=({navigation,onPress}) => {
    const handleGoTo = screen => 
      navigation.navigate(screen)

      const signOutUser = () => {
        fire.auth().signOut()
           navigation.navigate('Login')
      }
      
      
  const createTwoButtonAlert = () =>
    Alert.alert(
      "LOGOUT",
      "Apakah Anda Ingin Keluar?",
      [
        {
          text: "Tidak",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Ya", onPress: () => handleGoTo('WellcomeAuth2') }
      ],
      { cancelable: false }
    );
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/background/2.png')}  style={styles.backgroundImage}>
          <TouchableOpacity onPress={() => handleGoTo('Homes')} >
                <Image source={require('../../assets/icon/backicon.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => handleGoTo('AboutUs')}>
                <Text style={{color:'#009BB9',fontWeight: 'bold',fontSize:18,fontFamily: 'Tahoma'}}>ABOUT US</Text>  
              </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={signOutUser}>
                <Text style={{color:'#009BB9',fontWeight: 'bold',fontSize:18,fontFamily: 'Tahoma'}}>LOGOUT</Text>  
              </TouchableOpacity>
      <View>
                 <View style={{height: 50, flexDirection: 'row', backgroundColor: 'white', marginTop:550}}>
                     <TouchableOpacity onPress={() => handleGoTo('Homes')}> 
                         <Image style={{width: 26, height: 26, marginHorizontal: 50}} source={require('../../assets/icon/home.png')} />
                             <Text style={{fontSize: 10, color: '#545454', marginTop: 4, textAlign: 'center',color: '#78d4e1'}}>Home</Text>  
                     </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleGoTo('Profil')}>
                         <Image style={{width: 26, height: 26, marginHorizontal: 50}} source={require('../../assets/icon/account.png')} />
                             <Text style={{fontSize: 10, color: '#545454', marginTop: 4, textAlign: 'center' ,color: '#78d4e1'}}>Profil</Text>  
                    </TouchableOpacity>
                     <TouchableOpacity onPress={() => handleGoTo('More')}>
                         <Image style={{width: 26, height: 26, marginHorizontal: 50}} source={require('../../assets/icon/More1.png')} />
                            <Text style={{fontSize: 10, color: '#545454', marginTop: 4, textAlign: 'center' ,color: '#78d4e1'}}>More</Text>  
                     </TouchableOpacity>
             </View>
             </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
  header:{
    backgroundColor: "#009BB9",
    height:150,
  },
  backgroundImage:{
    width: 430,
    height:790, 
},

  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    marginLeft: 10,
    width:400,
    borderRadius: 10,
    backgroundColor: "white",
  },
});

export default Profil;
