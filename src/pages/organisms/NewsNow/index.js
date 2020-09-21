import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BeritaTerkini from '../../../components/molecules/BeritaTerkini';

class NewsNow extends Component {
    render() {
        return (
            <View>
                <View>
                    <Text style={styles.news}>Berita Terkini</Text>
                </View>
                <View>
                    <BeritaTerkini 
                        img={require('../../../assets/dummy/sp-angkatan1.png')}
                        title1="Angkatan 1 Sekolah Programmer" 
                        title2="Mahasantri memiliki Keterampilan kepemimpinan dalam dirinya, sehingga mahasantri dapat"
                        date="19 Agustus 2020"
                        buttonread="Read more" />
                    <BeritaTerkini
                    img={require('../../../assets/dummy/Haloqah.png')}
                    title1="Kegiatan Haloqah Tahfidz" 
                    title2="Santri-santri yang rajin dalam menghafal Al-quran dan juga pandai dalam berkultum di"
                    date="19 Agustus 2020"
                    buttonread="Read more" />
                </View>
            </View>   
        )
    }
}

export default NewsNow;

const styles = StyleSheet.create({
    news: {
        height: 30,
        backgroundColor: '#00000000',
        marginTop: 30,
        marginLeft: 10,
        paddingTop: 10,

        textAlign: 'left',
        color: '#009bb9',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: '',
    },
    
});