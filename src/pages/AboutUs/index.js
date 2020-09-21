import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Text, 
    View, 
    Image,
    ImageBackground,
    StyleSheet} from 'react-native';

const TataTertib=({navigation,onPress}) => {
    const handleGoTo = screen => {
      navigation.navigate(screen);
    };
    return(
        
//  ============================================Back Navigator====================================== 
        <View style={{flex: 1}}>
                  <ImageBackground source={require('../../assets/background/2.png')}  style={styles.backgroundImage}>
                <TouchableOpacity onPress={() => handleGoTo('Homes')}>
                    <Image source={require('../../assets/icon/backicon.png')}/>
                </TouchableOpacity>
{/* ============================================ Text======================================  */}
                  <Text style={styles.Text}>Aplikasi Sistem Informasi Santri Sekolah Programmer</Text>
                  <Text style={styles.Text2}>Copyright By : </Text>
                  <Text style={styles.Text3}>Sekolah Programmer Bacth 5</Text>
{/* ============================================ Navbar======================================  */}
            <View style={{marginVertical:755}}>
            <View style={{height: 50, flexDirection: 'row', backgroundColor: 'white', marginVertical: -20}}>
                    <TouchableOpacity onPress={() => handleGoTo('Homes')}> 
                        <Image style={{width: 26, height: 26, marginHorizontal: 50}} source={require('../../assets/icon/home.png')} />
                            <Text style={{fontSize: 10, color: '#545454', marginTop: 4, textAlign: 'center',color: '#78d4e1'}}>Home</Text>  
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleGoTo('Profil')}>
                        <Image style={{width: 26, height: 26, marginHorizontal: 50}} source={require('../../assets/icon/account.png')} />
                            <Text style={{fontSize: 10, color: '#545454', marginTop: 4, textAlign: 'center' ,color: '#78d4e1'}}>Profil</Text>  
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleGoTo('More')}>
                        <Image style={{width: 26, height: 26, marginHorizontal: 50}} source={require('../../assets/icon/More1.png')} />
                            <Text style={{fontSize: 10, color: '#545454', marginTop: 4, textAlign: 'center' ,color: '#78d4e1'}}>More</Text>  
                    </TouchableOpacity>
            </View>
            </View>
            </ImageBackground>
        </View>    
    )
}

export default TataTertib;

const styles = StyleSheet.create({
    backgroundImage:{
        width: 435,
        height: 785, 
    },
    Text: {
        fontFamily: "Cochin",
        fontSize:18,
        fontWeight: 'bold',
        alignContent:"center",
        justifyContent:"center",
        alignItems: 'center',
       textAlign:"center" ,
        color: "#009BB9",
        marginTop:5,
        textAlign: 'center',
        marginRight: 25,
        position:"absolute",
        top: 300,
        left: 10
      },
      Text2: {
        fontFamily: "Cochin",
        fontSize:14,
        fontWeight: 'bold',
        alignContent:"center",
        justifyContent:"center",
        alignItems: 'center',
       textAlign:"center" ,
        color: "#009BB9",
        marginTop:5,
        textAlign: 'center',
        marginRight: 25,
        position:"absolute",
        top: 350,
        left: 165,
      },
      Text3: {
        fontFamily: "Cochin",
        fontSize:18,
        fontWeight: 'bold',
        alignContent:"center",
        justifyContent:"center",
        alignItems: 'center',
       textAlign:"center" ,
        color: "#009BB9",
        marginTop:5,
        textAlign: 'center',
        marginRight: 25,
        position:"absolute",
        top: 370,
        left: 80
      },
});
