import React from 'react';
import { Text, View, Image,ImageBackground,StyleSheet,ScrollView,Modal,Button,TouchableHighlight} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TataTertib=({navigation,onPress}) => {
    const handleGoTo = screen => {
      navigation.navigate(screen);
    };
    return(
//  ============================================ Pages====================================== 
        <View style={{flex: 1}}>
                  <ImageBackground source={require('../../assets/background/2.png')}  style={styles.backgroundImage}>
                  <ScrollView>
            <View style={{flex: 1}}>
                <TouchableOpacity onPress={() => handleGoTo('Homes')}>
                    <Image source={require('../../assets/icon/backicon.png')}/>
                </TouchableOpacity>
            </View>
{/* ============================================ Jadwal Kegiatan====================================== */}
<TouchableHighlight style={styles.buttonContainer2}>
<View>
<Text  style={{left: 70,top: 2,fontSize:14,color: "black",marginTop:20,textAlign: 'center',  fontWeight:'bold'}}>JADWAL KEGIATAN</Text>
<Text  style={{left: 70,top: 2,fontSize:14,color: "black",marginTop:3,textAlign: 'center',  fontWeight:'bold'}}>SEKOLAH PROGRAMMER</Text>
{/* ======================================Senin=============================================== */}
<Text  style={{left: 10,top: 2,fontSize:12,color: "black",marginTop:10,textAlign: 'justify',  fontWeight:'bold'}}>Senin - Jum'at</Text>
<View>
    <Text  style={{position:"absolute",left: 20,top: 5,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>03.30 - 03.45</Text>
    <Text  style={{position:"absolute",left: 100,top: 5,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{left: 110,top: 5,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Bangun tidur dan Persiapan Sholat Subuh</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 5,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>03.45 - 05.00</Text>
    <Text  style={{position:"absolute",left: 100,top: 5,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 5,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Shalat Lail, Subuh</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 25,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>05.00 - 06.20</Text>
    <Text  style={{position:"absolute",left: 100,top: 25,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 25,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Kegiatan Tahfidz(setoran wajib)</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 45,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>06.20 - 07.00 </Text>
    <Text  style={{position:"absolute",left: 100,top: 45,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 45,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Sarapan pagi, MCK dan persiapan KBM</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 65,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>07.00 - 07.30</Text>
    <Text  style={{position:"absolute",left: 100,top: 65,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 65,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Muhadatsah</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 85,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>07.30 - 11.45</Text>
    <Text  style={{position:"absolute",left: 100,top: 85,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 85,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Kegiatan Belajar Sekolah Programmer</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 105,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>11.50 - 12.10</Text>
    <Text  style={{position:"absolute",left: 100,top: 105,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 105,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Shalat Dzuhur Berjamaah</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 125,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>12.10 - 12.50</Text>
    <Text  style={{position:"absolute",left: 100,top: 125,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 125,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Makan Siang</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 145,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>12.50 - 14.10</Text>
    <Text  style={{position:"absolute",left: 100,top: 145,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 145,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Kegiatan Belajar Sekolah Programmer</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 165,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>14.10 - 15.15</Text>
    <Text  style={{position:"absolute",left: 100,top: 165,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 165,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Kegiatan Belajar Sekolah Programmer</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 185,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>15.15 - 15.30 </Text>
    <Text  style={{position:"absolute",left: 100,top: 185,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 185,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Persiapan Shalat Ashar</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 205,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>15.30 - 15.50</Text>
    <Text  style={{position:"absolute",left: 100,top: 205,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 205,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Shalat Berjamaah,Kultum,Al Maatsurat</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 225,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>15.50 - 16.00 </Text>
    <Text  style={{position:"absolute",left: 100,top: 225,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 225,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Murojaah</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 245,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>16.00 - 17.30</Text>
    <Text  style={{position:"absolute",left: 100,top: 245,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 245,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Persiapan Shalat Maghrib</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 265,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>17.30 - 18.00</Text>
    <Text  style={{position:"absolute",left: 100,top: 265,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 265,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Shalat Maghrib & Murojaah</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 285,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>18.00 - 19.30</Text>
    <Text  style={{position:"absolute",left: 100,top: 285,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 285,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Shalat Isya</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 305,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>19.30 - 20.00</Text>
    <Text  style={{position:"absolute",left: 100,top: 305,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 305,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Makan Malam</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 325,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>20.00 - 20.30</Text>
    <Text  style={{position:"absolute",left: 100,top: 325,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 325,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Ngoprek/Ngoding Kegiatan Mandiri</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 345,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>20.30 - 22.30</Text>
    <Text  style={{position:"absolute",left: 100,top: 345,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 345,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Belajar Mandiri</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 365,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>22.30 - 03.30 </Text>
    <Text  style={{position:"absolute",left: 100,top: 365,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 365,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Istirahat(tidur malam)</Text>
</View>

{/* ======================================sabtu=============================================== */}
<Text  style={{left: 10,top: 380,fontSize:12,color: "black",marginTop:10,textAlign: 'justify',  fontWeight:'bold'}}>Sabtu</Text>
<View>
    <Text  style={{position:"absolute",left: 20,top: 385,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>03.30 - 03.45</Text>
    <Text  style={{position:"absolute",left: 100,top: 385,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 385,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Bangun tidur dan Persiapan Sholat Subuh</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 405,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>03.45 - 05.00</Text>
    <Text  style={{position:"absolute",left: 100,top: 405,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 405,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Shalat Lail, Subuh</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 425,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>05.00 - 06.20</Text>
    <Text  style={{position:"absolute",left: 100,top: 425,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 425,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Kegiatan Tahfidz(setoran wajib)</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 445,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>06.20 - 07.00 </Text>
    <Text  style={{position:"absolute",left: 100,top: 445,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 445,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Sarapan pagi, MCK dan persiapan KBM</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 465,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>07.00 - 07.30</Text>
    <Text  style={{position:"absolute",left: 100,top: 465,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 465,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Muhadatsah</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 485,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>07.30 - 11.45</Text>
    <Text  style={{position:"absolute",left: 100,top: 485,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 485,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Kegiatan Belajar Sekolah Programmer</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 505,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>11.50 - 12.10</Text>
    <Text  style={{position:"absolute",left: 100,top: 505,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 505,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Shalat Dzuhur Berjamaah</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 525,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>12.10 - 12.50</Text>
    <Text  style={{position:"absolute",left: 100,top: 525,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 525,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Makan Siang</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 545,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>12.50 - 14.10</Text>
    <Text  style={{position:"absolute",left: 100,top: 545,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 545,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Kegiatan Belajar Sekolah Programmer</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 565,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>14.10 - 15.15</Text>
    <Text  style={{position:"absolute",left: 100,top: 565,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 565,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Kegiatan Belajar Sekolah Programmer</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 585,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>15.15 - 15.30 </Text>
    <Text  style={{position:"absolute",left: 100,top: 585,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 585,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Persiapan Shalat Ashar</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 605,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>15.30 - 15.50</Text>
    <Text  style={{position:"absolute",left: 100,top: 605,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 605,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Shalat Berjamaah,Kultum,Al Maatsurat</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 625,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>15.50 - 16.00 </Text>
    <Text  style={{position:"absolute",left: 100,top: 625,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 625,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Murojaah</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 645,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>16.00 - 17.30</Text>
    <Text  style={{position:"absolute",left: 100,top: 645,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 645,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Persiapan Shalat Maghrib</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 665,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>17.30 - 18.00</Text>
    <Text  style={{position:"absolute",left: 100,top: 665,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 665,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Shalat Maghrib & Murojaah</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 685,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>18.00 - 19.30</Text>
    <Text  style={{position:"absolute",left: 100,top: 685,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 685,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Shalat Isya</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 705,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>19.30 - 20.00</Text>
    <Text  style={{position:"absolute",left: 100,top: 705,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 705,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Makan Malam</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 725,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>20.00 - 20.30</Text>
    <Text  style={{position:"absolute",left: 100,top: 725,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 725,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Ngoprek/Ngoding Kegiatan Mandiri</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 745,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>20.30 - 22.30</Text>
    <Text  style={{position:"absolute",left: 100,top: 745,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 745,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Belajar Mandiri</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 765,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>22.30 - 03.30 </Text>
    <Text  style={{position:"absolute",left: 100,top: 765,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 765,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Istirahat(tidur malam)</Text>
</View>


{/* ======================================Minggu=============================================== */}
<Text  style={{left: 10,top: 780,fontSize:12,color: "black",marginTop:10,textAlign: 'justify',  fontWeight:'bold'}}>Minggu</Text>
<View>
    <Text  style={{position:"absolute",left: 20,top: 785,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>03.30 - 03.45</Text>
    <Text  style={{position:"absolute",left: 100,top: 785,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 785,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Bangun tidur dan Persiapan Sholat Subuh</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 805,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>03.45 - 05.00</Text>
    <Text  style={{position:"absolute",left: 100,top: 805,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 805,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Shalat Lail, Subuh</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 825,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>05.00 - 06.20</Text>
    <Text  style={{position:"absolute",left: 100,top: 825,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 825,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Kegiatan Tahfidz(setoran wajib)</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top:845,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>06.20 - 07.00 </Text>
    <Text  style={{position:"absolute",left: 100,top: 845,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 845,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Sarapan pagi, MCK dan persiapan KBM</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 865,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>07.00 - 07.30</Text>
    <Text  style={{position:"absolute",left: 100,top: 865,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 865,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Muhadatsah</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 885,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>07.30 - 11.45</Text>
    <Text  style={{position:"absolute",left: 100,top: 885,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 885,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Kegiatan Belajar Sekolah Programmer</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 905,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>11.50 - 12.10</Text>
    <Text  style={{position:"absolute",left: 100,top: 905,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 905,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Shalat Dzuhur Berjamaah</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 925,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>12.10 - 12.50</Text>
    <Text  style={{position:"absolute",left: 100,top: 925,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 925,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Makan Siang</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 945,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>12.50 - 14.10</Text>
    <Text  style={{position:"absolute",left: 100,top: 945,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 945,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Kegiatan Belajar Sekolah Programmer</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 965,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>14.10 - 15.15</Text>
    <Text  style={{position:"absolute",left: 100,top: 965,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 965,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Kegiatan Belajar Sekolah Programmer</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 985,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>15.15 - 15.30 </Text>
    <Text  style={{position:"absolute",left: 100,top: 985,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 985,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Persiapan Shalat Ashar</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 1005,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>15.30 - 15.50</Text>
    <Text  style={{position:"absolute",left: 100,top: 1005,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 1005,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Shalat Berjamaah,Kultum,Al Maatsurat</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 1025,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>15.50 - 16.00 </Text>
    <Text  style={{position:"absolute",left: 100,top: 1025,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 1025,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Murojaah</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 1045,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>16.00 - 17.30</Text>
    <Text  style={{position:"absolute",left: 100,top: 1045,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 1045,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Persiapan Shalat Maghrib</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 1065,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>17.30 - 18.00</Text>
    <Text  style={{position:"absolute",left: 100,top: 1065,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 1065,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Shalat Maghrib & Murojaah</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 1085,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>18.00 - 19.30</Text>
    <Text  style={{position:"absolute",left: 100,top: 1085,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 1085,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Shalat Isya</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 1105,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>19.30 - 20.00</Text>
    <Text  style={{position:"absolute",left: 100,top: 1105,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 1105,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Makan Malam</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 1125,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>20.00 - 20.30</Text>
    <Text  style={{position:"absolute",left: 100,top: 1125,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 1125,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Ngoprek/Ngoding Kegiatan Mandiri</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 1145,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>20.30 - 22.30</Text>
    <Text  style={{position:"absolute",left: 100,top: 1145,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 1145,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Belajar Mandiri</Text>
</View>
<View>
    <Text  style={{position:"absolute",left: 20,top: 1165,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>22.30 - 03.30 </Text>
    <Text  style={{position:"absolute",left: 100,top: 1165,fontSize:12,color: "black",marginTop:2,textAlign: 'center'}}>:</Text>   
    <Text  style={{position:"absolute",left: 110,top: 1165,fontSize:12,color: "black",marginTop:2,textAlign: 'justify'}}>Istirahat(tidur malam)</Text>
</View>
   </View>
      </TouchableHighlight>
</ScrollView>     
{/* ======================================Navbar=============================================== */}
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
      hari: {
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',
        width: 248,
        height: 18,
        left: 26,
      },
      image: {
          flex: 1,
          resizeMode: "cover",
          justifyContent: "center"
        },
        buttonContainer2: {
          marginTop:10,
          marginLeft: 20,
          height:1500,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          marginBottom:20,
          width:370,
          borderRadius:5,
          backgroundColor: "#F0F4F4",
        },
        Text: {
          left: 10,
          top: 2,
          fontSize:12,
          color: "black",
          marginTop:5,
          textAlign: 'justify',
          marginRight: 25
        },
});