import React, {Component} from 'react';
import {Platform, StyleSheet,ScrollView,Text, View,Picker,AppRegistry, Image} from 'react-native';


export default class App extends Component{

    state1 = {user: ''}
   updateUser = (user) => {
      this.setState({ user: user })
   }
   state2 = {user: ''}
   updateUser = (user) => {
      this.setState({ user: user })
   }
   state3 = {user: ''}
   updateUser = (user) => {
      this.setState({ user: user })
   }
   state4 = {user: ''}
   updateUser = (user) => {
      this.setState({ user: user })
   }

  render() {
    let pic = {
        uri: '../../assets/images/01.jpg'
      };
    return (
    
      <ScrollView style={{flexDirection:'column',}}>
                <View style={{flexDirection:'row',height:50,margin:5}}>
                    <Text style={{textAlignVertical:'center',backgroundColor:'grey',borderRadius:10,marginBottom:10,marginTop:10,}}>(집 모델링)-</Text>
                    <Picker style={styles.welcome} selectedValue = {this.state1.user} onValueChange = {this.updateUser}>
                        <Picker.Item label = "인기순" value = "인기순" />
                        <Picker.Item label = "팔로잉" value = "팔로잉" />
                        <Picker.Item label = "최신순" value = "최신순" />
                    </Picker>
                    <Picker style={styles.welcome} selectedValue = {this.state2.user} onValueChange = {this.updateUser}>
                    <Picker.Item label = " 스타일" value = "스타일" />
                    <Picker.Item label = "팔로잉" value = "팔로잉" />
                    <Picker.Item label = "최신순" value = "최신순" />
                    </Picker>
                    <Picker style={styles.welcome} selectedValue = {this.state3.user} onValueChange = {this.updateUser}>
                    <Picker.Item label = "분야" value = "분야" />
                    <Picker.Item label = "팔로잉" value = "팔로잉" />
                    <Picker.Item label = "최신순" value = "최신순" />
                    </Picker>
                </View>
                <View style={{flexDirection:'row',height:50}}>
                <Text style={{fontSize:20,width:'70%',}}>전체 1,900</Text>
                <Picker style={styles.welcome} selectedValue = {this.state4.user} onValueChange = {this.updateUser}>
                    <Picker.Item label = "작업" value = "작업" />
                    <Picker.Item label = "팔로잉" value = "팔로잉" />
                    <Picker.Item label = "최신순" value = "최신순" />
                    </Picker>
                </View>
                <View style={{alignItems:'center',marginBottom:10}}>
                <Image source={require('../../assets/images/01.jpg')} style={{width: '100%', height: 200}}/>
                <Text style={style={ width:'100%',fontSize: 18,fontWeight: 'bold', color:'black',textAlign: 'center',}}>5월을 맞아 준비해봤습니다.</Text>
                  <View style={{flexDirection:'row',textAlign: 'center',height:30,margin:5 ,alignItems: "center",}}>
                  <Image source={require('../../assets/images/01.jpg')} style={{width:20,height:20,borderRadius:20,}}  /><Text style={{textAlignVertical:'center', height:50}}>  절세미남 </Text><Text style={{textAlignVertical:'center', height:50, color:'blue'}}>· 팔로우</Text>
                  </View>
                <Text style={style={ width:'100%',height:20,fontSize: 12, color:'black',textAlign: 'center',textAlignVertical:'center',}}>좋아요 5 · 스크랩 4 · 조회 860</Text>
                </View>
                <View style={{alignItems:'center',marginBottom:10}}>
                <Image source={require('../../assets/images/01.jpg')} style={{width: '100%', height: 200}}/>
                <View style={{flexDirection:'row',textAlign: 'center',height:50,margin:5,}}>
                <Text style={{textAlignVertical:'center', height:50, color:'blue',fontSize: 18,fontWeight: 'bold'}}>공지</Text><Text style={{textAlignVertical:'center', height:50,fontSize: 18,fontWeight: 'bold'}}>  TITLE 텍스트 </Text>
                </View>

                  <View style={{flexDirection:'row',textAlign: 'center',height:30,margin:5, alignItems: "center",}}>
                  <Image source={require('../../assets/images/01.jpg')} style={{width:20,height:20,borderRadius:20,}}  /><Text style={{textAlignVertical:'center', height:50}}>  절세미남 </Text><Text style={{textAlignVertical:'center', height:50, color:'blue'}}>· 팔로우</Text>
                  </View>
                <Text style={style={ width:'100%',height:20,fontSize: 12, color:'black',textAlign: 'center',textAlignVertical:'center',}}>좋아요 5 · 스크랩 4 · 조회 860</Text>
                </View>
            </ScrollView>
    );
  }
}



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
       fontSize: 10,
       textAlign: 'center',
       borderColor:'black',
       borderWidth:1,
     },
    text: {
        fontSize: 15,
        width:'15%',
        alignSelf: 'center',
        color: 'red'
     }
  });
  