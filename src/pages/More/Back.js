import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,Button,Alert
} from 'react-native';
const Back=({navigation,onPress}) => {
  const handleGoTo = screen => {
    navigation.navigate(screen)
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  };
  const createTwoButtonAlert = screen =>
  navigation.navigate(screen)
  ;

    return (
      <View style={styles.container}>
              <Button onPress={() => createTwoButtonAlert('WellcomeAuth2')} title={"2-Button Alert"}/>
      </View>
    );
  }

export default Back;
const styles = StyleSheet.create({
  header:{
    backgroundColor: "#009BB9",
    height:150,
  },
  backgroundImage:{
    width: 420,
    height: 750, 
},
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:80
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#009BB9",
    marginTop:10,
    fontWeight:"bold"
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  description2:{
    position:'absolute',
    left: 25,
    top: 10,
    fontSize:16,
    color: "white",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#009BB9",
  },
  buttonContainer2: {
    marginTop:10,
    height:310,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom:20,
    width:370,
    borderRadius:5,
    backgroundColor: "#009BB9",
  },
  buttonContainer3: {
    marginTop:270,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "white",
  },
  buttonContainer4: {
    marginTop:10,
    height:170,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom:20,
    width:370,
    borderRadius:5,
    backgroundColor: "#009BB9",
  },
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  }
});