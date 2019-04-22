import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, TextInput, TouchableOpacity, Text, Image, Dimensions} from 'react-native';
//import { IonIcon1 } from 'react-native-vector-icons/Ionicons';
import IonIcon from 'react-native-vector-icons/Ionicons';

const fullwidth = Dimensions.get('window').width; 
export default class App extends Component{
    render() 
    
      {
      return (
          <View style={styles.container}>
            <ScrollView>
               <View style={{flexDirection: 'column', marginBottom: 300}}>
                   <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                         <View style={styles.butto}>
                            <IonIcon name="ios-arrow-back" size={15} color="black"/>
                         </View>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={this._onPressButton}>
                         <View style={styles.butto}>
                            <Text> 추가 </Text>
                         </View>
                      </TouchableOpacity>
                   </View>
                   <TextInput style={{height: 30,  borderWidth: 1, marginHorizontal: 30, marginTop: 20}}
                   placeholder="  에디터"
                   placeholderTextColor='black'
                   />
                   <TextInput style={{height: 40, borderBottomWidth:1, marginTop: 10}}
                   placeholder="제목을 입력해주세요(공백시 나타나지 않습니다.)" 
                   placeholderTextColor='black'
                   />
                   <View style={{flexDirection: 'row', marginTop: 20}}>
                         <Image source={require('../assets/images/01.jpg')} style={{width: fullwidth / 2 - 15, height: 130,marginHorizontal: 2}}/>
                         <Image source={require('../assets/images/02.jpg')} style={{width: fullwidth / 2 - 15, height: 130,marginHorizontal: 2}}/>
                   </View>
                   <TextInput style={{height: 40, borderBottomWidth:1, marginTop: 10}}
                   placeholder="출처 URL이 있다면 적어주세요.(http://)" 
                   placeholderTextColor='black'
                   />
                   <TextInput style={{height: 40, borderBottomWidth:1, marginTop: 30}}
                   placeholder="이미지에 대한 설명을 입력해주세요" 
                   placeholderTextColor='black'
                   />
                   <TextInput style={{height: 40, borderBottomWidth:1, marginTop: 10}}
                   placeholder="#태그 입력(ex #모던, #새집)" 
                   placeholderTextColor='black'
                   />
                   <TextInput style={{height: 40, borderBottomWidth:1, marginTop: 10}}
                   placeholder="c 사진저작자를 밝혀주세요" 
                   placeholderTextColor='black'
                   />
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
                             
                   
                           
                           