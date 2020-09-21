import React, {Commponent, Component} from 'react';
import Router from './config/router';
import { View, Text, Platform, StyleSheet, Image, ImageBackground, ScrollView, Button, TouchableOpacity } from 'react-native';


import MainFeature from './components/molecules/MainFeature';
import BeritaTerkini from './components/molecules/BeritaTerkini';
import SeputarProgrammer from './components/molecules/SeputarProgrammer';
import NavBar from './containers/organisms/NavBar';




class App extends Component {
    render() {
        return(
           <Router/>
        );
    }
}


export default App;

