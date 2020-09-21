import React, { Component } from "react";
import { View, Text, StyleSheet, Picker, TouchableHighlight, ScrollView, ImageBackground,Image,TouchableOpacity} from "react-native";

const absen=({navigation,onPress}) => {
  const handleGoTo = screen => {
    navigation.navigate(screen);
  };
  return(
    <View style={{marginVertical: 20}}>
    <View style={{height: 50, flexDirection: 'row', backgroundColor: 'white', marginVertical: -20}}>
    <TouchableOpacity onPress={() => handleGoTo('Homes')}> 
             <Image style={{width: 26, height: 26, marginHorizontal: 55}} source={require('../../assets/icon/home.png')} />
                 <Text style={{fontSize: 10, color: '#545454', marginTop: 4, textAlign: 'center',color: '#78d4e1'}}>Home</Text>  
         </TouchableOpacity>
        <TouchableOpacity onPress={() => handleGoTo('Profil')}>
             <Image style={{width: 26, height: 26, marginHorizontal: 55}} source={require('../../assets/icon/account.png')} />
                 <Text style={{fontSize: 10, color: '#545454', marginTop: 4, textAlign: 'center' ,color: '#78d4e1'}}>Profil</Text>  
        </TouchableOpacity>
         <TouchableOpacity onPress={() => handleGoTo('More')}>
             <Image style={{width: 26, height: 26, marginHorizontal: 55}} source={require('../../assets/icon/More1.png')} />
                <Text style={{fontSize: 10, color: '#545454', marginTop: 4, textAlign: 'center' ,color: '#78d4e1'}}>More</Text>  
         </TouchableOpacity>           
</View>
</View>    
)
}

export default absen;

const styles = StyleSheet.create({
backgroundImage:{
width: 435,
height: 785, 
},
header: {
position: "absolute", width: 248, color: '#009BB9', height: 24, left: 26, top: 10, fontSize: 18, fontWeight: "bold"
},
hari: {
color: 'black',
fontSize: 14,
fontWeight: 'bold',
width: 248,
height: 18,
left: 26,
},
image: {
flex: 1,
resizeMode: "cover",
justifyContent: "center"
},
buttonContainer2: {
marginTop:10,
marginLeft: 20,
height:1200,
flexDirection: 'row',
justifyContent: 'flex-start',
marginBottom:20,
width:370,
borderRadius:5,
backgroundColor: "#F0F4F4",
},
Text: {
left: 10,
top: 2,
fontSize:12,
color: "black",
marginTop:5,
textAlign: 'justify',
marginRight: 25
},
});
