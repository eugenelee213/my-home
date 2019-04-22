import React, {Component} from 'react';
import {Platform, StyleSheet,ScrollView,Text, View,Picker,AppRegistry, Image,Button} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

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
    const handlePress1 = () => false
    const handlePress2 = () => false
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
                    <Picker style={styles.welcome} selectedValue = {this.state4.user} onValueChange = {this.updateUser}>
                    <Picker.Item label = "작업" value = "작업" />
                    <Picker.Item label = "팔로잉" value = "팔로잉" />
                    <Picker.Item label = "최신순" value = "최신순" />
                    </Picker>
                </View>
                <View style={{flexDirection:'column',height:60}}>
                    <View style={{flexDirection:'row',height:25,borderBottomWidth:2,margin:1,}}>
                    <Icon  size={25} name="bell" color="black" />
                    <Text style={styles.welcome2}>[공지] 회원 등급제</Text>
                    </View>
                    <View style={{flexDirection:'row',height:25,borderBottomWidth:2,margin:1,}}>
                    <Icon  size={25} name="bell" color="black" />
                    <Text style={styles.welcome2}>[공지] SMS 인증</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row',height:45,width:'100%',}}>
                <Picker style={styles.welcome} selectedValue = {this.state4.user} onValueChange = {this.updateUser}>
                        <Picker.Item label = "인기순" value = "인기순" />
                        <Picker.Item label = "팔로잉" value = "팔로잉" />
                        <Picker.Item label = "최신순" value = "최신순" />
                </Picker>
                <View style={{width:'50%',backgroundColor:'white',}}>
                <Button title = "댓글을 기다리는 질문!" onPress = {handlePress1} style={{height:45,marginRight:30,borderRadius:40,borderWidth:2,margin:2}} color='grey'/>
                </View>
                <View style={{width:'25%',backgroundColor:'white', alignItems: "center"}}>
                <Button title = "질문하기!" onPress = {handlePress2} style={{height:45,textAlign: 'right',borderRadius:40,borderWidth:2,margin:2}}  color='grey' />
                </View>
                </View>
                <View style={{flexDirection:'row',height:120,borderBottomWidth:2,margin:10,}}>
                <View style={{flexDirection:'column',}}>
                  <Text style={{color:'black'}}>TITLE 사진 첨부</Text>
                  
                  <View style={{flexDirection:'row',}}>
                    <Image source={require('../../assets/images/01.jpg')} style={{width:50,height:50,borderRadius:50,}}/>
                      <View style={{flexDirection:'column',}}>
                      <Text style={{textAlignVertical:'center', fontSize:20,}}>   절세미남 </Text>
                      <Text style={{textAlignVertical:'center', fontSize:15,}}>   1분 · 댓글1 · 조회1 · 삭제 </Text>
                      </View>
                  </View>
                  <View style={{flexDirection:'row',}}>
                  <View style={{width:'40%',backgroundColor:'white', alignItems: "center"}}>
                    <Button title = "     #소나타     " onPress = {handlePress1} style={{height:45,borderRadius:40,margin:5}} color='grey'/>
                    </View>
                    <View style={{width:'30%',backgroundColor:'white', alignItems: "flex-end"}}>
                    <Button title = "      #새집      " onPress = {handlePress2} style={{height:45,textAlign: 'right',borderRadius:40,margin:5}}  color='grey' />
                  </View>
                </View> 
                </View>
                <Image source={require('../../assets/images/01.jpg')} style={{width:100, height: 100}}/> 
                </View>
                <View style={{flexDirection:'row',height:120,borderBottomWidth:2,margin:10,}}>
                <View style={{flexDirection:'column',}}>
                  <Text style={{color:'black'}}>TITLE 사진 미첨부</Text>
                  
                  <View style={{flexDirection:'row',}}>
                    <Image source={require('../../assets/images/01.jpg')} style={{width:50,height:50,borderRadius:50,}}/>
                      <View style={{flexDirection:'column',}}>
                      <Text style={{textAlignVertical:'center', fontSize:20,}}>   절세미남 </Text>
                      <Text style={{textAlignVertical:'center', fontSize:15,}}>   1분 · 댓글1 · 조회1 · 삭제 </Text>
                      </View>
                  </View>
                  <View style={{flexDirection:'row',}}>
                  <View style={{width:'40%',backgroundColor:'white', alignItems: "center"}}>
                    <Button title = "     #소나타     " onPress = {handlePress1} style={{height:45,borderRadius:40,margin:5}} color='grey'/>
                    </View>
                    <View style={{width:'30%',backgroundColor:'white', alignItems: "flex-end"}}>
                    <Button title = "      #새집      " onPress = {handlePress2} style={{height:45,textAlign: 'right',borderRadius:40,margin:5}}  color='grey' />
                  </View>
                </View> 
                </View>
                </View>
                <View style={{flexDirection:'row',height:120,margin:10,}}>
                <View style={{flexDirection:'column',}}>
                  <Text style={{color:'black'}}>조언이 필요합니다~~</Text>
                  
                  <View style={{flexDirection:'row',}}>
                    <Image source={require('../../assets/images/01.jpg')} style={{width:50,height:50,borderRadius:50,}}/>
                      <View style={{flexDirection:'column',}}>
                      <Text style={{textAlignVertical:'center', fontSize:20,}}>   절세미남 </Text>
                      <Text style={{textAlignVertical:'center', fontSize:15,}}>   1분 · 댓글1 · 조회1 · 삭제 </Text>
                      </View>
                  </View>
                  <View style={{flexDirection:'row',}}>
                  <View style={{width:'40%',backgroundColor:'white', alignItems: "center"}}>
                    <Button title = "     #소나타     " onPress = {handlePress1} style={{height:45,borderRadius:40,margin:5}} color='grey'/>
                    </View>
                    <View style={{width:'30%',backgroundColor:'white', alignItems: "flex-end"}}>
                    <Button title = "      #새집      " onPress = {handlePress2} style={{height:45,textAlign: 'right',borderRadius:40,margin:5}}  color='grey' />
                  </View>
                </View> 
                </View>
                <Image source={require('../../assets/images/01.jpg')} style={{width:100, height: 100}}/> 
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
       height:45,
       fontSize: 10,
       textAlign: 'center',
       borderWidth:1,
       borderColor:'black'
     },

    text: {
        fontSize: 15,
        width:'15%',
        alignSelf: 'center',
        color: 'red'
     }
  });
  