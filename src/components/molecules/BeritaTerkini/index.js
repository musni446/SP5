import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const BeritaTerkini = (props, onPress) => {
    return (
        <View style={{justifyContent: 'space-between', flexDirection: 'row',marginHorizontal: 20}}>
                                
            <View style={{paddingTop: 7,marginRight: 15}}>
                <Image source={props.img} style={{height: 80, width: 120, borderRadius: 10 }} onPress={onPress}/>
            </View>                                   
            <View style={{paddingTop: 7, marginHorizontal: 5, width: '75%'}}>
                    <Text style={{fontSize: 14, fontWeight: 'bold', color: '#009bb9', textAlign: 'left'}}>{props.title1}</Text>
                    <Text style={{fontSize: 11, color: '#7A7A7A'}}>{props.title2} </Text>
                <Text style={{fontSize: 7, color: 'red'}}>{props.date} </Text>
                <TouchableOpacity style={{paddingHorizontal: 40, paddingVertical: 0.01, alignSelf: 'flex-end'}} onPress={onPress}>
                    <Text style={{fontSize: 11, color: '#78d4e1'}} >{props.buttonread} </Text>
                </TouchableOpacity>  
            </View>
        </View>

    )
}

export default BeritaTerkini;