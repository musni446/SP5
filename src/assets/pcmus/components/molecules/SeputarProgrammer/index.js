import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const SeputarProgrammer = ({onPress}) => {
    return (
        <View>
            <View>
                <Text style={styles.news}>Seputar Programmer</Text>
            </View>
            <View style={{paddingTop: 15, paddingHorizontal: 16}}>
                <View style={{position: 'relative'}}>
                        <Image source={require('../../../assets/dummy/sp5.png')} style={{height: 170, width: '100%', borderRadius: 6 }}/>
                    <View style={{paddingTop: 15, width: '100%', height: 170, position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.10, borderRadius: 6}}></View>
                    <View style={{height: 15, width: 55, position: 'absolute', top: 10, left: 16 }}>
                        <Image source={require('../../../assets/logo/nf-computer.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />
                    </View>
                    <View style={{height: 15, width: 55, position: 'absolute', top: 10, right: 16 }}>
                    <Image source={require('../../../assets/logo/ybm-logo.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}}/>
                    </View>
                </View>
                <View style={{paddingTop: 15, paddingHorizontal: 10, borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginBottom: 20}}>
                    <Text style={{fontSize: 14, fontWeight: 'bold', color: '#009bb9'}}>Opening Sekolah Programmer Batch 5</Text>
                <Text style={{fontSize: 12, fontWeight: 'normal', color: '#7A7A7A', marginBottom: 11}}>YBM PLN dan NURUL FIKRI Memulai Kembali Membuka Sekolah Programmer Batch 5</Text>
                    <TouchableOpacity style={{backgroundColor: '#61A756', paddingHorizontal: 10, paddingVertical: 9, alignSelf: 'flex-end', borderRadius: 4}} onPress={onPress} >
                        <Text style={{fontSize: 9, fontWeight: 'bold', color: 'white'}}>Read more</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}

export default SeputarProgrammer;

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