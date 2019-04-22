import React, {Component} from 'react';
import {Platform, StyleSheet,ScrollView,Text, View,Picker,AppRegistry, Image,Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { genericTypeAnnotation } from '@babel/types';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Photo_detail from './Photo_detail'

export default class Home_Photo extends Component{

    state1 = {user: ''}
   updateUser = (user) => {
      this.setState({ user: user })
   }
   state2 = {user: ''}
   updateUser = (user) => {
      this.setState({ user: user })
   }
  render() {
    const handlePress = () => false
    let pic = {
        uri: '../../assets/images/01.jpg'
      };
    return (
        
            <ScrollView style={{flexDirection:'column',}}>
                <View style={{flexDirection:'row',height:50,margin:5}}>
                    <Text style={{textAlignVertical:'center',backgroundColor:'grey',borderRadius:10,marginBottom:10,marginTop:10,}}>(집 모델링)-</Text>
                    <Picker style={styles.welcome} selectedValue = {this.state1.user} onValueChange = {this.updateUser} hideicon='false'>
                        <Picker.Item label = "인기순" value = "인기순" />
                        <Picker.Item label = "팔로잉" value = "팔로잉" />
                        <Picker.Item label = "최신순" value = "최신순" />
                   </Picker>
                    <Picker style={styles.welcome} selectedValue = {this.state2.user} onValueChange = {this.updateUser}  hideicon='false'>
                    <Picker.Item label = " 스타일" value = "스타일" />
                    <Picker.Item label = "팔로잉" value = "팔로잉" />
                    <Picker.Item label = "최신순" value = "최신순" />
                    </Picker>
                </View>
                <View onPress = {handlePress} style={{width:'100%',height:30,flexDirection:'row', borderWidth:1,borderRadius:5,backgroundColor:'grey',}}>
                <Text style={style={ width:'70%',fontSize: 15,color:'black',}}>첫 사진을 올리면 1,000p 드립니다.</Text>
                <Icon  size={25} name="ios-camera" color="black" />
                <Text style={style={ width:'20%',fontSize: 15,color:'black',textAlign: 'right',}}>사진 올리기</Text>
                </View>

                <View style={{flexDirection:'row',height:30,margin:5, alignItems: "center",}}>
                 
                 <Image source={require('../../assets/images/01.jpg')} style={{width:20,height:20,borderRadius:20,}}  /><Text style={{textAlignVertical:'center', height:50}}>  절세미남 </Text><Text style={{textAlignVertical:'center', height:50, color:'blue'}}>· 팔로우</Text>
                 
                </View>
                
                <Text style={style={ width:'100%',fontSize: 18,fontWeight: 'bold', color:'black',}}>우리집 바닥에 어울리는 가구 컬러 찾기 1</Text> 
                
                <Text style={style={fontSize: 15,}}>우리집 바닥에 어울리는 가구 찾아 떠납니다</Text>
                <Text style={{width:'100%',textAlignVertical:'center',fontWeight: 'bold',color:'black',textAlign: 'right'}}>더보기</Text>
                
                
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Photo_detailScreen')}>
                <Image source={require('../../assets/images/01.jpg')} style={{width: '100%', height: 200}}/>
                </TouchableOpacity>

                <Text style={style={ width:'100%',height:20,fontSize: 12, color:'black',textAlign: 'center',textAlignVertical:'center',}}>좋아요 5 · 스크랩 4 · 조회 860</Text> 
                <View style={{flexDirection:'row',height:30,margin:5, alignItems: "center",}}>
                
                <Image source={require('../../assets/images/01.jpg')} style={{width:20,height:20,borderRadius:20,}}  /><Text style={{textAlignVertical:'center', height:50}}>  절세미남 </Text><Text style={{textAlignVertical:'center', height:50, color:'blue'}}>· 팔로우</Text>
                
                </View>
                <Text style={style={ width:'100%',fontSize: 18,fontWeight: 'bold', color:'black',}}>우리집 바닥에 어울리는 가구 컬러 찾기 1</Text> 
                <Text style={style={fontSize: 15,}}>우리집 바닥에 어울리는 가구 찾아 떠납니다. 같이 하실래요?</Text>
                
                <Text style={style={fontSize: 15,}}>2탄~ 먼길을 찾아 떠나는 아름다운 푸른강산…</Text>
                <Text style={{width:'100%',textAlignVertical:'center',fontWeight: 'bold',color:'black',textAlign: 'right'}}>더보기</Text>
                <Image source={require('../../assets/images/01.jpg')} style={{width: '100%', height: 200}}/>
                <Text style={style={ width:'100%',height:20,fontSize: 12, color:'black',textAlign: 'center',textAlignVertical:'center',}}>좋아요 5 · 스크랩 4 · 조회 860</Text>
                
  
            </ScrollView>
    );
  }
}

// const RootStack = createStackNavigator(
//   {
//     home_photo: {
//       screen: Home_Photo,

//     },
//     photo_detail: {
//       screen: Photo_detail,
//     },
   
//   },
//   {
//     defaultNavigationOptions: {
//       header: null
//     },
//     initialRouteName: 'home_photo',
//   },
  
// );
// const AppContainer = createAppContainer(RootStack);

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
//  }



const styles = StyleSheet.create({
    container1: {
      flex: 1,
      height: '100%',
      width: '100%',
      backgroundColor: 'white',
    },
    welcome: {
        // flex : 0.5,
         width:'28%',
         height:45,
         fontSize: 10,
         textAlign: 'center',
         borderWidth:1,
         borderColor:'black'
       },
  });
  