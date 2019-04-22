import React, {Component} from 'react';
import {Platform, StyleSheet,ScrollView,Text, View,Picker,AppRegistry, Image,Button} from 'react-native';
//import FontAwesome, { Icons } from 'react-native-fontawesome';
import ToggleSwitch from 'toggle-switch-react-native'
import SwitchToggle from 'react-native-switch-toggle';

export default class App extends Component{

    state1 = {user: '선택항목'}
   updateUser = (user) => {
      this.setState({ user: user })
   }
   constructor(props) {
    super(props);
    this.state = {
      switchOn1: false,

    };
  }
  render() {

    
    
    let pic = {
        uri: '../../assets/images/01.jpg'
      };
    return (
    
      <ScrollView style={{flexDirection:'column',}}>
                
                <View style={{ flexDirection:'row',width:'100%',alignItems: "center",marginLeft:50}}>
                  
                  
                    <Picker style={styles.welcome1} selectedValue = {this.state1.user} onValueChange = {this.updateUser}>
                        <Picker.Item label = "인기순" value = "인기순" />
                        <Picker.Item label = "팔로잉" value = "팔로잉" />
                        <Picker.Item label = "최신순" value = "최신순" />
                    </Picker>
                 
                <View style={{width:'60%',height:50,margin:5, alignItems: "center"}}>
                    
                    <SwitchToggle
                        containerStyle={{
                          marginTop: 5,
                          width: 100,
                          height: 40,
                          borderRadius: 25,
                          borderWidth:1,
                          padding: 1,
                        }}
                        circleStyle={{
                          width: 38,
                          height: 38,
                          borderRadius: 19,
                          backgroundColor: 'blue', // rgb(102,134,205)
                        }}
                        switchOn={this.state.switchOn1}
                        onPress={this.onPress1}
                        circleColorOff='blue'
                        circleColorOn='blue'
                        duration={500}
                        backTextLeft=' 진행중     '
                        backgroundColorOn='white'
                        backgroundColorOff='white'
                        
                      /> 
                  </View>


                </View>
                <View style={{width:'100%', alignItems: "center"}}>
                <Image source={require('../../assets/images/01.jpg')} style={{width: '95%', height: 300,margin:10,}}/>
                </View>
                <Text style={{width:'75%',fontSize: 20,margin:10,color:'black'}}>정성 가득! 집을 리모델링 하다</Text>
                <Text style={{width:'75%',fontSize: 15,marginBottom:10,}}>75개 상품 · 5일 10시간 17분 남음</Text>
                <View style={{width:'100%', alignItems: "center"}}>
                <Image source={require('../../assets/images/01.jpg')} style={{width: '95%', height: 300,margin:10,}}/>
                </View>
                <Text style={{width:'75%',fontSize: 20,margin:10,color:'black'}}>정성 가득! 집을 리모델링 하다</Text>
                <Text style={{width:'75%',fontSize: 15,marginBottom:10,}}>75개 상품 · 5일 10시간 17분 남음</Text>
                <View style={{width:'100%', alignItems: "center"}}>
                <Image source={require('../../assets/images/01.jpg')} style={{width: '95%', height: 300,margin:10,}}/>
                </View>
                <Text style={{width:'75%',fontSize: 20,margin:10,color:'black'}}>정성 가득! 집을 리모델링 하다</Text>
                <Text style={{width:'75%',fontSize: 15,marginBottom:10,}}>75개 상품 · 5일 10시간 17분 남음</Text>

            </ScrollView>
    );
  }
}

onPress1 = () => {
  this.setState({ switchOn1: !this.state.switchOn1 });
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
       width:'16%',
       fontSize: 12,
       textAlign: 'center',
       margin: 15,
     },
     welcome1: {
         // flex : 0.5,
          width:'28%',
          fontSize: 10,
          borderColor:'black',
          borderWidth:1,
        },
    
     welcome3: {
        // flex : 0.5,
         width:'100%',fontSize: 20,margin:10,
         
        
       },
  });
  