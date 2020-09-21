import React, { Component } from "react";
import { View, Text, StyleSheet, Picker, TouchableHighlight, ScrollView, ImageBackground,Image,TouchableOpacity} from "react-native";

const absen=({navigation,onPress}) => {
  const handleGoTo = screen => {
    navigation.navigate(screen);
  };
  return(
        <View>
                <TouchableOpacity onPress={() => handleGoTo('Homes')}>
                    <Image source={require('../../assets/icon/backicon.png')}/>
                </TouchableOpacity>
                </View>
                    )
                  }

export default absen;