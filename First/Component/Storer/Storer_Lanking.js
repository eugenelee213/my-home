import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,Dimensions,TouchableOpacity,Animated,position,Picker,Image} from 'react-native';
import Search from 'react-native-search-box';
//import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';


export default class App extends Component {

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

  render() {
    const handlePress1 = () => false
    let pic = {
      uri: '../../assets/images/01.jpg'
    };
    return (
      <ScrollView style={{ flexDirection:'column',flex:1,width:'100%'}}>
      
        <View style={{flexDirection:'row',height:50,textAlignVertical:'center',}}>
          
          <View  onPress = {handlePress1} style={{width:'15%',height:40,margin:5, backgroundColor:'grey',borderWidth:1, justifyContent: "center", alignItems: "center",borderRadius:10,}}>
            <Icon1  size={25} name="ios-arrow-back" color="black"  justifyContent= "center" alignItems= "center" />
          </View >
          
          <Picker style={styles.welcome} selectedValue = {this.state1.user} onValueChange = {this.updateUser}>
          <Picker.Item label = "카테고리별" value = "카테고리별" />
              <Picker.Item label = "모델별" value = "모델별" />
              <Picker.Item label = "성별/연령대별" value = "성별/연령대별" />
              <Picker.Item label = "애완용품" value = "애완용품" />
              <Picker.Item label = "유아용&임산부" value = "유아용&임산부" />
              <Picker.Item label = "공간별" value = "공간별" />
          </Picker>
          <View style={styles.search_box} >
            <Search defaultValue='검색' cancelTitle='취소' placeholder='검색' searchIconCollapsedMargin = {-30} placeholderCollapsedMargin = {130} backgroundColor='grey'
              ref="search_box"
            /> 
          </View>
          
          <Icon style={styles.welcome1} name="shopping-cart" size={30} color="blue" />

        </View>
        <View style={{flexDirection:'row',height:60,width:'100%',}}>
          <Icon2 style={{width:'33%',textAlign: 'center',}} name="android" size={50} color="blue" justifyContent= "center" alignItems= "center" />
          <Icon2 style={{width:'33%',textAlign: 'center',}} name="android" size={50} color="blue" justifyContent= "center" alignItems= "center"/>
          <Icon2 style={{width:'33%',textAlign: 'center',}} name="android" size={50} color="blue" justifyContent= "center" alignItems= "center"/>
        </View>
        <View style={{flexDirection:'row',height:60,width:'100%',}}>
          <Icon2 style={{width:'33%',textAlign: 'center',}} name="android" size={50} color="blue" justifyContent= "center" alignItems= "center" />
          <Icon2 style={{width:'33%',textAlign: 'center',}} name="android" size={50} color="blue" justifyContent= "center" alignItems= "center"/>
          <Icon2 style={{width:'33%',textAlign: 'center',}} name="android" size={50} color="blue" justifyContent= "center" alignItems= "center"/>
        </View>
        <ScrollView style={{flexDirection:'row',height:40,margin:5,width:'100%'}} horizontal={true} fillViewPort={true}>
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
        </ScrollView>
        <View style={{margin:5,backgroundColor:'grey',height:70}}>
            <Text style={{margin:5,fontSize:20,color:'black'}}>2depth 카테고리 표현</Text>
        </View>
        <View style={{flexDirection:'row',height:50,margin:5}}>
          <Text style={{textAlignVertical:'center',backgroundColor:'grey',borderRadius:10,marginBottom:10,marginTop:10,}}>(집 모델링)-</Text>
            <Picker style={styles.welcome2} selectedValue = {this.state1.user} onValueChange = {this.updateUser}>
              <Picker.Item label = "인기순" value = "인기순" />
              <Picker.Item label = "팔로잉" value = "팔로잉" />
              <Picker.Item label = "최신순" value = "최신순" />
            </Picker>
            <Picker style={styles.welcome2} selectedValue = {this.state2.user} onValueChange = {this.updateUser}>
              <Picker.Item label = " 가격" value = "가격" />
              <Picker.Item label = "팔로잉" value = "팔로잉" />
              <Picker.Item label = "최신순" value = "최신순" />
            </Picker>
            <Picker style={styles.welcome2} selectedValue = {this.state3.user} onValueChange = {this.updateUser}>
              <Picker.Item label = "배송" value = "배송" />
              <Picker.Item label = "팔로잉" value = "팔로잉" />
              <Picker.Item label = "최신순" value = "최신순" />
            </Picker>
          </View>
        <Text style={{margin:5,fontSize:20,color:'black',borderBottomWidth:1,borderColor:'black'}}>전체 7,556</Text>
          
        <View style={{flexDirection:'row',height:50,textAlignVertical:'center',}}>
          
          <View  onPress = {handlePress1} style={{width:'15%',height:40,margin:5, backgroundColor:'grey',borderWidth:1, justifyContent: "center", alignItems: "center",borderRadius:10,}}>
            <Icon1  size={25} name="ios-arrow-back" color="black"  justifyContent= "center" alignItems= "center" />
          </View >
          
          <Picker style={styles.welcome} selectedValue = {this.state1.user} onValueChange = {this.updateUser}>
              <Picker.Item label = "카테고리별" value = "카테고리별" />
              <Picker.Item label = "모델별" value = "모델별" />
              <Picker.Item label = "성별/연령대별" value = "성별/연령대별" />
              <Picker.Item label = "애완용품" value = "애완용품" />
              <Picker.Item label = "유아용&임산부" value = "유아용&임산부" />
              <Picker.Item label = "공간별" value = "공간별" />
          </Picker>
          <View style={styles.search_box} >
            <Search defaultValue='검색' cancelTitle='취소' placeholder='검색' searchIconCollapsedMargin = {-30} placeholderCollapsedMargin = {130} backgroundColor='grey'
              ref="search_box"
            /> 
          </View>
          
          <Icon style={styles.welcome1} name="shopping-cart" size={30} color="blue" />

        </View>
        <View style={{flexDirection:'row',height:60,width:'100%',}}>
          <Icon2 style={{width:'33%',textAlign: 'center',}} name="android" size={50} color="blue" justifyContent= "center" alignItems= "center" />
          <Icon2 style={{width:'33%',textAlign: 'center',}} name="android" size={50} color="blue" justifyContent= "center" alignItems= "center"/>
          <Icon2 style={{width:'33%',textAlign: 'center',}} name="android" size={50} color="blue" justifyContent= "center" alignItems= "center"/>
        </View>
        <View style={{flexDirection:'row',height:60,width:'100%',}}>
          <Icon2 style={{width:'33%',textAlign: 'center',}} name="android" size={50} color="blue" justifyContent= "center" alignItems= "center" />
          <Icon2 style={{width:'33%',textAlign: 'center',}} name="android" size={50} color="blue" justifyContent= "center" alignItems= "center"/>
          <Icon2 style={{width:'33%',textAlign: 'center',}} name="android" size={50} color="blue" justifyContent= "center" alignItems= "center"/>
        </View>
        <ScrollView style={{flexDirection:'row',height:40,margin:5,width:'100%'}} horizontal={true} fillViewPort={true}>
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
        </ScrollView>
        <View style={{flexDirection:'row',height:50,margin:5}}>
          <Text style={{textAlignVertical:'center',backgroundColor:'grey',borderRadius:10,marginBottom:10,marginTop:10,}}>(집 모델링)-</Text>
            <Picker style={styles.welcome2} selectedValue = {this.state1.user} onValueChange = {this.updateUser}>
              <Picker.Item label = "인기순" value = "인기순" />
              <Picker.Item label = "팔로잉" value = "팔로잉" />
              <Picker.Item label = "최신순" value = "최신순" />
            </Picker>
            <Picker style={styles.welcome2} selectedValue = {this.state2.user} onValueChange = {this.updateUser}>
              <Picker.Item label = " 가격" value = "가격" />
              <Picker.Item label = "팔로잉" value = "팔로잉" />
              <Picker.Item label = "최신순" value = "최신순" />
            </Picker>
            <Picker style={styles.welcome2} selectedValue = {this.state3.user} onValueChange = {this.updateUser}>
              <Picker.Item label = "배송" value = "배송" />
              <Picker.Item label = "팔로잉" value = "팔로잉" />
              <Picker.Item label = "최신순" value = "최신순" />
            </Picker>
          </View>
        <Text style={{margin:5,fontSize:20,color:'black',borderBottomWidth:1,borderColor:'black'}}>전체 7,556</Text>
 
        <View style={{flexDirection:'row',height:50,textAlignVertical:'center',}}>
          
          <View  onPress = {handlePress1} style={{width:'15%',height:40,margin:5, backgroundColor:'grey',borderWidth:1, justifyContent: "center", alignItems: "center",borderRadius:10,}}>
            <Icon1  size={25} name="ios-arrow-back" color="black"  justifyContent= "center" alignItems= "center" />
          </View >
          
          <Picker style={styles.welcome} selectedValue = {this.state1.user} onValueChange = {this.updateUser}>
              <Picker.Item label = "카테고리별" value = "카테고리별" />
              <Picker.Item label = "모델별" value = "모델별" />
              <Picker.Item label = "성별/연령대별" value = "성별/연령대별" />
              <Picker.Item label = "애완용품" value = "애완용품" />
              <Picker.Item label = "유아용&임산부" value = "유아용&임산부" />
              <Picker.Item label = "공간별" value = "공간별" />
          </Picker>
          <View style={styles.search_box} >
            <Search defaultValue='검색' cancelTitle='취소' placeholder='검색' searchIconCollapsedMargin = {-30} placeholderCollapsedMargin = {130} backgroundColor='grey'
              ref="search_box"
            /> 
          </View>
          
          <Icon style={styles.welcome1} name="shopping-cart" size={30} color="blue" />

        </View>
        <View style={{flexDirection:'row',height:60,width:'100%',}}>
          <Icon2 style={{width:'33%',textAlign: 'center',}} name="android" size={50} color="blue" justifyContent= "center" alignItems= "center" />
          <Icon2 style={{width:'33%',textAlign: 'center',}} name="android" size={50} color="blue" justifyContent= "center" alignItems= "center"/>
          <Icon2 style={{width:'33%',textAlign: 'center',}} name="android" size={50} color="blue" justifyContent= "center" alignItems= "center"/>
        </View>
        <View style={{flexDirection:'row',height:60,width:'100%',}}>
          <Icon2 style={{width:'33%',textAlign: 'center',}} name="android" size={50} color="blue" justifyContent= "center" alignItems= "center" />
          <Icon2 style={{width:'33%',textAlign: 'center',}} name="android" size={50} color="blue" justifyContent= "center" alignItems= "center"/>
          <Icon2 style={{width:'33%',textAlign: 'center',}} name="android" size={50} color="blue" justifyContent= "center" alignItems= "center"/>
        </View>

        <View style={{flexDirection:'row',width:'100%',justifyContent:'center',alignItems:'center'}}>
        <View style={{margin:2,flexDirection:'row',height:70,width:'35%',justifyContent:'center',alignItems:'center'}}>
            <Text style={{margin:2,width:'45%',height:60,textAlign: 'center',textAlignVertical:'center',backgroundColor:'grey',borderWidth:1,color:'black'}}>남성</Text>
            <Text style={{margin:2,width:'45%',height:60,textAlign: 'center',textAlignVertical:'center',backgroundColor:'grey',borderWidth:1,color:'black'}}>여성</Text>
        </View>
        <View style={{flexDirection:'row',height:70,width:'65%',justifyContent:'center',alignItems:'center'}}>
            <Text style={{margin:2,width:'20%',height:60,textAlign: 'center',textAlignVertical:'center',backgroundColor:'grey',borderWidth:1,color:'black'}}>20대</Text>
            <Text style={{margin:2,width:'20%',height:60,textAlign: 'center',textAlignVertical:'center',backgroundColor:'grey',borderWidth:1,color:'black'}}>30대</Text>
            <Text style={{margin:2,width:'20%',height:60,textAlign: 'center',textAlignVertical:'center',backgroundColor:'grey',borderWidth:1,color:'black'}}>40대</Text>
            <Text style={{margin:2,width:'20%',height:60,textAlign: 'center',textAlignVertical:'center',backgroundColor:'grey',borderWidth:1,color:'black'}}>50대~</Text>
        </View>
        </View>

        <ScrollView style={{flexDirection:'row',height:40,margin:5,width:'100%'}} horizontal={true} fillViewPort={true}>
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
        </ScrollView>
        <View style={{flexDirection:'row',height:50,margin:5}}>
          <Text style={{textAlignVertical:'center',backgroundColor:'grey',borderRadius:10,marginBottom:10,marginTop:10,}}>(집 모델링)-</Text>
            <Picker style={styles.welcome2} selectedValue = {this.state1.user} onValueChange = {this.updateUser}>
              <Picker.Item label = "인기순" value = "인기순" />
              <Picker.Item label = "팔로잉" value = "팔로잉" />
              <Picker.Item label = "최신순" value = "최신순" />
            </Picker>
            <Picker style={styles.welcome2} selectedValue = {this.state2.user} onValueChange = {this.updateUser}>
              <Picker.Item label = " 가격" value = "가격" />
              <Picker.Item label = "팔로잉" value = "팔로잉" />
              <Picker.Item label = "최신순" value = "최신순" />
            </Picker>
            <Picker style={styles.welcome2} selectedValue = {this.state3.user} onValueChange = {this.updateUser}>
              <Picker.Item label = "배송" value = "배송" />
              <Picker.Item label = "팔로잉" value = "팔로잉" />
              <Picker.Item label = "최신순" value = "최신순" />
            </Picker>
          </View>
        <Text style={{margin:5,fontSize:20,color:'black',borderBottomWidth:1,borderColor:'black'}}>전체 7,556</Text>
 
        <View style={{flexDirection:'row',height:50,textAlignVertical:'center',}}>
          
          <View  onPress = {handlePress1} style={{width:'15%',height:40,margin:5, backgroundColor:'grey',borderWidth:1, justifyContent: "center", alignItems: "center",borderRadius:10,}}>
            <Icon1  size={25} name="ios-arrow-back" color="black"  justifyContent= "center" alignItems= "center" />
          </View >
          
          <Picker style={styles.welcome} selectedValue = {this.state1.user} onValueChange = {this.updateUser}>
              <Picker.Item label = "카테고리별" value = "카테고리별" />
              <Picker.Item label = "모델별" value = "모델별" />
              <Picker.Item label = "성별/연령대별" value = "성별/연령대별" />
              <Picker.Item label = "애완용품" value = "애완용품" />
              <Picker.Item label = "유아용&임산부" value = "유아용&임산부" />
              <Picker.Item label = "공간별" value = "공간별" />
          </Picker>
          <View style={styles.search_box} >
            <Search defaultValue='검색' cancelTitle='취소' placeholder='검색' searchIconCollapsedMargin = {-30} placeholderCollapsedMargin = {130} backgroundColor='grey'
              ref="search_box"
            /> 
          </View>
          
          <Icon style={styles.welcome1} name="shopping-cart" size={30} color="blue" />

        </View>
        <View style={{flexDirection:'row',height:60,width:'100%',}}>
          <Icon2 style={{width:'33%',textAlign: 'center',}} name="android" size={50} color="blue" justifyContent= "center" alignItems= "center" />
          <Icon2 style={{width:'33%',textAlign: 'center',}} name="android" size={50} color="blue" justifyContent= "center" alignItems= "center"/>
          <Icon2 style={{width:'33%',textAlign: 'center',}} name="android" size={50} color="blue" justifyContent= "center" alignItems= "center"/>
        </View>
        <View style={{flexDirection:'row',height:60,width:'100%',}}>
          <Icon2 style={{width:'33%',textAlign: 'center',}} name="android" size={50} color="blue" justifyContent= "center" alignItems= "center" />
          <Icon2 style={{width:'33%',textAlign: 'center',}} name="android" size={50} color="blue" justifyContent= "center" alignItems= "center"/>
          <Icon2 style={{width:'33%',textAlign: 'center',}} name="android" size={50} color="blue" justifyContent= "center" alignItems= "center"/>
        </View>
        <ScrollView style={{flexDirection:'row',height:40,margin:5,width:'100%'}} horizontal={true} fillViewPort={true}>
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
        </ScrollView>
        <View style={{flexDirection:'row',height:50,margin:5}}>
          <Text style={{textAlignVertical:'center',backgroundColor:'grey',borderRadius:10,marginBottom:10,marginTop:10,}}>(집 모델링)-</Text>
            <Picker style={styles.welcome2} selectedValue = {this.state1.user} onValueChange = {this.updateUser}>
              <Picker.Item label = "인기순" value = "인기순" />
              <Picker.Item label = "팔로잉" value = "팔로잉" />
              <Picker.Item label = "최신순" value = "최신순" />
            </Picker>
            <Picker style={styles.welcome2} selectedValue = {this.state2.user} onValueChange = {this.updateUser}>
              <Picker.Item label = " 가격" value = "가격" />
              <Picker.Item label = "팔로잉" value = "팔로잉" />
              <Picker.Item label = "최신순" value = "최신순" />
            </Picker>
            <Picker style={styles.welcome2} selectedValue = {this.state3.user} onValueChange = {this.updateUser}>
              <Picker.Item label = "배송" value = "배송" />
              <Picker.Item label = "팔로잉" value = "팔로잉" />
              <Picker.Item label = "최신순" value = "최신순" />
            </Picker>
          </View>
        <Text style={{margin:5,fontSize:20,color:'black',borderBottomWidth:1,borderColor:'black'}}>전체 7,556</Text>
 
        <View style={{flexDirection:'row',height:50,textAlignVertical:'center',}}>
          
          <View  onPress = {handlePress1} style={{width:'15%',height:40,margin:5, backgroundColor:'grey',borderWidth:1, justifyContent: "center", alignItems: "center",borderRadius:10,}}>
            <Icon1  size={25} name="ios-arrow-back" color="black"  justifyContent= "center" alignItems= "center" />
          </View >
          
          <Picker style={styles.welcome} selectedValue = {this.state1.user} onValueChange = {this.updateUser}>
              <Picker.Item label = "카테고리별" value = "카테고리별" />
              <Picker.Item label = "모델별" value = "모델별" />
              <Picker.Item label = "성별/연령대별" value = "성별/연령대별" />
              <Picker.Item label = "애완용품" value = "애완용품" />
              <Picker.Item label = "유아용&임산부" value = "유아용&임산부" />
              <Picker.Item label = "공간별" value = "공간별" />
          </Picker>
          <View style={styles.search_box} >
            <Search defaultValue='검색' cancelTitle='취소' placeholder='검색' searchIconCollapsedMargin = {-30} placeholderCollapsedMargin = {130} backgroundColor='grey'
              ref="search_box"
            /> 
          </View>
          
          <Icon style={styles.welcome1} name="shopping-cart" size={30} color="blue" />

        </View>
        <View style={{flexDirection:'row',height:60,width:'100%',}}>
          <Icon2 style={{width:'33%',textAlign: 'center',}} name="android" size={50} color="blue" justifyContent= "center" alignItems= "center" />
          <Icon2 style={{width:'33%',textAlign: 'center',}} name="android" size={50} color="blue" justifyContent= "center" alignItems= "center"/>
          <Icon2 style={{width:'33%',textAlign: 'center',}} name="android" size={50} color="blue" justifyContent= "center" alignItems= "center"/>
        </View>
        <View style={{flexDirection:'row',height:60,width:'100%',}}>
          <Icon2 style={{width:'33%',textAlign: 'center',}} name="android" size={50} color="blue" justifyContent= "center" alignItems= "center" />
          <Icon2 style={{width:'33%',textAlign: 'center',}} name="android" size={50} color="blue" justifyContent= "center" alignItems= "center"/>
          <Icon2 style={{width:'33%',textAlign: 'center',}} name="android" size={50} color="blue" justifyContent= "center" alignItems= "center"/>
        </View>
        <ScrollView style={{flexDirection:'row',height:40,margin:5,width:'100%'}} horizontal={true} fillViewPort={true}>
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
        </ScrollView>
        <View style={{flexDirection:'row',height:50,margin:5}}>
          <Text style={{textAlignVertical:'center',backgroundColor:'grey',borderRadius:10,marginBottom:10,marginTop:10,}}>(집 모델링)-</Text>
            <Picker style={styles.welcome2} selectedValue = {this.state1.user} onValueChange = {this.updateUser}>
              <Picker.Item label = "인기순" value = "인기순" />
              <Picker.Item label = "팔로잉" value = "팔로잉" />
              <Picker.Item label = "최신순" value = "최신순" />
            </Picker>
            <Picker style={styles.welcome2} selectedValue = {this.state2.user} onValueChange = {this.updateUser}>
              <Picker.Item label = " 가격" value = "가격" />
              <Picker.Item label = "팔로잉" value = "팔로잉" />
              <Picker.Item label = "최신순" value = "최신순" />
            </Picker>
            <Picker style={styles.welcome2} selectedValue = {this.state3.user} onValueChange = {this.updateUser}>
              <Picker.Item label = "배송" value = "배송" />
              <Picker.Item label = "팔로잉" value = "팔로잉" />
              <Picker.Item label = "최신순" value = "최신순" />
            </Picker>
          </View>
        <Text style={{margin:5,fontSize:20,color:'black',borderBottomWidth:1,borderColor:'black'}}>전체 7,556</Text>
 
        <View style={{flexDirection:'row',height:50,textAlignVertical:'center',}}>
          
          <View  onPress = {handlePress1} style={{width:'15%',height:40,margin:5, backgroundColor:'grey',borderWidth:1, justifyContent: "center", alignItems: "center",borderRadius:10,}}>
            <Icon1  size={25} name="ios-arrow-back" color="black"  justifyContent= "center" alignItems= "center" />
          </View >
          
          <Picker style={styles.welcome} selectedValue = {this.state1.user} onValueChange = {this.updateUser}>
              <Picker.Item label = "카테고리별" value = "카테고리별" />
              <Picker.Item label = "모델별" value = "모델별" />
              <Picker.Item label = "성별/연령대별" value = "성별/연령대별" />
              <Picker.Item label = "애완용품" value = "애완용품" />
              <Picker.Item label = "유아용&임산부" value = "유아용&임산부" />
              <Picker.Item label = "공간별" value = "공간별" />
          </Picker>
          <View style={styles.search_box} >
            <Search defaultValue='검색' cancelTitle='취소' placeholder='검색' searchIconCollapsedMargin = {-30} placeholderCollapsedMargin = {130} backgroundColor='grey'
              ref="search_box"
            /> 
          </View>
          
          <Icon style={styles.welcome1} name="shopping-cart" size={30} color="blue" />

        </View>
        <View style={{flexDirection:'row',height:60,width:'100%',}}>
          <Icon2 style={{width:'33%',textAlign: 'center',}} name="android" size={50} color="blue" justifyContent= "center" alignItems= "center" />
          <Icon2 style={{width:'33%',textAlign: 'center',}} name="android" size={50} color="blue" justifyContent= "center" alignItems= "center"/>
          <Icon2 style={{width:'33%',textAlign: 'center',}} name="android" size={50} color="blue" justifyContent= "center" alignItems= "center"/>
        </View>
        <View style={{flexDirection:'row',height:60,width:'100%',}}>
          <Icon2 style={{width:'33%',textAlign: 'center',}} name="android" size={50} color="blue" justifyContent= "center" alignItems= "center" />
          <Icon2 style={{width:'33%',textAlign: 'center',}} name="android" size={50} color="blue" justifyContent= "center" alignItems= "center"/>
          <Icon2 style={{width:'33%',textAlign: 'center',}} name="android" size={50} color="blue" justifyContent= "center" alignItems= "center"/>
        </View>
        <View style={{width:'100%',justifyContent:'center',alignItems:'center'}}>
        <View style={{flexDirection:'row',height:70,width:'80%',justifyContent:'center',alignItems:'center'}}>
            <Text style={{margin:2,width:60,height:60,textAlign: 'center',textAlignVertical:'center',backgroundColor:'grey',borderWidth:1,color:'black'}}>전체</Text>
            <Text style={{margin:2,width:60,height:60,textAlign: 'center',textAlignVertical:'center',backgroundColor:'grey',borderWidth:1,color:'black'}}>공간B</Text>
            <Text style={{margin:2,width:60,height:60,textAlign: 'center',textAlignVertical:'center',backgroundColor:'grey',borderWidth:1,color:'black'}}>공간C</Text>
            <Text style={{margin:2,width:60,height:60,textAlign: 'center',textAlignVertical:'center',backgroundColor:'grey',borderWidth:1,color:'black'}}>공간D</Text>
            <Text style={{margin:2,width:60,height:60,textAlign: 'center',textAlignVertical:'center',backgroundColor:'grey',borderWidth:1,color:'black'}}>공간E</Text>
        </View>
        </View>
        <ScrollView style={{flexDirection:'row',height:40,margin:5,width:'100%'}} horizontal={true} fillViewPort={true}>
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
          <Icon2 style={{width:75,textAlign: 'center',}} name="android" size={30} />
        </ScrollView>
        <View style={{flexDirection:'row',height:50,margin:5}}>
          <Text style={{textAlignVertical:'center',backgroundColor:'grey',borderRadius:10,marginBottom:10,marginTop:10,}}>(집 모델링)-</Text>
            <Picker style={styles.welcome2} selectedValue = {this.state1.user} onValueChange = {this.updateUser}>
              <Picker.Item label = "인기순" value = "인기순" />
              <Picker.Item label = "팔로잉" value = "팔로잉" />
              <Picker.Item label = "최신순" value = "최신순" />
            </Picker>
            <Picker style={styles.welcome2} selectedValue = {this.state2.user} onValueChange = {this.updateUser}>
              <Picker.Item label = " 가격" value = "가격" />
              <Picker.Item label = "팔로잉" value = "팔로잉" />
              <Picker.Item label = "최신순" value = "최신순" />
            </Picker>
            <Picker style={styles.welcome2} selectedValue = {this.state3.user} onValueChange = {this.updateUser}>
              <Picker.Item label = "배송" value = "배송" />
              <Picker.Item label = "팔로잉" value = "팔로잉" />
              <Picker.Item label = "최신순" value = "최신순" />
            </Picker>
          </View>
        <Text style={{margin:5,fontSize:20,color:'black',borderBottomWidth:1,borderColor:'black'}}>전체 7,556</Text>
 
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
    width:'40%',
    fontSize: 20,
    textAlign: 'right',
    textAlignVertical:'center',
    color:'black',
    marginTop:5
  },
  welcome1: {
    width:'20%',
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical:'center',
    marginTop:5
  },
  welcome2: {
    // flex : 0.5,
     width:'28%',
     fontSize: 10,
     textAlign: 'center',
     borderColor:'black',
     borderWidth:1,
   },
  search_box: {
    //flex : 0.6,
    width:'25%',
    fontSize: 20,
    marginTop:5
  },
  scene: {
    flex: 1,
  },
});
