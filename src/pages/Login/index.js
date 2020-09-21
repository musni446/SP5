import React, {useState} from 'react';
import {Text,StyleSheet,TextInput,View,ImageBackground,TouchableOpacity} from 'react-native';
import ActionButtonps from './ActionButtonps';
import * as firebase from 'firebase';
import { fire } from '../../config';



const Login = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onFooterLinkPress = () => {
    navigation.navigate('Register')
  }

  const onLoginPress = () => {
    fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
            const uid = response.user.uid
            const usersRef = fire.firestore().collection('users')
            usersRef
                .doc(uid)
                .get()
                .then(firestoreDocument => {
                    if (!firestoreDocument.exists) {
                        alert("User does not exist anymore.")
                        return;
                    }
                    const user = firestoreDocument.data()
                    navigation.navigate('Homes', {user})
                })
                .catch(error => {
                    alert(error)
                });
        })
        .catch(error => {
            alert(error)
        });
    }


      return(
          <View style={{ flex: 1}}>
              <ImageBackground source={require('../WellcomeAuth2/3.png')} style={styles.image}>

                {/* <View style={styles.errorMessage}>
                      {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View> */}

                <View style={styles.from}>
                    <View style={{marginTop: 32}}>
                      <Text style={styles.inputTitle}>Email</Text>
                      <TextInput 
                      style={styles.input} 
                      autoCapitalize="none"
                      onChangeText={(text) => setEmail(text)}
                      value={email}
                      ></TextInput>
                    </View>

                    <View style={{marginTop: 32}}>
                      <Text style={styles.inputTitle}>Password</Text>
                      <TextInput 
                      style={styles.input} 
                      secureTextEntry 
                      autoCapitalize="none"
                      onChangeText={(text) => setPassword(text)}
                      value={password}
                      ></TextInput>
                    </View>

                  <TouchableOpacity 
                    style={styles.button} onPress={() => onLoginPress(() => this.props.navigation.navigate('Homes'))}
                    // onPress={this.props.navigation.navigate("Homes")}
                    >
                    <Text style={{color: "#FFF", fontWeight: "500" }}>Login</Text>
                  </TouchableOpacity>

                  <TouchableOpacity 
                    style={{alignSelf: "center", marginTop: 32}}
                    onPress={onFooterLinkPress}
                    >
                    <Text style={{color: "#414959", fontSize: 13}}>
                      New to Account? <Text style={{ fontWeight: "500", color: "#009BB9"}}>Sign Up</Text>
                    </Text>
                  </TouchableOpacity>

                  </View>
              </ImageBackground>
          </View>
      );
    };


const styles = StyleSheet.create({
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      paddingTop: 330,
    width: 430,
    height:790, 
    },

    errorMessage: {
      height: 72,
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: 30,
    },
    error: {
      color: "#E9446A",
      fontSize: 13,
      fontWeight: "600",
      textAlign: "center",
    },
    form: {
      marginBottom: 48,
      marginHorizontal: 30
    },
    inputTitle: {
      color: "#8A8F9E",
      fontSize: 10,
      fontWeight: "bold",
      marginHorizontal: 30,
      textTransform: "uppercase",
    },
    input: {
      borderBottomColor: "#8A8F9E",
      borderBottomWidth: StyleSheet.hairlineWidth,
      height: 40,
      fontSize: 15,
      marginHorizontal: 30,
      marginVertical: 5,
      color: "#161F3D",
    },
    button: {
      marginHorizontal: 30,
      backgroundColor: "#009BB9",
      borderRadius: 4,
      height: 52,
      alignItems: "center",
      justifyContent: 'center',
    }
  });

export default Login;