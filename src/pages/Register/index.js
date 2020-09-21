import React, {useState} from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import { fire } from '../../config';


const Register = ({navigation}) => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const onFooterLinkPress = () => {
    navigation.navigate('Login')
  }

  const onRegisterPress = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match.")
      return
  }
  fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
          const uid = response.user.uid
          const data = {
              id: uid,
              email,
              fullName,
          };
          const usersRef = fire.firestore().collection('users')
          usersRef
              .doc(uid)
              .set(data)
              .then(() => {
                  navigation.navigate('Homes', {user: data})
              })
              .catch((error) => {
                  alert(error)
              });
      })
      .catch((error) => {
          alert(error)
  });
  }

     
      return(
          <View style={{ flex: 1}}>
              <ImageBackground source={require('../WellcomeAuth2/3.png')} style={styles.image}>

                {/* <View style={styles.errorMessage}>
                      {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View> */}

                <ScrollView style={styles.from}>
                    <View>
                      <Text style={styles.inputTitle}>Full Name</Text>
                      <TextInput 
                      style={styles.input} 
                      autoCapitalize="none"
                      onChangeText={(text) => setFullName(text)}
                      value={fullName}                      
                      ></TextInput>
                    </View>
                    
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

                    <View style={{marginTop: 32}}>
                      <Text style={styles.inputTitle}>Confirm Password</Text>
                      <TextInput 
                      style={styles.input} 
                      secureTextEntry 
                      autoCapitalize="none"
                      onChangeText={(text) => setConfirmPassword(text)}
                      value={confirmPassword}
                      ></TextInput>
                    </View>

                  <TouchableOpacity 
                  style={styles.button} 
                  onPress={() => onRegisterPress(() => this.props.navigation.navigate('Homes'))}>
                    <Text style={{color: "#FFF", fontWeight: "500" }}>Register</Text>
                  </TouchableOpacity>

                  <TouchableOpacity 
                  style={{alignSelf: "center", marginTop: 32}}
                  onPress={onFooterLinkPress}
                  >
                    <Text style={{color: "#414959", fontSize: 13}}>
                      Come on to <Text style={{ fontWeight: "500", color: "#009BB9"}}>Login</Text>
                    </Text>
                  </TouchableOpacity>

                  </ScrollView>
              </ImageBackground>
          </View>
      );
    };


const styles = StyleSheet.create({
  image: {
    flex: 1,
    // resizeMode: "cover",
    // justifyContent: "center",
    // paddingVertical: 300,
    paddingTop: 325,
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
    width: 430,
    height:1790, 
    marginVertical: 130,

    
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

export default Register;