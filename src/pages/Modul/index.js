import React from 'react';
import { Text, View, Image,ImageBackground,StyleSheet,} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NavbarIcon from '../../components/molecules/NavBarIcon';


const TataTertib=({navigation,onPress}) => {
    const handleGoTo = screen => {
      navigation.navigate(screen);
    };
    return(
        <View style={{flex: 1}}>
                  <ImageBackground source={require('../../assets/background/2.png')}  style={styles.backgroundImage}>
{/* ===========================================================================================Back Navigator============================================================  */} 
            <View style={{flex: 1}}>
                <TouchableOpacity onPress={() => handleGoTo('Homes')}>
                    <Image source={require('../../assets/icon/backicon.png')}/>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.buttonContainer2}>
{/* ===========================================================================================Modul Pembelajaran============================================================  */} 
            <View>
            <Text  style={styles.jadwal}>MODUL PEMBELAJARAN</Text>
            <View>
                <Text  style={styles.Text}>1. Literasi Komputer</Text>
              <Image source={require('../TataTertib/unduh.png')}style={styles.unduh} />
                <Text  style={styles.Text}>2. Algoritma & Web Dasar</Text>
              <Image source={require('../TataTertib/unduh.png')}style={styles.unduh} />
                <Text  style={styles.Text}>3. Database MySQL</Text>
              <Image source={require('../TataTertib/unduh.png')}style={styles.unduh} />
                <Text  style={styles.Text}>4. Node JS</Text>
              <Image source={require('../TataTertib/unduh.png')}style={styles.unduh} />
                <Text  style={styles.Text}>5. React Native</Text>
              <Image source={require('../TataTertib/unduh.png')}style={styles.unduh} />
                <Text  style={styles.Text}>6. API</Text>
              <Image source={require('../TataTertib/unduh.png')}style={styles.unduh} />
                <Text  style={styles.Text}>7. Swagger</Text>
              <Image source={require('../TataTertib/unduh.png')}style={styles.unduh} />
            </View>
        </View>
        </TouchableOpacity>
{/* ===========================================================================================Navbar============================================================  */}     
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
    header: {
        position: "absolute", width: 248, color: '#009BB9', height: 24, left: 26, top: 10, fontSize: 18, fontWeight: "bold"
      },
      jadwal: {
        width: 371,
        left:27,
        lineHeight:60,
        marginTop:20,
        fontSize:18,  
        fontWeight:"bold",
        color: '#009BB9',
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
      },
      unduh: {
        width: 45,
        height: 18,
        left: 298,
      }, 
      Text: {
        width: 450,
        top: 10,
        height: 18,
        left: 8,
        color: '#009BB9',
      }, 
      buttonContainer2: {
        marginTop:10,
        marginLeft: 20,
        height:650,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom:20,
        width:370,
        borderRadius:5,
        backgroundColor: "#F0F4F4",
      },
});


// ={{left: 15,top: 2,fontSize:14,color: "black",marginTop:20,textAlign: 'center',  fontWeight:'bold'}}