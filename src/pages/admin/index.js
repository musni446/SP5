import React, {Component} from 'react';import {StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground} from 'react-native';
    const admin=() => {
      return (
        <View style={styles.container}>
          <ImageBackground source={require('../admin/3.jpg')} style={styles.image}>
            <TextInput 
              style={{height:45, width:"80%", left:30, top:20, borderBottomWidth:1}}
              placeholder='Email'
              utoCapitalize="none"
              placeholderTextColor='black'
            />
            <TextInput 
              secureTextEntry
              style={{height:45, width:"80%", left:30, top:20, borderBottomWidth:1}}
              placeholder='Password'
              placeholderTextColor='black'
            />
          
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.textSignup}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.instructions}>Don’t have account? Register</Text>
          </ImageBackground>
        </View>
      );
    }
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: '#1ABC9C',
      flexDirection: 'column'
    },
    textInput:{
      height: 40,
      borderColor: '#ffffff',
      borderWidth: 1,
      color:'#ffffff',
      paddingLeft:10,
      paddingRight:10,
      marginBottom:10,
      width:350
    },
    buttonStyle:{
      backgroundColor:'blue',
      paddingLeft:10,
      paddingRight:10,
      marginTop:10,
      width:350
    },
    textSignup: {
      fontSize: 16,
      textAlign: 'center',
      margin: 10,
      color:'#00A4D8'
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    instructions: {
      textAlign: 'center',
      color: '#ffffff',
      marginBottom: 5,
      marginTop:10
    },
  });
export default admin;