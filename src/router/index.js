import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { Splash, admin, Peserta, WellcomeAuth, WellcomeAuth2 } from '../pages';


const Stack = createStackNavigator();

const Router =()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="splash" component={Splash} options={{headerShown:false}}/>
            <Stack.Screen name="WellcomeAuth" component={WellcomeAuth} options={{headerShown:false}}/>
            <Stack.Screen name="WellcomeAuth2" component={WellcomeAuth2} options={{headerShown:false}}/>
            <Stack.Screen name="admin" component={admin} options={{headerShown:false}}/>
            <Stack.Screen name="Peserta" component={Peserta} options={{headerShown:false}}/>
        </Stack.Navigator>
    );
};

export default Router;