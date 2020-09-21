import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const NameProfil = (props) => {
    return (
        <View>
            <View>
                <Text style={styles.nameprofil}> TM Musni Darma</Text>
            </View>
        </View>

    )
}

export default NameProfil;

const styles = StyleSheet.create({
    nameprofil: {
        height: 50,
        backgroundColor: '#00000000',
        borderColor: 'black',
        marginTop: 50,

        textAlign: 'center',
        color: '#778899',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: '',
    },
    
});