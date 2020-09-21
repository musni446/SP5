import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { Splash, Login, Register, 
    WellcomeAuth, WellcomeAuth2,Homes,
    TataTertib,JadwalKegiatan,AbsensiKegiatan,
    Tahfidz,Modul,Perizinan,
    BeritaTerkini1,BeritaTerkini2,SeputarProgrammer,Profil,More,Edit,AboutUs} from '../pages';

const Stack = createStackNavigator();

const Router =()=>{
    return(
        <Stack.Navigator>
{/* ====================================================Screen================================================================= */}
            <Stack.Screen name="splash" component={Splash} options={{headerShown:false}}/>
            <Stack.Screen name="WellcomeAuth" component={WellcomeAuth} options={{headerShown:false}}/>
            <Stack.Screen name="WellcomeAuth2" component={WellcomeAuth2} options={{headerShown:false}}/>
{/* ====================================================login================================================================= */}            
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
            <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
{/* ====================================================Home================================================================= */}            
            <Stack.Screen name="Homes" component={Homes} options={{headerShown:false}}/>
{/* ====================================================MainItem================================================================= */}               
            <Stack.Screen name="TataTertib" component={TataTertib} options={{headerShown:false}}/>
            <Stack.Screen name="JadwalKegiatan" component={JadwalKegiatan} options={{headerShown:false}}/>
            <Stack.Screen name="AbsensiKegiatan" component={AbsensiKegiatan} options={{headerShown:false}}/>
            <Stack.Screen name="Perizinan" component={Perizinan} options={{headerShown:false}}/>   
            <Stack.Screen name="Tahfidz" component={Tahfidz} options={{headerShown:false}}/>
            <Stack.Screen name="Modul" component={Modul} options={{headerShown:false}}/>
{/* ====================================================NewsNow================================================================= */}  
            <Stack.Screen name="BeritaTerkini1" component={BeritaTerkini1} options={{headerShown:false}}/>
            <Stack.Screen name="BeritaTerkini2" component={BeritaTerkini2} options={{headerShown:false}}/>
{/* ====================================================Seputar Programmer======================================================= */} 
            <Stack.Screen name="SeputarProgrammer" component={SeputarProgrammer} options={{headerShown:false}}/>
{/* ====================================================NewsNow================================================================= */}
            <Stack.Screen name="Profil" component={Profil} options={{headerShown:false}}/>
            <Stack.Screen name="More" component={More} options={{headerShown:false}}/>
{/* ====================================================edit================================================================= */}
            <Stack.Screen name="Edit" component={Edit} options={{headerShown:false}}/>
{/* ====================================================AboutUs================================================================= */}
            <Stack.Screen name="AboutUs" component={AboutUs} options={{headerShown:false}}/>              
        </Stack.Navigator>
    );
};

export default Router;