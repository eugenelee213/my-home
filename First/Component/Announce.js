import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions} from 'react-native';
import EvilIcon from 'react-native-vector-icons/EvilIcons'

class AnnounceSreen extends Component{
 
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            < EvilIcon name='bell' style={{color:tintColor}} size={28} />
        )
    }
 
    render(){
        return (
            <View style={style.container}>
                
            </View>
        );
    }
}
export default AnnounceSreen;
 
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})