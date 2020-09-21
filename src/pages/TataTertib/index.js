import React from 'react';
import { Text, View, Image,ImageBackground,StyleSheet,ScrollView,Modal,Button,TouchableHighlight} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TataTertib=({navigation,onPress}) => {
    const handleGoTo = screen => {
      navigation.navigate(screen);
    };
    return(
//  ============================================Back Navigator====================================== 
        <View style={{flex: 1}}>
                  <ImageBackground source={require('../../assets/background/2.png')}  style={styles.backgroundImage}>
                  <ScrollView>
            <View style={{flex: 1}}>
                <TouchableOpacity onPress={() => handleGoTo('Homes')}>
                    <Image source={require('../../assets/icon/backicon.png')}/>
                </TouchableOpacity>
            </View>
{/* ============================================ Text ====================================== */}
<TouchableHighlight style={styles.buttonContainer2}>
        <View>
            <Text  style={{left: 15,top: 2,fontSize:14,color: "black",marginTop:20,textAlign: 'center',  fontWeight:'bold'}}>JADWAL KEGIATAN</Text>
            <Text  style={{left: 10,top: 2,fontSize:14,color: "black",marginTop:3,textAlign: 'center',  fontWeight:'bold'}}>SEKOLAH PROGRAMMER</Text>
{/* ============================================ Ketentuan Umum ====================================== */}
            <Text  style={{left: 10,top: 2,fontSize:12,color: "black",marginTop:10,textAlign: 'justify',  fontWeight:'bold'}}>1. KETENTUAN UMUM</Text>
            <View>
                <Text  style={styles.Text}>Ketentuan Umum Merupakan Aturan yang berlaku bagi seluruh Warga 
                Asrama sekolah Programmer YBM PLN yang bekerjasama dengan Nurul Fikri Computer: </Text>
                <Text  style={styles.Text}>a.	Mengikuti Peraturan yang sudah disepakati.</Text>
                <Text  style={styles.Text}>b.	Menjaga nama baik asrama sekolah programmer.</Text>
                <Text  style={styles.Text}>c.	Wajib sholat berjamaah di masjid</Text>
                <Text  style={styles.Text}>d.	Peserta wajib menyampaikan ide maupun gagasan dalam setiap forum diskusi/rapat warga asrama.</Text>
                <Text  style={styles.Text}>e.	Wajib 5S+1D (Senyum, Salam,Sapa,Sopan,Santun dan Disiplin) Sesama Warga asrama dan warga lingkungan sekirat asrama.</Text>
                <Text  style={styles.Text}>f.	Batas waktu berada diluar asrama hingga pukul 22.00</Text>
                <Text  style={styles.Text}>g.	Wajib mengikuti seluruh kegiatan yang diadakan asrama</Text>
                <Text  style={styles.Text}>h.	Wajib menjaga kebersihan, kerapihan, keindahan, serta keamanan asrama.</Text>
                <Text  style={styles.Text}>i.	Menjaga hubungan baik sesama asrama.</Text>
                <Text  style={styles.Text}>j.	Penghuni wajib saling manjaga, menghormati, dan menghargai sertamenciptakan rasa saling tenggang rasa dengan teman sekamar,penghuni lainnya.</Text>
                <Text  style={styles.Text}>k.	Warga asrama yang izin keluar asrama wajib izi kepada ketua asrama dan supervisor asrama welat lisan dan mengisi buku perizinan/form izin.</Text>
            </View>
{/* ============================================ Ketentuan Khusus ====================================== */}
            <Text  style={{left: 10,top: 2,fontSize:12,color: "black",marginTop:10,textAlign: 'justify',  fontWeight:'bold'}}>2. KETENTUAN KHUSUS</Text>
            <View>
                <Text  style={styles.Text}>Warga asrama tidak diperkenankan: </Text>
                <Text  style={styles.Text}>a. Mengubah & Merusak kamar hunian (mencat kamar, mengeluarkan fasilitas kamar,menempel asesoris/gambar/poster pada dinding maupun furniture yang ada di dalam kamar, dll)</Text>
                <Text  style={styles.Text}>b. Menggunakan barang orang lain tanpa seizin pemiliknya</Text>
                <Text  style={styles.Text}>c. Berpindah kamar tanpa seijin pengelola Asrama</Text>
                <Text  style={styles.Text}>d.	Meninggalkan forum / kegiatan tanpa izin.</Text>
                <Text  style={styles.Text}>e. Menggunakan celana pendek dan atau baju/t-shirt tanpa lengan ketika keluar kamar dan atau menerima tamu</Text>
                <Text  style={styles.Text}>f. Membawa alat musik yang menggunakan listrik dan menimbulkan suara yang sangat bising</Text>
                <Text  style={styles.Text}>g. Menyimpan dan atau membawa senjata tajam dalam bentuk apapun</Text>
                <Text  style={styles.Text}>h. Menyimpan, mengkonsumsi dan atau mengedarkan minuman keras (beralkohol), obat-obatan berbahaya atau psikotropika</Text>
                <Text  style={styles.Text}>i. Melakukan hal-hal yang berbahaya untuk diri sendiri dan orang lain.</Text>
                <Text  style={styles.Text}>j. Berbicara keras atau membuat gaduh yang mengganggu ketenangan penghuni lainnya</Text>
            </View>
{/* ============================================ Fasilitas Asrama ====================================== */}
            <Text  style={{left: 10,top: 2,fontSize:12,color: "black",marginTop:10,textAlign: 'justify',  fontWeight:'bold'}}>3. FASILITAS ASRAMA</Text>
            <View>
                <Text  style={styles.Text}>a. Komputer hanya dipergunakan untuk hal-hal yang penting saja dan sesuai keperluan.</Text>
                <Text  style={styles.Text}>b. Memadamkan lampu kamar, AC, saat keluar atau bepergian.</Text>
                <Text  style={styles.Text}>c. Warga asrama wajib mengganti inventaris asrama yang sengaja dirusak atau dihilangkan</Text>
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
          height:1200,
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