import React, {useState} from 'react';
import {Picker, Text, StyleSheet, View, TextInput, Button,TouchableOpacity,Image,Alert} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Edit=({navigation,onPress}) => {
  const handleGoTo = screen => 
    navigation.navigate(screen)
    
const createTwoButtonAlert = () =>
  Alert.alert(
    "Save",
    "Apakah Anda Ingin Menyimpan Data Ini?",
    [
      {
        text: "Tidak",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "Ya", onPress: () => handleGoTo('WellcomeAuth2') }
    ],
    { cancelable: false }
  );
return (
    <View style={{flex:1}} >
             
    <View>
    <ScrollView>
        <View  style={styles.header}>
        <TouchableOpacity style={{position:'absolute',left: 25,top: 13}} onPress={() => handleGoTo('Homes')}>
                     <Image source={require('../../assets/icon/backicon.png')}/>
                 </TouchableOpacity>
    <Text style={styles.headerText}> Data Diri Pribadi </Text>
    </View>
      <Text style={styles.Text}>          </Text>
      <Text style={styles.Text}> Nama Lengkap </Text>
        <TextInput placeholder="Nama Lengkap"
        style={styles.TextInput} />
        <Text style={styles.Text}> Tempat Lahir </Text>
        <TextInput placeholder="Tempat Lahir" 
        style={styles.TextInput}/>
        <Text style={styles.Text}> Tanggal Lahir </Text>
        <TextInput placeholder="Tanggal Lahir" 
        style={styles.TextInput}/>
        <Text style={styles.Text}> Alamat </Text>
        <TextInput placeholder="Alamat" 
        style={styles.TextInput}/>
        <Text style={styles.Text}> Nomor HP </Text>
        <TextInput placeholder="Nomor HP" 
        style={styles.TextInput}/>
        <Text style={styles.Text}> Email </Text>
        <TextInput placeholder="Email" 
        style={styles.TextInput}/>
        <Text style={styles.Text} > Jenis Kelamin </Text>
        <TextInput placeholder="Jenis Kelamin" 
        style={styles.TextInput}/>
        <Text style={styles.Text}> Pendidikan </Text>
        <TextInput placeholder="Pendidikan" 
        style={styles.TextInput}/>
        <Text style={styles.Text}> Tahun Lulusan </Text>
        <TextInput placeholder="Tahun Lulusan" 
        style={styles.TextInput}/>
        <Text style={styles.Text}>Sekolah Asal </Text>
        <TextInput placeholder="Sekolah Asal" 
        style={styles.TextInput}/>
        <Text style={styles.Text}> Jurusan </Text>
        <TextInput placeholder="Jurusan" 
        style={styles.TextInput}/>
        <Text style={styles.Text}> Nilai Ijazah </Text>
        <TextInput placeholder="Nilai Ijazah" 
        style={styles.TextInput}/>

              <TouchableOpacity style={styles.buttonContainer} onPress={createTwoButtonAlert}>
                <Text style={{color:'#009BB9',fontWeight: 'bold',fontSize:18,fontFamily: 'Tahoma'}}>SAVE</Text>  
              </TouchableOpacity>
              </ScrollView>
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
  );
};
const styles = StyleSheet.create({
    header:{
        backgroundColor: "#009BB9",
        height:50,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent:'center',
      },
      headerText:{
        color:"#FFFFFF",
        fontSize: 18,
        fontWeight: 'bold',
      },
      Text:{
        color:"#009BB9",
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 20,
      },
      TextInput:{
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        marginLeft: 20,
        width:375,
        borderRadius: 10,
        backgroundColor: "white",
      },
      buttonContainer: {
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        marginLeft: 20,
        width:375,
        borderRadius: 10,
        backgroundColor: "white",
      },
});

export default Edit;