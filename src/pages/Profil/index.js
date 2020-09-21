// import React from 'react';
// import { Text, View, Image,ImageBackground,StyleSheet} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import NavbarIcon from '../../components/molecules/NavBarIcon';


// const TataTertib=({navigation,onPress}) => {
//     const handleGoTo = screen => {
//       navigation.navigate(screen);
//     };
//     return(
//         <View style={{flex: 1}}>
//                   <ImageBackground source={require('../../assets/background/2.png')}  style={styles.backgroundImage}>
//             <View style={{flex: 1}}>
//                 <TouchableOpacity onPress={() => handleGoTo('Homes')}>
//                     <Image source={require('../../assets/icon/backicon.png')}/>
//                 </TouchableOpacity>
//             </View>
//             <Text>Profil</Text>
//             <View style={{marginVertical: 20}}>
//                 <View style={{height: 50, flexDirection: 'row', backgroundColor: 'white', marginVertical: -20}}>
//                     <TouchableOpacity onPress={() => handleGoTo('Homes')}> 
//                         <Image style={{width: 26, height: 26, marginHorizontal: 50}} source={require('../../assets/icon/home.png')} />
//                             <Text style={{fontSize: 10, color: '#545454', marginTop: 4, textAlign: 'center',color: '#78d4e1'}}>Home</Text>  
//                     </TouchableOpacity>
//                     <TouchableOpacity onPress={() => handleGoTo('Profil')}>
//                         <Image style={{width: 26, height: 26, marginHorizontal: 50}} source={require('../../assets/icon/account.png')} />
//                             <Text style={{fontSize: 10, color: '#545454', marginTop: 4, textAlign: 'center' ,color: '#78d4e1'}}>Profil</Text>  
//                     </TouchableOpacity>
//                     <TouchableOpacity onPress={() => handleGoTo('More')}>
//                         <Image style={{width: 26, height: 26, marginHorizontal: 50}} source={require('../../assets/icon/More1.png')} />
//                             <Text style={{fontSize: 10, color: '#545454', marginTop: 4, textAlign: 'center' ,color: '#78d4e1'}}>More</Text>  
//                     </TouchableOpacity>
//             </View>
//             </View>
//             </ImageBackground>
//         </View>    
//     )
// }

// export default TataTertib;

// const styles = StyleSheet.create({
//     backgroundImage:{
//         width: 420,
//         height: 750, 
//     },
// });



import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from 'react-native';
const Profil=({navigation,onPress}) => {
  const handleGoTo = screen => {
    navigation.navigate(screen);
  };

    return (
      <View style={styles.container}>
           <ImageBackground source={require('../../assets/background/2.png')}  style={styles.backgroundImage}>
           <ScrollView>
          <View style={styles.header}>
{/* =====================================================================================Back Navigator======================================================================= */}            
               <View style={{flex: 1}}>
         <TouchableOpacity onPress={() => handleGoTo('Homes')}>
                     <Image source={require('../../assets/icon/backicon.png')}/>
                 </TouchableOpacity>
             </View>
{/* =====================================================================================Avatar/Foto======================================================================= */}      
          </View>
          <Image style={styles.avatar} source={require('../../assets/dummy/Fazrin.jpg')} />
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Fazrin Zaenudin</Text>
              <Text style={styles.info}>BANTEN</Text>
{/* =====================================================================================BUtton EDIT======================================================================= */}   
              <TouchableOpacity style={styles.buttonContainer} onPress={() => handleGoTo('Edit')}>
                <Text style={{color:'white',fontWeight: 'bold',fontSize:18,fontFamily: 'Tahoma'}}>Edit Profil</Text>  
              </TouchableOpacity>
{/* =====================================================================================BiodataPribadi======================================================================= */}
              <TouchableOpacity style={styles.buttonContainer2}>
{/* ===================================================================Nama============================================================== */}
                  <Text  style={{position:'absolute',left: 25,top: 2,fontSize:16,color: "white",marginTop:10,textAlign: 'center', fontSize: 16, fontWeight:'bold'}}>A.DATA PRIBADI</Text>
                          <Text  style={{position:'absolute',left: 25,top: 30,fontSize:16,color: "white",marginTop:10,textAlign: 'center', fontSize: 12, fontWeight:'bold'}}>1.Nama</Text>
                          <Text  style={{position:'absolute',left: 130,top: 30,fontSize:16,color: "white",marginTop:10,textAlign: 'center',fontSize: 12, fontWeight:'bold'}}>:</Text>   
                          <Text  style={{position:'absolute',left: 150,top: 30,fontSize:16,color: "white",marginTop:10,textAlign: 'center',fontSize: 12, fontWeight:'bold'}}>Fazrin Zaenudin</Text>
{/* ===================================================================Tempat Lahir============================================================== */}
                          <Text  style={{position:'absolute',left: 25,top: 50,fontSize:16,color: "white",marginTop:10,textAlign: 'center',fontSize: 12, fontWeight:'bold'}}>2.Tempat Lahir</Text>
                          <Text  style={{position:'absolute',left: 130,top: 50,fontSize:16,color: "white",marginTop:10,textAlign: 'center',fontSize: 12, fontWeight:'bold'}}>:</Text>   
                          <Text  style={{position:'absolute',left: 150,top: 50,fontSize:16,color: "white",marginTop:10,textAlign: 'center',fontSize: 12, fontWeight:'bold'}}>Tangerang</Text> 
{/* ===================================================================Tanggal Lahir============================================================== */}
                          <Text  style={{position:'absolute',left: 25,top: 70,fontSize:16,color: "white",marginTop:10,textAlign: 'center',fontSize: 12, fontWeight:'bold'}}>3.Tanggal Lahir</Text>
                          <Text  style={{position:'absolute',left: 130,top: 70,fontSize:16,color: "white",marginTop:10,textAlign: 'center',fontSize: 12, fontWeight:'bold'}}>:</Text>   
                          <Text  style={{position:'absolute',left: 150,top: 70,fontSize:16,color: "white",marginTop:10,textAlign: 'center',fontSize: 12, fontWeight:'bold'}}>13 Juni 1999</Text>
{/* ===================================================================Alamat============================================================== */}
                          <Text  style={{position:'absolute',left: 25,top: 90,fontSize:16,color: "white",marginTop:10,textAlign: 'center',fontSize: 12, fontWeight:'bold'}}>4.Alamat</Text>
                          <Text  style={{position:'absolute',left: 130,top: 90,fontSize:16,color: "white",marginTop:10,textAlign: 'center',fontSize: 12, fontWeight:'bold'}}>:</Text>   
                          <Text  style={{position:'absolute',left: 150,top: 90,fontSize:16,color: "white",marginTop:10,textAlign: 'center',fontSize: 12, fontWeight:'bold'}}>Perum Bukit Gading Cisoka,</Text>
                          <Text  style={{position:'absolute',left: 150,top: 110,fontSize:16,color: "white",marginTop:10,textAlign: 'center',fontSize: 12, fontWeight:'bold'}}>Kec. Cisoka Tangerang -Banten</Text>
{/* ===================================================================No HP============================================================== */}
                          <Text  style={{position:'absolute',left: 25,top: 130,fontSize:16,color: "white",marginTop:10,textAlign: 'center',fontSize: 12, fontWeight:'bold'}}>5. No HP (WA)</Text>
                          <Text  style={{position:'absolute',left: 130,top: 130,fontSize:16,color: "white",marginTop:10,textAlign: 'center',fontSize: 12, fontWeight:'bold'}}>:</Text>   
                          <Text  style={{position:'absolute',left: 150,top: 130,fontSize:16,color: "white",marginTop:10,textAlign: 'center',fontSize: 12, fontWeight:'bold'}}>(0858) 9140-8332</Text>
{/* ===================================================================EMail============================================================== */}
                          <Text  style={{position:'absolute',left: 25,top: 150,fontSize:16,color: "white",marginTop:10,textAlign: 'center',fontSize: 12, fontWeight:'bold'}}>6. Email</Text>
                          <Text  style={{position:'absolute',left: 130,top: 150,fontSize:16,color: "white",marginTop:10,textAlign: 'center',fontSize: 12, fontWeight:'bold'}}>:</Text>   
                          <Text  style={{position:'absolute',left: 150,top: 150,fontSize:16,color: "white",marginTop:10,textAlign: 'center',fontSize: 12, fontWeight:'bold'}}>ajin29988@gmail.com</Text>  
{/* ===================================================================Jenis Kelamin============================================================== */}
                          <Text  style={{position:'absolute',left: 25,top: 170,fontSize:16,color: "white",marginTop:10,textAlign: 'center',fontSize: 12, fontWeight:'bold'}}>6.Jenis Kelamin</Text>
                          <Text  style={{position:'absolute',left: 130,top: 170,fontSize:16,color: "white",marginTop:10,textAlign: 'center',fontSize: 12, fontWeight:'bold'}}>:</Text>   
                          <Text  style={{position:'absolute',left: 150,top: 170,fontSize:16,color: "white",marginTop:10,textAlign: 'center',fontSize: 12, fontWeight:'bold'}}>Laki - Laki</Text>   
{/* ===================================================================Pendidikan Terakhir============================================================== */}
                          <Text  style={{position:'absolute',left: 25,top: 190,fontSize:16,color: "white",marginTop:10,textAlign: 'center',fontSize: 12, fontWeight:'bold'}}>7.Pendidikan</Text>
                          <Text  style={{position:'absolute',left: 130,top: 190,fontSize:16,color: "white",marginTop:10,textAlign: 'center',fontSize: 12, fontWeight:'bold'}}>:</Text>   
                          <Text  style={{position:'absolute',left: 150,top: 190,fontSize:16,color: "white",marginTop:10,textAlign: 'center',fontSize: 12, fontWeight:'bold'}}>SMK</Text> 
{/* ===================================================================Tahun Lulus============================================================== */}
                          <Text  style={{position:'absolute',left: 25,top: 210,fontSize:16,color: "white",marginTop:10,textAlign: 'center',fontSize: 12, fontWeight:'bold'}}>8.Tahun Lulusan</Text>
                          <Text  style={{position:'absolute',left: 130,top: 210,fontSize:16,color: "white",marginTop:10,textAlign: 'center',fontSize: 12, fontWeight:'bold'}}>:</Text>   
                          <Text  style={{position:'absolute',left: 150,top: 210,fontSize:16,color: "white",marginTop:10,textAlign: 'center',fontSize: 12, fontWeight:'bold'}}>2017</Text>
{/* ===================================================================Asal Sekolah============================================================== */}
                          <Text  style={{position:'absolute',left: 25,top: 230,fontSize:16,color: "white",marginTop:10,textAlign: 'center',fontSize: 12, fontWeight:'bold'}}>9.Asal Sekolah</Text>
                          <Text  style={{position:'absolute',left: 130,top: 230,fontSize:16,color: "white",marginTop:10,textAlign: 'center',fontSize: 12, fontWeight:'bold'}}>:</Text>   
                          <Text  style={{position:'absolute',left: 150,top: 230,fontSize:16,color: "white",marginTop:10,textAlign: 'center',fontSize: 12, fontWeight:'bold'}}>SMK Nurul Faizin</Text>
{/* ===================================================================Jurusan============================================================== */}
                          <Text  style={{position:'absolute',left: 25,top: 250,fontSize:16,color: "white",marginTop:10,textAlign: 'center',fontSize: 12, fontWeight:'bold'}}>10.Jurusan</Text>
                          <Text  style={{position:'absolute',left: 130,top: 250,fontSize:16,color: "white",marginTop:10,textAlign: 'center',fontSize: 12, fontWeight:'bold'}}>:</Text>   
                          <Text  style={{position:'absolute',left: 150,top: 250,fontSize:16,color: "white",marginTop:10,textAlign: 'center',fontSize: 12, fontWeight:'bold'}}>Multimedia</Text> 
{/* ===================================================================Rata-rata Nilai Ijazah============================================================== */}
                          <Text  style={{position:'absolute',left: 25,top: 270,fontSize:16,color: "white",marginTop:10,textAlign: 'center',fontSize: 12, fontWeight:'bold'}}>11.Nilai Ijazah</Text>
                          <Text  style={{position:'absolute',left: 130,top: 270,fontSize:16,color: "white",marginTop:10,textAlign: 'center',fontSize: 12, fontWeight:'bold'}}>:</Text>   
                          <Text  style={{position:'absolute',left: 150,top:270,fontSize:16,color: "white",marginTop:10,textAlign: 'center',fontSize: 12, fontWeight:'bold'}}>80.1</Text>                         
                  {/* <TouchableOpacity style={styles.buttonContainer3}>
                      <Text style={{color:'#009BB9',fontWeight: 'bold',fontSize:18,fontFamily: 'Tahoma'}}>Edit Profil</Text>  
                    </TouchableOpacity>  */}
              </TouchableOpacity>
{/* =====================================================================================Pengalaman======================================================================= */}
              <TouchableOpacity style={styles.buttonContainer4}>
{/* ===================================================================Nama============================================================== */}
            <Text  style={{position:'absolute',left: 25,top: 2,fontSize:16,color: "white",marginTop:10,textAlign: 'center', fontSize: 16, fontWeight:'bold'}}>B. PENGALAMAN ORGANISASI</Text>
                          <Text  style={{position:'absolute',left: 25,top: 30,fontSize:16,color: "white",marginTop:10,textAlign: 'center', fontSize: 12, fontWeight:'bold'}}>1.Ikatan Santri Pondok Pesantren Nurul Faizin (ISP2-NF)</Text>
{/* ===================================================================Tempat Lahir============================================================== */}
                          <Text  style={{position:'absolute',left: 25,top: 50,fontSize:16,color: "white",marginTop:10,textAlign: 'center',fontSize: 12, fontWeight:'bold'}}>2.Alumni Pondok Pesantren Nurul Faizin (IKA-NF) </Text>
{/* ===================================================================Tanggal Lahir============================================================== */}
                          <Text  style={{position:'absolute',left: 25,top: 70,fontSize:16,color: "white",marginTop:10,textAlign: 'center',fontSize: 12, fontWeight:'bold'}}>3.Himpunan Mahasiswa Islam</Text>
{/* ===================================================================Nama============================================================== */}
                          <Text  style={{position:'absolute',left: 25,top: 90,fontSize:16,color: "white",marginTop:10,textAlign: 'center',fontSize: 12, fontWeight:'bold'}}>4.Ikanatan Mahasisswa Lebak</Text>
{/* ===================================================================Tempat Lahir============================================================== */}

              </TouchableOpacity>
            </View>
            </View>
            </ScrollView>
{/* =====================================================================================Navbar======================================================================= */}
             <View style={{marginVertical: 25}}>
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
    );
  }

export default Profil;
const styles = StyleSheet.create({
  header:{
    backgroundColor: "#009BB9",
    height:150,
  },
  backgroundImage:{
    width: 435,
    height: 785, 
},
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:80
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#009BB9",
    marginTop:10,
    fontWeight:"bold"
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  description2:{
    position:'absolute',
    left: 25,
    top: 10,
    fontSize:16,
    color: "white",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#009BB9",
  },
  buttonContainer2: {
    marginTop:10,
    height:310,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom:20,
    width:370,
    borderRadius:5,
    backgroundColor: "#009BB9",
  },
  buttonContainer3: {
    marginTop:270,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "white",
  },
  buttonContainer4: {
    marginTop:10,
    height:170,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom:20,
    width:370,
    borderRadius:5,
    backgroundColor: "#009BB9",
  },
});

             