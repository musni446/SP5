import React from 'react';
import { Text, View, Image,ImageBackground,StyleSheet,FlatList,TouchableHighlight} from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import NavbarIcon from '../../components/molecules/NavBarIcon';


const TataTertib=({navigation,onPress}) => {
    const handleGoTo = screen => {
      navigation.navigate(screen);
    };
    return(
        
        <View style={{flex: 1}}>
                  <ImageBackground source={require('../../assets/background/2.png')}  style={styles.backgroundImage}>
                  <ScrollView>
            <View style={{flex: 1}}>
                <TouchableOpacity onPress={() => handleGoTo('Homes')}>
                    <Image source={require('../../assets/icon/backicon.png')}/>
                </TouchableOpacity>
            </View>
                <View>
                    <View>
                        <Text style={styles.news2}>Seputar Programmer</Text>
                    </View>
                    <View style={{paddingTop: 15, paddingHorizontal: 16}}>
                        <View style={{position: 'relative'}}>
                            <Image source={require('../../assets/dummy/sp5.png')} style={{height: 170, width: '100%', borderRadius: 6 }}/>
                        <View style={{paddingTop: 15, width: '100%', height: 170, position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.10, borderRadius: 6}}></View>
                        <View style={{height: 15, width: 55, position: 'absolute', top: 10, left: 16 }}>
                            <Image source={require('../../assets/logo/nf-computer.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />
                        </View>
                        <View style={{height: 15, width: 55, position: 'absolute', top: 10, right: 16 }}>
                            <Image source={require('../../assets/logo/ybm-logo.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}}/>
                        </View>
                    </View>
                    <TouchableHighlight style={{backgroundColor: '#FFFFFF', paddingHorizontal: 10, paddingVertical: 9, alignSelf: 'flex-end', borderRadius: 4}} >
                    <View style={{paddingTop: 15, paddingHorizontal: 10, borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginBottom: 20}}>
                        <Text style={{fontSize: 14, fontWeight: 'bold', color: '#009bb9'}}>Opening Sekolah Programmer Batch 5</Text>
                        <Text style={{fontSize: 12, fontWeight: 'normal', color: '#7A7A7A', marginBottom: 11, alignItems:'stretch', textAlign:'justify'}}>YBM PLN dan NURUL FIKRI Memulai Kembali 
                        Membuka Sekolah Programmer Batch 5
                        Cisarua -- Saat ini Indonesia sudah masuk ke Industri 4.0 dengan ditandainya perkembangan teknologi informasi dan pengguna internet serta medsos yang sangat besar. 
                        Efek dari perkembangan internet itu mengakibatkan interaksi manusia dalam bidang ekonomi juga mengalami perubahan. Perubahan 
                        tersebut menimbulkan efek positif dengan makin berkembangnya peluang kerja dan usaha. Start-up dan perusahaan yang berkembang maupun yang sudah maju membutuhkan banyak 
                        programmer untuk pembuatan aplikasi berbasis web dan mobile.</Text>
                        <Text style={{fontSize: 12, fontWeight: 'normal', color: '#7A7A7A', marginBottom: 11}}>Dengan mepertimbangkan fakta tersebut, Yayasan Baitul Maal PLN (YBM PLN) bekerja sama 
                        dengan Lembaga Pendidikan dan Pengembangan Profesi Nurul Fikri (NF Computer) membuat program pelatihan Sekolah Programmer angkatan ke-5 selama tiga bulan, 
                        Juli-September 2020. Materi pelatihan adalah Full Stack Mobile Developer dengan bahasa pemrograman JavaScript, Node JS, Express JS, dan React Native. 
                        Peserta pelatihan Sekolah Programmer angkatan ke-5 ini berasal dari 9 provinsi yaitu DKI Jakarta, Jawa Barat, Yogyakarta, Kalimantan Barat, Banten, Sumatera Utara, 
                        Sumatera Selatan, NTB, dan Aceh, dengan jumlah peserta 25 orang.</Text>
                        <Text style={{fontSize: 12, fontWeight: 'normal', color: '#7A7A7A', marginBottom: 11}}>Pelatihan yang dibuka secara resmi oleh Ketua III YBM PLN Herry Hasanudin di 
                        Masjid Nurul Ilmi Pondok Tahfizh Preneur Cisarua Bogor pada hari selasa 30 Juni 2020 itu merupakan sekolah pemrograman berbasis pesantren.  “Ini diklat pertama 
                        yang dilaksanakan dengan mengikuti protokol kesehatan di masa pandemi,” ungkap Herry Hasanudin dalam acara sambutan. Lebih lanjut Pak Herry mengungkapkan harapannya 
                        agar para alumni dari sekolah programmer dapat menjadi profesional dan volunteer relawan digital masa kini.</Text>
                        <Text style={{fontSize: 12, fontWeight: 'normal', color: '#7A7A7A', marginBottom: 11}}>Rusmanto selaku perwakilan NF Computer menambahkan bahwa skill di bidang pemrograman 
                        mobile saat ini sangat dibutuhkan di dunia kerja dan industri.  Peserta Sekolah Programmer Batch 5 ini diberikan pendalaman 
                        materi pemrograman aplikasi web, database, dan seluler, sehingga para peserta yang selesai menjalani pelatihan diharapkan dapat menjadi programmer yang ahli 
                        dalam pengembangan aplikasi web, Android, dan lain-lain.</Text>
                </View>
                </TouchableHighlight>
            </View>
        </View>
        </ScrollView>
            <View style={{marginVertical: 20}}>
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
    news2: {
        height: 30,
        backgroundColor: '#00000000',
        marginTop: 20,
        marginLeft: 10,
        paddingTop: 10,
        textAlign: 'left',
        color: '#009bb9',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: '',
    },
});
