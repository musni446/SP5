import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MainFeature from '../../../components/molecules/MainFeature';

const MainItems=({navigation}) => {
    const handleGoTo = screen => {
      navigation.navigate(screen);
    };
      return(
            <View>
                <View>
                    <Text style={styles.main}>Produktifitas</Text>
                </View>
                <View style={{flexDirection:'row', flexWrap: 'wrap', marginHorizontal: 50, marginVertical: 1}}>
                    <View style={{justifyContent: "space-between", flexDirection: 'row', width: '100%', marginTop: 18 }}>
                        <TouchableOpacity style={{marginLeft:27}} onPress={() => handleGoTo('TataTertib')}>
                            <MainFeature img={require('../../../assets/icon/TataTertib.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft:32}} onPress={() => navigation.navigate('WellcomeAuth2')}>  
                            <MainFeature img={require('../../../assets/icon/JadwalKegiatan.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft:37}} onPress={() => navigation.navigate('WellcomeAuth2')}> 
                             <MainFeature img={require('../../../assets/icon/AbsensiKegiatan.png')}/>
                        </TouchableOpacity>
                   </View>
                    <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginTop: 18 }}>
                        <TouchableOpacity style={{marginLeft:27}} onPress={() => handleGoTo('admin')}>
                            <MainFeature img={require('../../../assets/icon/Tahfidz.png')} />
                        </TouchableOpacity>    
                        <TouchableOpacity style={{marginLeft:32}} onPress={() => handleGoTo('admin')}>
                            <MainFeature img={require('../../../assets/icon/Modul.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft:37}} onPress={() => handleGoTo('admin')}>
                            <MainFeature img={require('../../../assets/icon/Perizinan.png')}/>
                        </TouchableOpacity>
                    </View>                        
                </View>
                </View>   
        );
    };

export default MainItems;

const styles = StyleSheet.create({
    main: {
        height: 30,
        backgroundColor: '#00000000',
        marginTop: 30,
        marginLeft: 10,
        paddingTop: 3,
 
        textAlign: 'left',
        color: '#778899',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: '',
    },
    
});