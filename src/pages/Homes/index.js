import React, { Component } from 'react';
import { ImageBackground, ScrollView, StyleSheet, View,Text,TouchableOpacity,Image} from 'react-native';
import MainFeature from '../../components/molecules/MainFeature';
import BeritaTerkini from '../../components/molecules/BeritaTerkini';
import NavbarIcon from '../../components/molecules/NavBarIcon';
import * as firebase from 'firebase';
import { fire } from '../../config';


export default class Home extends React.Component {

    state = {
        email: "",
        displayName: "",
    };

    componentDidMount() {
        const { email, displayName } = fire.auth().currentUser;

        this.setState({ email, displayName });
    }

    

    render() {
        return(
            <View style={styles.container}>                
            <ImageBackground source={require('../../assets/background/2.png')}  style={styles.backgroundImage}>
                <ScrollView style={{flex: 1}}>
{/* ===========================================================================================NameProfil============================================================  */}
                     <View style={styles.c}>
                         <View>
        <Text style={styles.nameprofil}> {this.state.displayName}{this.state.email}</Text>
                        </View>

                        {/* <TouchableOpacity onPress={this.signOutUser}>
                            <Text style={styles.nameprofil}> Logout</Text>
                        </TouchableOpacity> */}
                    </View>
{/* ==============================================================================Main Feature(MainItems)============================================================ */}
                <View>
                    <Text style={styles.main}>Produktifitas</Text>
                </View>
                <View style={{flexDirection:'row', flexWrap: 'wrap', marginHorizontal: 50, marginVertical: 1}}>
                    <View style={{justifyContent: "space-between", flexDirection: 'row', width: '100%', marginTop: 18 }}>
                        <TouchableOpacity style={{marginLeft:27}}onPress={() => this.props.navigation.navigate("TataTertib")}>
                            <MainFeature img={require('../../assets/icon/TataTertib.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft:32}} onPress={() => this.props.navigation.navigate('JadwalKegiatan')}>  
                            <MainFeature img={require('../../assets/icon/JadwalKegiatan.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft:37}} onPress={() => this.props.navigation.navigate('AbsensiKegiatan')}> 
                             <MainFeature img={require('../../assets/icon/AbsensiKegiatan.png')}/>
                        </TouchableOpacity>
                   </View>
                    <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginTop: 18 }}>
                        <TouchableOpacity style={{marginLeft:27}} onPress={() => this.props.navigation.navigate('Tahfidz')}>
                            <MainFeature img={require('../../assets/icon/Tahfidz.png')} />
                        </TouchableOpacity>    
                        <TouchableOpacity style={{marginLeft:32}} onPress={() => this.props.navigation.navigate('Modul')}>
                            <MainFeature img={require('../../assets/icon/Modul.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft:37}} onPress={() => this.props.navigation.navigate('Perizinan')}>
                            <MainFeature img={require('../../assets/icon/Perizinan.png')}/>
                        </TouchableOpacity>
                    </View>                        
                </View>
{/* ====================================================================Berita Terkini(NewsNow)==================================================================== */}
                <View>
                        <View>
                            <Text style={styles.news}>Berita Terkini</Text>
                        </View>
                        <View style={{justifyContent: 'space-between', flexDirection: 'row',marginHorizontal: 20}}>
                            <View style={{paddingTop: 7,marginRight: 15}}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('BeritaTerkini1')}>
                                    <Image source={require('../../assets/dummy/sp-angkatan1.png')}
                                     style={{height: 80, width: 120, borderRadius: 10 }} 
                                     onPress={() => this.props.navigation.navigate('BeritaTerkini1')}/>
                                </TouchableOpacity>
                            </View>                                   
                                <View style={{paddingTop: 7, marginHorizontal: 5, width: '75%'}}>
                                    <Text style={{fontSize: 14, fontWeight: 'bold', color: '#009bb9', textAlign: 'left'}}>"Angkatan 1 Sekolah Programmer"</Text>
                                    <Text style={{fontSize: 11, color: '#7A7A7A'}}>Mahasantri memiliki Keterampilan kepemimpinan dalam dirinya, sehingga mahasantri dapat </Text>
                                    <Text style={{fontSize: 7, color: 'red'}}>19 Agustus 2020 </Text>
                                <TouchableOpacity style={{paddingHorizontal: 40, paddingVertical: 0.01, alignSelf: 'flex-end'}} onPress={() => this.props.navigation.navigate('BeritaTerkini1')}>
                                    <Text style={{fontSize: 11, color: '#78d4e1'}} >Read more </Text>
                                </TouchableOpacity>  
                            </View>
                        </View>
                </View>
{/* ====================================================================Berita Terkini(NewsNow)==================================================================== */}
                <View>
                    <View style={{justifyContent: 'space-between', flexDirection: 'row',marginHorizontal: 20}}>         
                            <View style={{paddingTop: 7,marginRight: 15}}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('BeritaTerkini2')}>
                                    <Image source={require('../../assets/dummy/Haloqah.png')}
                                     style={{height: 80, width: 120, borderRadius: 10 }} 
                                     onPress={() => this.props.navigation.navigate('BeritaTerkini2')}/>
                                </TouchableOpacity>
                            </View>                                   
                                <View style={{paddingTop: 7, marginHorizontal: 5, width: '75%'}}>
                                    <Text style={{fontSize: 14, fontWeight: 'bold', color: '#009bb9', textAlign: 'left'}}>Kegiatan Haloqah Tahfidz</Text>
                                    <Text style={{fontSize: 11, color: '#7A7A7A'}}>Santri-santri yang rajin dalam menghafal Al-quran dan juga pandai dalam berkultum di </Text>
                                    <Text style={{fontSize: 7, color: 'red'}}>19 Agustus 2020 </Text>
                                <TouchableOpacity style={{paddingHorizontal: 40, paddingVertical: 0.01, alignSelf: 'flex-end'}} onPress={() => this.props.navigation.navigate('BeritaTerkini2')}>
                                    <Text style={{fontSize: 11, color: '#78d4e1'}} >Read more </Text>
                                </TouchableOpacity>  
                            </View>
                        </View>
            </View>                      
{/*=================================================================== Seputar Programmer============================================================================= */}
                <View>
                    <View>
                        <Text style={styles.news2}>Seputar Programmer</Text>
                    </View>
                    <View style={{paddingTop: 15, paddingHorizontal: 16}}>
                        <View style={{position: 'relative'}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('SeputarProgrammer')}>
                            <Image source={require('../../assets/dummy/sp5.png')} style={{height: 170, width: '100%', borderRadius: 6 }}/>
                        </TouchableOpacity>
                        <View style={{paddingTop: 15, width: '100%', height: 170, position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.10, borderRadius: 6}}></View>
                        <View style={{height: 15, width: 55, position: 'absolute', top: 10, left: 16 }}>
                            <Image source={require('../../assets/logo/nf-computer.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />
                        </View>
                        <View style={{height: 15, width: 55, position: 'absolute', top: 10, right: 16 }}>
                            <Image source={require('../../assets/logo/ybm-logo.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}}/>
                        </View>
                    </View>
                    <View style={{paddingTop: 15, paddingHorizontal: 10, borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginBottom: 20}}>
                        <Text style={{fontSize: 14, fontWeight: 'bold', color: '#009bb9'}}>Opening Sekolah Programmer Batch 5</Text>
                        <Text style={{fontSize: 12, fontWeight: 'normal', color: '#7A7A7A', marginBottom: 11}}>YBM PLN dan NURUL FIKRI Memulai Kembali Membuka Sekolah Programmer Batch 5</Text>
                    <TouchableOpacity style={{backgroundColor: '#61A756', paddingHorizontal: 10, paddingVertical: 9, alignSelf: 'flex-end', borderRadius: 4}} onPress={() => this.props.navigation.navigate('SeputarProgrammer')} >
                        <Text style={{fontSize: 9, fontWeight: 'bold', color: 'white'}}>Read more</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </ScrollView>
{/*============================================================================NAVBAR============================================================================= */}                 
            <View style={{height: 50, flexDirection: 'row', backgroundColor: 'white', marginVertical: -20}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Homes')}>
            <NavbarIcon onPress={() => this.props.navigation.navigate('Homes')} title="Homes" img={require('../../assets/icon/home-active.png')} active />
            </TouchableOpacity>  
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Profil')}>  
                <NavbarIcon title="Profil Santri SP" img={require('../../assets/icon/account.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('More')}>
                <NavbarIcon title="More" img={require('../../assets/icon/More1.png')} />
            </TouchableOpacity>
            </View>
            </ImageBackground>
            {/* Menu(NavBar) */}  
        </View>
        )
    }
} 


const styles = StyleSheet.create({
    backgroundImage:{
        width: 430,
        height: 770, 
    },
    container:{
        flex: 2,
    },
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
    c: {
        flex:1
    },
    main: {
        height: 30,
        backgroundColor: '#00000000',
        marginTop: 30,
        marginLeft: 10,
        paddingTop: 3,
 
        textAlign: 'left',
        color: '#778899',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: '',
    },
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
    news2: {
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

// export default Home;