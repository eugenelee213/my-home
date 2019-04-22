import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView,Text, View, TouchableOpacity, Image, Dimensions, TextInput} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
const fullwidth = Dimensions.get('window').width; 
//import data1 from './data1';


export default class App extends Component{
  
  

  render() {
    let data  = [{ value: 'banana' }, {value: 'apple'}

    ];
    return (
        <View style={styles.container}>
           <ScrollView>
               <View style={{flexDirection: "column", marginTop: 10}}>
                  <Image source={require('../assets/images/tea.jpeg')} style={{width: '100%', marginBottom:15}}/>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                       <Dropdown
                          label='  카테고리'
                          
                          data={data}
                          containerStyle={{borderBottomWidth:1, borderWidth: 1,height: 63,width:'80%'}}
                        />
                    </View>
                  <TextInput style={{lineHeight: 40, borderColor: 'black',  borderBottomWidth: 1, marginTop: 20}}
                  placeholder="제목을 입력해주세요 *"
                  placeholderTextColor='black'
                  />
                  <TextInput style={{lineHeight: 40, borderColor: 'grey',  borderBottomWidth: 1}}
                  placeholder="모델명"
                  placeholderTextColor='black'
                  />
                  <TextInput style={{lineHeight: 40, borderColor: 'grey',  borderBottomWidth: 1}}
                  placeholder="스타일(코드) *"
                  placeholderTextColor='black'
                  />
                  <TextInput style={{lineHeight: 40, borderColor: 'grey',  borderBottomWidth: 1}}
                  placeholder="분야(코드) *"
                  placeholderTextColor='black'
                  />

                  <View style={styles.con1}>
                        
                    <TextInput style={{lineHeight: 40, borderColor: 'grey'}}
                    placeholder="작업 *" 
                    placeholderTextColor='black'
                    />
                       <View style={{flexDirection: 'row'}}>

                          <IonIcon name="ios-radio-button-on" size={13} color="black"/>
                          <Text> 셀프 • DIY    </Text>
                          <IonIcon name="ios-radio-button-off" size={13} color="black"/>
                          <Text> 반셀프    </Text>
                          <IonIcon name="ios-radio-button-off" size={13} color="black"/>
                          <Text> 전문가</Text>

                        </View>     
                  </View>

                  <View style={styles.con1}>
                    <TextInput style={{lineHeight: 40, borderColor: 'grey'}}
                    placeholder="기간"
                    placeholderTextColor='black'
                    />
                        <View style={{flexDirection: 'row'}}>
                           <IonIcon name="ios-radio-button-on" size={13} color="black"/>
                           <Text> 주   </Text>
                           <IonIcon name="ios-radio-button-off" size={13} color="black"/>
                           <Text> 월</Text>
                        </View>
                          
                  </View>
                  
                  <View style={styles.con1}>
                     <TextInput style={{lineHeight: 40, borderColor: 'grey'}}
                     placeholder="컬러 익스테리어"
                     placeholderTextColor='black'
                     />
                         <View style={{flexDirection: 'row'}}>

                           <MaterialCommunityIcon name="circle" size={13} color="white"/>
                           <MaterialCommunityIcon name="circle" size={13} color="yellow"/>
                           <MaterialCommunityIcon name="circle" size={13} color="grey"/>
                           <MaterialCommunityIcon name="circle" size={13} color="red"/>
                           <MaterialCommunityIcon name="circle" size={13} color="blue"/>
                           <MaterialCommunityIcon name="circle" size={13} color="green"/>
                           <MaterialCommunityIcon name="circle" size={13} color="brown"/>
                         </View>
                  </View>

                  <View style={styles.con1}>
                     <TextInput style={{lineHeight: 40, borderColor: 'grey'}}
                     placeholder="인테리어"
                     placeholderTextColor='black'
                     />
                         <View style={{flexDirection: 'row'}}>

                           <MaterialCommunityIcon name="circle" size={13} color="white"/>
                           <MaterialCommunityIcon name="circle" size={13} color="yellow"/>
                           <MaterialCommunityIcon name="circle" size={13} color="grey"/>
                           <MaterialCommunityIcon name="circle" size={13} color="red"/>
                           <MaterialCommunityIcon name="circle" size={13} color="blue"/>
                           <MaterialCommunityIcon name="circle" size={13} color="green"/>
                           <MaterialCommunityIcon name="circle" size={13} color="brown"/>
                         </View>
                  </View>
                  <View style={styles.con1}>
                     <TextInput style={{lineHeight: 40, borderColor: 'grey'}}
                     placeholder="지역"
                     placeholderTextColor='black'
                     />
                         <View style={{flexDirection: 'row'}}>

                           <Dropdown
                             label='  선택항목'
                             data={data}
                             containerStyle={{width:'100%'}}
                           />
                           </View>  
                  </View>
              
                  <View style={{flexDirection:'column',height: 70,backgroundColor: 'grey', marginTop: 10,justifyContent: 'center', alignItems: 'center'}}>
                     <View style={{flexDirection: 'row'}}>
                      <TouchableOpacity onPress={this._onPressButton}>
                         <View style={styles.button}>
                            <Text>텍스트</Text>
                         </View>       
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=> this.props.navigation.navigate('Compare_uploadScreen')}>
                         <View style={styles.button}>
                            <Text>비교사진</Text>
                         </View>  
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=> this.props.navigation.navigate('Tag_uploadScreen')}>
                         <View style={styles.button}>
                            <Text>태그사진</Text>
                         </View>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={this._onPressButton}>
                         <View style={styles.button}>
                            <Text>유투브링크</Text>
                         </View>
                      </TouchableOpacity>
                     </View>    
                  </View>

                  <TouchableOpacity onPress={this._onPressButton}>
                    <View style={styles.butt}>
                     <Text>스토리 등록하기</Text>
                    </View>
                  </TouchableOpacity>
                  
                  <TextInput style={{lineHeight: 30,  borderWidth: 1, marginHorizontal: 30, marginTop: 20}}
                  placeholder="  에디터"
                  placeholderTextColor='black'
                  />
                  
                  <ScrollView style={{marginTop: 10, marginHorizontal: 30}}>
                     <TextInput style={{lineHeight: 90,  borderWidth: 1, marginTop: 20}}
                     placeholder="    내용입력"
                     placeholderTextColor='black'
                     placeholderTextAlign= 'left'
                     />
                  </ScrollView>         
                      
                  

                  
               </View>

           </ScrollView>
        </View>

    );
}
}


const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
    flex: 1,
    backgroundColor: 'white',
		paddingHorizontal: 10
    },
  con1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1
    
  },
  button: {
    flexDirection: 'row',
    color: 'blue',
    width:  fullwidth / 4 - 15, 
    height: 25,
    borderWidth: 1,
    marginHorizontal: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(50,150,200)',
    //borderRadius: 5,
    padding: 3
    },
    butt: {
      height: 30,
      borderWidth: 1,
      borderRadius: 5,
      marginHorizontal: 2,
      marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'grey',
      padding: 3
    }, 

}
);




           
                
                         
                          