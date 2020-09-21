import React, { Component } from 'react';
import { View } from 'react-native';
import NavBarIcon from '../../../components/molecules/NavBarIcon';
// import { withNavigation } from 'react-navigation';

const NavBar=({navigation}) => {
    const handleGoTo = screen => {
      navigation.navigate(screen);
    };
    return(
            <View style={{height: 50, flexDirection: 'row', backgroundColor: 'white', marginVertical: -20}}>
                <NavBarIcon onPress={() => handleGoTo('Homes')} title="Homes" img={require('../../../assets/icon/home-active.png')} active />
                <NavBarIcon onPress={() => handleGoTo('Profil')} title="Profil Santri SP" img={require('../../../assets/icon/account.png')} />
                <NavBarIcon onPress={() => handleGoTo('More')} title="More" img={require('../../../assets/icon/More1.png')} />
            </View>
        )
    }

export default NavBar;