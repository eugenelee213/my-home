import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, TouchableOpacity, Text, Image, Dimensions} from 'react-native';
import  IonIcon  from 'react-native-vector-icons/Ionicons';
import { Dropdown } from 'react-native-material-dropdown';

const fullwidth = Dimensions.get('window').width; 
export default class App extends Component{
    render() 
    
      {
      return (
          <View style={styles.container}>
            <ScrollView>
               <View style={{flexDirection: 'column'}}>
                   <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <TouchableOpacity onPress={() => this.props.navigation.goBack()}>

                         <View style={styles.butto}>

                           <IonIcon name='md-close' size={14}/>
                         </View>
                      </TouchableOpacity>
                      <View style={{width: 120}}>
                          <Dropdown
                             label='  모든사진'
                             //data={data}
                             containerStyle={{width:'100%'}}
                          />
                      </View>
                      <TouchableOpacity onPress={this._onPressButton}>
                         <View style={styles.butto}>

                           <Text>다음</Text>
                         </View>
                      </TouchableOpacity>

                   </View>
                   <View style={{flexDirection: 'row', marginTop: 20}}>
                      <TouchableOpacity onPress={()=> this.props.navigation.navigate('Image_upload2Screen')}>
                         <Image source={require('../assets/images/01.jpg')} style={{width: fullwidth / 3 - 20, height: 110,marginHorizontal: 7}}/>
                      </TouchableOpacity>
                         <Image source={require('../assets/images/02.jpg')} style={{width: fullwidth / 3 - 20, height: 110,marginHorizontal: 7}}/>
                         <Image source={require('../assets/images/03.jpg')} style={{width: fullwidth / 3 - 20, height: 110,marginHorizontal: 7}}/>
                   </View>
                   <View style={{flexDirection: 'row', marginTop: 10}}>
                         <Image source={require('../assets/images/04.jpg')} style={{width: fullwidth / 3 - 20, height: 110,marginHorizontal: 7}}/>
                         <Image source={require('../assets/images/05.jpg')} style={{width: fullwidth / 3 - 20, height: 110,marginHorizontal: 7}}/>
                         <Image source={require('../assets/images/06.jpg')} style={{width: fullwidth / 3 - 20, height: 110,marginHorizontal: 7}}/>
                   </View>

                   
                  


                </View> 
            </ScrollView>
          </View>
      );
}
}; 

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
    flex: 1,
    backgroundColor: 'white',
		paddingHorizontal: 10
    },
    butt: {
        height: 30,
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 15,
        //marginBottom: 5,
        width: fullwidth-50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        padding: 3
      },
      butto: {
        //height: 30,
        width: 40,
        
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal:7,
        marginTop: 35,
        
        alignItems: 'center',
        backgroundColor: 'grey',
        padding: 3
      },
      button: {
        flexDirection: 'row',
        color: 'grey',
        width:  fullwidth / 3 - 35, 
        height: 30,
        borderWidth: 1,
        marginHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        borderRadius: 5,
        padding: 3
        
    },
    button1: {
      flexDirection: 'row',
      //color: 'white',
      width:  fullwidth / 3 - 35, 
      height: 30,
      borderWidth: 1,
      marginHorizontal: 15,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 5,
      padding: 3
      
  },
  button2: {
    flexDirection: 'row',
    //color: 'white',
    width:  fullwidth / 3 - 35, 
    height: 30,
    borderWidth: 1,
    marginHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    //borderRadius: 5,
    padding: 3
    
},
}
);
