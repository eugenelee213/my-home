import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TouchableOpacity, Image} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons'

class MypageSreen extends Component{
 
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            < IonIcon name='ios-person' style={{color:tintColor}} size={27} />
        ),
        
        
    }
 
    render(){
        return (
            <View style={style.container}>

                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Photo_detailScreen')}>
                <Image source={require('../assets/images/01.jpg')} style={{width: '100%', height: 200}}/>
                </TouchableOpacity>
                <Text>hello</Text>
                {/* <Image source={require('../assets/images/01.jpg')} style={{width: '100%', height: 200}}/> */}
                
            </View>
        );
    }
}
export default MypageSreen;
 
const style = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    }
})
