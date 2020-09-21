import React, { Component } from "react";
import { View, Text, StyleSheet, Picker, TouchableHighlight, ScrollView, ImageBackground,TouchableOpacity,Image} from "react-native";
import DatePicker from 'react-native-datepicker';
import { TextInput } from "react-native-gesture-handler";
import Loading from 'react-native-whc-loading';


class absen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datapembimbing: ['Pak Yadi', 'Pak Nasrul','Pak Arip','Pak Hilmy'],
      datakegiatan: ['Tahajud', 'Witir', 'Tilawah Quran', 'Qobliyah Subuh', 'Infaq Shodaqoh'],
      formData: {
        tanggal: null,
        surat: '',
        ayat:'',
        pembimbing: '',
      }
    };
  }

  render() {

    const { tanggal, surat,ayat, pembimbing } = this.state.formData
    return (
      <View style={{ flex:2}}>
        <ImageBackground source={require('../../assets/background/2.png')} style={styles.backgroundImage}>
                
        <View >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Homes')}>
                    <Image source={require('../../assets/icon/backicon.png')}/>
                </TouchableOpacity>
              <Text  style={styles.header} >Catatan Tahfidz</Text>
              <Text style={styles.textisi}>Tanggal</Text>
              <DatePicker
                style={{ width: '90%',marginLeft: 13 }}
                // date={this.state.date}
                mode="date"
                placeholder="Pilih Tanggal"
                format="DD-MM-YYYY"
                minDate="01-06-2020"
                maxDate="01-10-2020"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    right: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 20
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={tanggal => {
                  this.setState(prevState => ({
                    formData: {
                      ...prevState.formData,
                      tanggal
                    }
                  }))
                }}
              />
            </View>
            <View style={{ marginTop: 9 }}>
              <Text style={styles.textisi}>Surat</Text>
              <TextInput
                style={{ borderWidth: 1, height: 40, width: 370, marginLeft: 35 }}
                onChangeText={surat =>
                  this.setState(prevState => ({
                    formData: {
                      ...prevState.formData,
                      surat
                    }
                  }))
                }
                value={surat}
              >

              </TextInput>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.textisi}>Ayat</Text>
              <TextInput
                style={{ borderWidth: 1, height: 40, width: 370, marginLeft: 35 }}
                onChangeText={ayat =>
                  this.setState(prevState => ({
                    formData: {
                      ...prevState.formData,
                      ayat
                    }
                  }))
                }
                value={ayat}
              >

              </TextInput>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.textisi}>Pembimbing</Text>
              <TextInput
                style={{ borderWidth: 1, height: 40, width: 370, marginLeft: 35 }}
                onChangeText={pembimbing =>
                  this.setState(prevState => ({
                    formData: {
                      ...prevState.formData,
                      pembimbing
                     }
                  }))
                }
                value={pembimbing}
              >

              </TextInput>
            </View>
            <View style={{ marginTop: 50 }}>
              <TouchableHighlight
                onPress={this._saveData}
                style={{ padding: 10, alignItems: 'center', backgroundColor: "#009BB9", width: 350, marginHorizontal: 50 }}>
                <Text style={{ fontSize: 20, color: "white" }}>SIMPAN</Text>
              </TouchableHighlight>
            </View>
            <View style={{marginVertical:270}}>
    <View style={{height: 50, flexDirection: 'row', backgroundColor: 'white', marginVertical: -20}}>
    <TouchableOpacity onPress={() => this.props.navigation.navigate('Homes')}> 
             <Image style={{width: 26, height: 26, marginHorizontal: 55}} source={require('../../assets/icon/home.png')} />
                 <Text style={{fontSize: 10, color: '#545454', marginTop: 4, textAlign: 'center',color: '#78d4e1'}}>Home</Text>  
         </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Profil')}>
             <Image style={{width: 26, height: 26, marginHorizontal: 55}} source={require('../../assets/icon/account.png')} />
                 <Text style={{fontSize: 10, color: '#545454', marginTop: 4, textAlign: 'center' ,color: '#78d4e1'}}>Profil</Text>  
        </TouchableOpacity>
         <TouchableOpacity onPress={() => this.props.navigation.navigate('More')}>
             <Image style={{width: 26, height: 26, marginHorizontal: 55}} source={require('../../assets/icon/More1.png')} />
                <Text style={{fontSize: 10, color: '#545454', marginTop: 4, textAlign: 'center' ,color: '#78d4e1'}}>More</Text>  
         </TouchableOpacity>           
</View>
</View>
        </ImageBackground>
        <Loading ref="loading" />
      </View>
    );
  }
  _saveData = async () => {
    this.refs.loading.show();
    try {
      await fetch('http://192.168.43.188/absensisp/tahfidz.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.formData)
      })
        .then(response => response.text())
        .then(responseJson => {
          setTimeout(() => {
            this.refs.loading.close();
            alert('Terima Kasih Telah Mengisi Catatan Tahfidz');
          }, 2000);
        })
        .catch((error) => {
          this.refs.loading.close();
          console.error(error);
        });
    } catch (error) {
      this.refs.loading.close();
      alert(error)
    }

  };
}



export default absen;

const styles = StyleSheet.create({
  head: {
    height: 25,
    backgroundColor: 'white',
  },
  row: {
    marginBottom: 20
  },
  texthead: {
    margin: 2,
    textAlign: "center",
    fontSize: 16,
    color: '#009BB9',
    fontWeight: "bold",
  },
  textisi: {
    marginTop: 10,
    marginLeft: 35,
    textAlign: "left",
    fontSize: 14,
    color: 'black',
    
    fontWeight: "bold"
  },
  header: {
    width: 200,
    color: 'black',
    height: 48,
    left: 130,
    fontSize: 24,
    fontWeight: "bold"
  },
  image: {
  },
  backgroundImage:{
    width: 435,
    height: 785, 
},
});