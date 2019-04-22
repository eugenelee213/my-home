import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, TouchableOpacity, Text, Image, Dimensions} from 'react-native';
import  IonIcon from 'react-native-vector-icons/Ionicons';
import { Dropdown } from 'react-native-material-dropdown';

const fullwidth = Dimensions.get('window').width; 
export default class App extends Component{
    render() 
    
      {
      return (
          <View style={styles.container}>
            <ScrollView>
               <View style={{flexDirection: 'column'}}>
                   <View style={{flexDirection: 'row'}}>
                      <TouchableOpacity onPress={this._onPressButton}>
                         <View style={styles.butto}>
                            <IonIcon name='md-close' size={14}/>
                           
                         </View>
                      </TouchableOpacity>
                        <View style={{width: 120, marginLeft:80}}>
                          <Dropdown
                             label='  모든사진'
                             //data={data}
                             containerStyle={{width:'100%'}}
                          />
                        </View>

                   </View>
                   <View style={{flexDirection: 'row', marginTop: 20}}>
                         <Image source={require('../assets/images/01.jpg')} style={{width: fullwidth / 3 - 20, height: 110,marginHorizontal: 7}}/>
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
        marginHorizontal: 2,
        //marginBottom: 5,
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
        marginHorizontal:5,
        marginTop: 35,
        
        alignItems: 'center',
        backgroundColor: 'grey',
        padding: 3
      },
}
);

  
                   		
							
                       
                        
					  
                        
                   