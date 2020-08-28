// import * as React from 'react';
// import { Platform,StatusBar,ImageBackground, StyleSheet, Text,TextInput,Image, View,Button, TouchableOpacity } from "react-native";
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// //==============================

// function HomeScreen ({navigation}) {
//   return (
//     <View style={{ flex: 2}}>
//       <ImageBackground source={require('../src/images/1.jpg')} style={styles.image}>
//         <TouchableOpacity style={styles.Menu}
//         title="Wellcome auth"
//         onPress={() => navigation.navigate('Login')}>
//           <Image source={require('../src/images/4.png')} style={styles.lanjut}/>
//         </TouchableOpacity>
//       </ImageBackground></View> 
//   );
// }
// function LoginScreen ({navigation}) {
//   return (
//     <View style={{ flex: 2}}>
//       <ImageBackground source={require('../src/images/3.jpg')} style={styles.image}>
//         <TouchableOpacity style={styles.Menu}
//         title="Wellcome auth"
//         onPress={() => navigation.navigate('Login')}>
//             <TextInput placeholder={"username"}
//             onChangeText={(value)=>this.ListeningStateChangedEvent({username:value})}
//             style={{height:59, width:"80%", left:30, top:20, borderBottomWidth:1}}/>
//             <TextInput placeholder={"Password"}
//             onChangeText={(value)=>this.ListeningStateChangedEvent({username:value})}
//             style={{height:59, width:"80%", left:30, top:40, borderBottomWidth:1}}/>
//             <Image source={require('../src/images/5.png')} style={styles.lanjut2}/>
//         </TouchableOpacity>
//       </ImageBackground></View>
//   );
// }
// const Stack = createStackNavigator();

// function wellcome() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="belajar" component={HomeScreen} options={{headerShown:false}} />
//         <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column"
//   },
//   image: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "center"
//   },
//   text: {
//     fontFamily: "Oxygen",
//     color: "#4E4E4E",
//     fontSize: 18,
//     fontWeight: "bold",
//     marginTop:450,
//     marginLeft:250,
//   },
//  lanjut: {
//     marginTop:450,
//     marginLeft:40,
//   },
//   lanjut2: {
//     position:"absolute",
//     marginTop:170,
//     marginLeft:90,
//   }
// });

// export default wellcome;
