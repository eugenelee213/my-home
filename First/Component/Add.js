import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather'

class AddSreen extends Component{
 
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            < FeatherIcon name='plus-circle' style={{color:tintColor, marginTop: 12}} size={23} />
        )
    }
 
    render(){
        return (
            <View style={style.container}>
                
            </View>
        );
    }
}
export default AddSreen;
 
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})