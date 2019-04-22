import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, TouchableOpacity, Text, Image, Dimensions, ImageBackground} from 'react-native';
//import { IonIcon } from 'react-native-vector-icons/Ionicons';
import { Dropdown } from 'react-native-material-dropdown';
import { TextInput } from 'react-native-gesture-handler';
import { Overlay } from 'react-native-elements';
import Button from 'react-native-button'
const fullwidth = Dimensions.get('window').width; 

export default class App extends Component{
    render() 
    
      {
      return (
          <View style={styles.container}>
            <ScrollView>
               <View style={{flexDirection: 'column'}}>
                   <View style={{flexDirection: 'row' }}>
                      <View style={{width: 100, marginRight: 10}}>
                          <Dropdown
                             label='  모델'
                             //data={data}
                             containerStyle={{width:'100%'}}
                          />
                      </View>
                      <View style={{width: 100,marginRight: 80}}>
                          <Dropdown
                             label='  스타일'
                             //data={data}
                             containerStyle={{width:'100%'}}
                          />
                      </View>
                      <TouchableOpacity onPress={this._onPressButton}>
                         <View style={styles.butto}>

                           <Text>올리기</Text>
                         </View>
                      </TouchableOpacity>

                   </View>
                   <TextInput style={{height: 30,  borderWidth: 1, marginHorizontal: 30, marginTop: 20}}
                   placeholder="  에디터"
                   placeholderTextColor='black'
                   />
                   <TextInput style={{height: 30,  borderBottomWidth: 1, marginHorizontal: 10, marginTop: 10}}
                   placeholder="  제목을 입력해주세요"
                   placeholderTextColor='black'
                   />
                   <ScrollView 
                      horizontal={true}
                      marginTop = '10%' 
                      marginBottom = '10%'
                      showsHorizontalScrollIndicator={false}
                      showsVerticalScrollIndicator={false}>
                         <ImageBackground source={require('../assets/images/opt.jpg')} style={{width: fullwidth - 40, height: fullwidth - 30, marginHorizontal: 3}}>
                           <View style={{position: 'absolute', bottom: 20, right: 85 }}>
                              <Button onPress={()=> this.props.navigation.navigate('Image_upload3Screen')}
                                style={{ width: 150, color: 'black', height: 33, backgroundColor: 'white',borderRadius: 20 }}>
                                + 제품 태그하기
                               </Button>
                               
                               
                              
                                    
                              {/* <Text>hello</Text> */}
                            </View>
                         </ImageBackground>
                         <Image source={require('../assets/images/opt.jpg')} style={{width: fullwidth - 40, height: fullwidth - 30, marginHorizontal: 3}}/>
                         
                   </ScrollView>
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
                   <TextInput style={{height: 40, borderBottomWidth:1, marginTop: 10, marginBottom: 60}}
                   placeholder="c 사진저작자를 밝혀주세요" 
                   placeholderTextColor='black'
                   />
                </View> 
            </ScrollView>
          </View>
      );
}
                               
onclick(){
  alert('hello')
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
        height: 30,
        width: 45,
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal:5,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        padding: 3
      },
      
}
);

                                  
                              
                              
                              