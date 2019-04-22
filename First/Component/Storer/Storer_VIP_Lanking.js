import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,Dimensions,TouchableOpacity,Animated,position,Picker,Image} from 'react-native';
import Search from 'react-native-search-box';
//import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';


export default class App extends Component {


  render() {
    const handlePress1 = () => false
    let pic = {
      uri: '../../assets/images/01.jpg'
    };
    return (
      <ScrollView style={{ flexDirection:'column',flex:1,marginBottom:5}}>
      
        <View style={{flexDirection:'row',height:50}}>
          
          <View  onPress = {handlePress1} style={{width:'15%',height:30,margin:5, backgroundColor:'grey',borderWidth:1, justifyContent: "center", alignItems: "center",borderRadius:10,}}>
            <Icon1  size={25} name="ios-arrow-back" color="black"  justifyContent= "center" alignItems= "center" />
          </View >
          
          <Text style={styles.welcome}>       40대 남성 랭킹   </Text>
          <View style={styles.search_box} >
            <Search defaultValue='검색' cancelTitle='취소' placeholder='검색' searchIconCollapsedMargin = {-30} placeholderCollapsedMargin = {130} backgroundColor='grey'
              ref="search_box"
            /> 
          </View>
          
          <Icon style={styles.welcome1} name="shopping-cart" size={30} color="blue" />

        </View>
       
        <View style={{flexDirection:'row',height:50,margin:3,textAlignVertical:'center',textAlign: 'center',}}>
          <Text style={{width:80,height:45,fontSize:15,margin:2,textAlignVertical:'center',textAlign: 'center',backgroundColor:'grey',borderRadius:10,marginBottom:10,marginTop:10,}}>(집 모델링)-</Text>
          <Text style={{height:60,margin:2,fontSize:10,color:'black',textAlign: 'center',textAlignVertical:'center',}}>의</Text>
          <Text style={{width:60,height:45,fontSize:15,margin:2,textAlign: 'center',textAlignVertical:'center',backgroundColor:'grey',borderRadius:10,marginBottom:10,marginTop:10,}}>  40대  (연령)-</Text>
          <Text style={{width:60,height:45,fontSize:15,margin:2,textAlignVertical:'center',textAlign: 'center',backgroundColor:'grey',borderRadius:10,marginBottom:10,marginTop:10,}}>  남성   (성별)-</Text>
          <Text style={{height:60,margin:2,fontSize:10,color:'black',textAlign: 'center',textAlignVertical:'center',}}>에게 가장 인기있는</Text>
          <Text style={{width:90,height:45,fontSize:15,margin:2,textAlignVertical:'center',textAlign: 'center',backgroundColor:'grey',borderRadius:10,marginBottom:10,marginTop:10,}}>전체                (카테고리)-</Text>
        </View>
          <Text style={{margin:5,fontSize:20,color:'black'}}>전체 2,052</Text>
          <View style={{ flexDirection:'row',alignItems: "center",width:'100%'}}>

                <View style={{ flexDirection:'column',alignItems: "center",width:'30%',marginTop:1,marginLeft:10,marginRight:5}}>
                <Image source={require('../../assets/images/01.jpg')} style={{width:100,height:100,}}/>

                <Text style={{color:'black',fontSize:11 ,alignItems: "center",width:110,marginTop:1,marginLeft:10,marginRight:5,}}>오토반 비트윈 업충전거치 집안용 멀티포켓 … </Text>
                <View style={{flexDirection:'row',alignItems: "center",width:110,marginTop:1,marginLeft:10,marginRight:5,}}>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,}}>35,000</Text>
                <Text style={{color:'black',fontSize:5 ,alignItems: "center",margin:1,}}>원</Text>
                <Text style={{fontSize:9 ,alignItems: "center",margin:1,color:'blue'}}>55%</Text>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,textDecorationLine:'line-through'}}>35,000</Text>
                <Text style={{color:'black',fontSize:5 ,alignItems: "center",margin:1,}}>원</Text>
                </View>
                <View style={{flexDirection:'row',alignItems: "center",width:110,marginTop:1,marginLeft:10,marginRight:5,}}>
                <Icon1  size={9} name="ios-star" />
                <Text style={{color:'black',fontSize:9 ,justifyContent:'center',alignItems: "center",margin:1}}>평점 4.87</Text>
                <Icon2  size={9} name="message" />
                <Text style={{color:'black',fontSize:9 ,justifyContent:'center',alignItems: "center",margin:1}}>리뷰 67</Text>
                </View>
                <View style={{flexDirection:'row',alignItems: "center",width:110,marginTop:1,marginLeft:10,marginRight:5,}}>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,backgroundColor:'grey'}}>무료배송</Text>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,backgroundColor:'grey'}}>최저가</Text>
                <Icon1  size={9} name="ios-arrow-down" />
                <Text style={{color:'blue',fontSize:9 ,alignItems: "center",margin:1,}}>99%</Text>
                </View>
                </View>


                <View style={{ flexDirection:'column',alignItems: "center",width:'30%',marginTop:1,marginLeft:10,marginRight:5}}>
                <Image source={require('../../assets/images/01.jpg')} style={{width:100,height:100,}}/>

                <Text style={{color:'black',fontSize:11 ,alignItems: "center",width:110,marginTop:1,marginLeft:10,marginRight:5,}}>오토반 비트윈 업충전거치 집안용 멀티포켓 … </Text>
                <View style={{flexDirection:'row',alignItems: "center",width:110,marginTop:1,marginLeft:10,marginRight:5,}}>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,}}>35,000</Text>
                <Text style={{color:'black',fontSize:5 ,alignItems: "center",margin:1,}}>원</Text>
                <Text style={{fontSize:9 ,alignItems: "center",margin:1,color:'blue'}}>55%</Text>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,textDecorationLine:'line-through'}}>35,000</Text>
                <Text style={{color:'black',fontSize:5 ,alignItems: "center",margin:1,}}>원</Text>
                </View>
                <View style={{flexDirection:'row',alignItems: "center",width:110,marginTop:1,marginLeft:10,marginRight:5,}}>
                <Icon1  size={9} name="ios-star" />
                <Text style={{color:'black',fontSize:9 ,justifyContent:'center',alignItems: "center",margin:1}}>평점 4.87</Text>
                <Icon2  size={9} name="message" />
                <Text style={{color:'black',fontSize:9 ,justifyContent:'center',alignItems: "center",margin:1}}>리뷰 67</Text>
                </View>
                <View style={{flexDirection:'row',alignItems: "center",width:110,marginTop:1,marginLeft:10,marginRight:5,}}>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,backgroundColor:'grey'}}>무료배송</Text>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,backgroundColor:'grey'}}>최저가</Text>
                <Icon1  size={9} name="ios-arrow-down" />
                <Text style={{color:'blue',fontSize:9 ,alignItems: "center",margin:1,}}>99%</Text>
                </View>
                </View>

                <View style={{ flexDirection:'column',alignItems: "center",width:'30%',marginTop:1,marginLeft:10,marginRight:5}}>
                <Image source={require('../assets/images/01.jpg')} style={{width:100,height:100,}}/>

                <Text style={{color:'black',fontSize:11 ,alignItems: "center",width:110,marginTop:1,marginLeft:10,marginRight:5,}}>오토반 비트윈 업충전거치 집안용 멀티포켓 … </Text>
                <View style={{flexDirection:'row',alignItems: "center",width:110,marginTop:1,marginLeft:10,marginRight:5,}}>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,}}>35,000</Text>
                <Text style={{color:'black',fontSize:5 ,alignItems: "center",margin:1,}}>원</Text>
                <Text style={{fontSize:9 ,alignItems: "center",margin:1,color:'blue'}}>55%</Text>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,textDecorationLine:'line-through'}}>35,000</Text>
                <Text style={{color:'black',fontSize:5 ,alignItems: "center",margin:1,}}>원</Text>
                </View>
                <View style={{flexDirection:'row',alignItems: "center",width:110,marginTop:1,marginLeft:10,marginRight:5,}}>
                <Icon1  size={9} name="ios-star" />
                <Text style={{color:'black',fontSize:9 ,justifyContent:'center',alignItems: "center",margin:1}}>평점 4.87</Text>
                <Icon2  size={9} name="message" />
                <Text style={{color:'black',fontSize:9 ,justifyContent:'center',alignItems: "center",margin:1}}>리뷰 67</Text>
                </View>
                <View style={{flexDirection:'row',alignItems: "center",width:110,marginTop:1,marginLeft:10,marginRight:5,}}>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,backgroundColor:'grey'}}>무료배송</Text>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,backgroundColor:'grey'}}>최저가</Text>
                <Icon1  size={9} name="ios-arrow-down" />
                <Text style={{color:'blue',fontSize:9 ,alignItems: "center",margin:1,}}>99%</Text>
                </View>
                </View>

            </View>

            <View style={{ flexDirection:'row',alignItems: "center",width:'100%'}}>

                <View style={{ flexDirection:'column',alignItems: "center",width:'30%',marginTop:1,marginLeft:10,marginRight:5}}>
                <Image source={require('../../assets/images/01.jpg')} style={{width:100,height:100,}}/>

                <Text style={{color:'black',fontSize:11 ,alignItems: "center",width:110,marginTop:1,marginLeft:10,marginRight:5,}}>오토반 비트윈 업충전거치 집안용 멀티포켓 … </Text>
                <View style={{flexDirection:'row',alignItems: "center",width:110,marginTop:1,marginLeft:10,marginRight:5,}}>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,}}>35,000</Text>
                <Text style={{color:'black',fontSize:5 ,alignItems: "center",margin:1,}}>원</Text>
                <Text style={{fontSize:9 ,alignItems: "center",margin:1,color:'blue'}}>55%</Text>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,textDecorationLine:'line-through'}}>35,000</Text>
                <Text style={{color:'black',fontSize:5 ,alignItems: "center",margin:1,}}>원</Text>
                </View>
                <View style={{flexDirection:'row',alignItems: "center",width:110,marginTop:1,marginLeft:10,marginRight:5,}}>
                <Icon1  size={9} name="ios-star" />
                <Text style={{color:'black',fontSize:9 ,justifyContent:'center',alignItems: "center",margin:1}}>평점 4.87</Text>
                <Icon2  size={9} name="message" />
                <Text style={{color:'black',fontSize:9 ,justifyContent:'center',alignItems: "center",margin:1}}>리뷰 67</Text>
                </View>
                <View style={{flexDirection:'row',alignItems: "center",width:110,marginTop:1,marginLeft:10,marginRight:5,}}>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,backgroundColor:'grey'}}>무료배송</Text>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,backgroundColor:'grey'}}>최저가</Text>
                <Icon1  size={9} name="ios-arrow-down" />
                <Text style={{color:'blue',fontSize:9 ,alignItems: "center",margin:1,}}>99%</Text>
                </View>
                </View>


                <View style={{ flexDirection:'column',alignItems: "center",width:'30%',marginTop:1,marginLeft:10,marginRight:5}}>
                <Image source={require('../../assets/images/01.jpg')} style={{width:100,height:100,}}/>

                <Text style={{color:'black',fontSize:11 ,alignItems: "center",width:110,marginTop:1,marginLeft:10,marginRight:5,}}>오토반 비트윈 업충전거치 집안용 멀티포켓 … </Text>
                <View style={{flexDirection:'row',alignItems: "center",width:110,marginTop:1,marginLeft:10,marginRight:5,}}>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,}}>35,000</Text>
                <Text style={{color:'black',fontSize:5 ,alignItems: "center",margin:1,}}>원</Text>
                <Text style={{fontSize:9 ,alignItems: "center",margin:1,color:'blue'}}>55%</Text>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,textDecorationLine:'line-through'}}>35,000</Text>
                <Text style={{color:'black',fontSize:5 ,alignItems: "center",margin:1,}}>원</Text>
                </View>
                <View style={{flexDirection:'row',alignItems: "center",width:110,marginTop:1,marginLeft:10,marginRight:5,}}>
                <Icon1  size={9} name="ios-star" />
                <Text style={{color:'black',fontSize:9 ,justifyContent:'center',alignItems: "center",margin:1}}>평점 4.87</Text>
                <Icon2  size={9} name="message" />
                <Text style={{color:'black',fontSize:9 ,justifyContent:'center',alignItems: "center",margin:1}}>리뷰 67</Text>
                </View>
                <View style={{flexDirection:'row',alignItems: "center",width:110,marginTop:1,marginLeft:10,marginRight:5,}}>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,backgroundColor:'grey'}}>무료배송</Text>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,backgroundColor:'grey'}}>최저가</Text>
                <Icon1  size={9} name="ios-arrow-down" />
                <Text style={{color:'blue',fontSize:9 ,alignItems: "center",margin:1,}}>99%</Text>
                </View>
                </View>

                <View style={{ flexDirection:'column',alignItems: "center",width:'30%',marginTop:1,marginLeft:10,marginRight:5}}>
                <Image source={require('../../assets/images/01.jpg')} style={{width:100,height:100,}}/>

                <Text style={{color:'black',fontSize:11 ,alignItems: "center",width:110,marginTop:1,marginLeft:10,marginRight:5,}}>오토반 비트윈 업충전거치 집안용 멀티포켓 … </Text>
                <View style={{flexDirection:'row',alignItems: "center",width:110,marginTop:1,marginLeft:10,marginRight:5,}}>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,}}>35,000</Text>
                <Text style={{color:'black',fontSize:5 ,alignItems: "center",margin:1,}}>원</Text>
                <Text style={{fontSize:9 ,alignItems: "center",margin:1,color:'blue'}}>55%</Text>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,textDecorationLine:'line-through'}}>35,000</Text>
                <Text style={{color:'black',fontSize:5 ,alignItems: "center",margin:1,}}>원</Text>
                </View>
                <View style={{flexDirection:'row',alignItems: "center",width:110,marginTop:1,marginLeft:10,marginRight:5,}}>
                <Icon1  size={9} name="ios-star" />
                <Text style={{color:'black',fontSize:9 ,justifyContent:'center',alignItems: "center",margin:1}}>평점 4.87</Text>
                <Icon2  size={9} name="message" />
                <Text style={{color:'black',fontSize:9 ,justifyContent:'center',alignItems: "center",margin:1}}>리뷰 67</Text>
                </View>
                <View style={{flexDirection:'row',alignItems: "center",width:110,marginTop:1,marginLeft:10,marginRight:5,}}>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,backgroundColor:'grey'}}>무료배송</Text>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,backgroundColor:'grey'}}>최저가</Text>
                <Icon1  size={9} name="ios-arrow-down" />
                <Text style={{color:'blue',fontSize:9 ,alignItems: "center",margin:1,}}>99%</Text>
                </View>
                </View>

            </View>

            <View style={{ flexDirection:'row',alignItems: "center",width:'100%'}}>

                <View style={{ flexDirection:'column',alignItems: "center",width:'30%',marginTop:1,marginLeft:10,marginRight:5}}>
                <Image source={require('../../assets/images/01.jpg')} style={{width:100,height:100,}}/>

                <Text style={{color:'black',fontSize:11 ,alignItems: "center",width:110,marginTop:1,marginLeft:10,marginRight:5,}}>오토반 비트윈 업충전거치 집안용 멀티포켓 … </Text>
                <View style={{flexDirection:'row',alignItems: "center",width:110,marginTop:1,marginLeft:10,marginRight:5,}}>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,}}>35,000</Text>
                <Text style={{color:'black',fontSize:5 ,alignItems: "center",margin:1,}}>원</Text>
                <Text style={{fontSize:9 ,alignItems: "center",margin:1,color:'blue'}}>55%</Text>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,textDecorationLine:'line-through'}}>35,000</Text>
                <Text style={{color:'black',fontSize:5 ,alignItems: "center",margin:1,}}>원</Text>
                </View>
                <View style={{flexDirection:'row',alignItems: "center",width:110,marginTop:1,marginLeft:10,marginRight:5,}}>
                <Icon1  size={9} name="ios-star" />
                <Text style={{color:'black',fontSize:9 ,justifyContent:'center',alignItems: "center",margin:1}}>평점 4.87</Text>
                <Icon2  size={9} name="message" />
                <Text style={{color:'black',fontSize:9 ,justifyContent:'center',alignItems: "center",margin:1}}>리뷰 67</Text>
                </View>
                <View style={{flexDirection:'row',alignItems: "center",width:110,marginTop:1,marginLeft:10,marginRight:5,}}>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,backgroundColor:'grey'}}>무료배송</Text>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,backgroundColor:'grey'}}>최저가</Text>
                <Icon1  size={9} name="ios-arrow-down" />
                <Text style={{color:'blue',fontSize:9 ,alignItems: "center",margin:1,}}>99%</Text>
                </View>
                </View>


                <View style={{ flexDirection:'column',alignItems: "center",width:'30%',marginTop:1,marginLeft:10,marginRight:5}}>
                <Image source={require('../../assets/images/01.jpg')} style={{width:100,height:100,}}/>

                <Text style={{color:'black',fontSize:11 ,alignItems: "center",width:110,marginTop:1,marginLeft:10,marginRight:5,}}>오토반 비트윈 업충전거치 집안용 멀티포켓 … </Text>
                <View style={{flexDirection:'row',alignItems: "center",width:110,marginTop:1,marginLeft:10,marginRight:5,}}>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,}}>35,000</Text>
                <Text style={{color:'black',fontSize:5 ,alignItems: "center",margin:1,}}>원</Text>
                <Text style={{fontSize:9 ,alignItems: "center",margin:1,color:'blue'}}>55%</Text>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,textDecorationLine:'line-through'}}>35,000</Text>
                <Text style={{color:'black',fontSize:5 ,alignItems: "center",margin:1,}}>원</Text>
                </View>
                <View style={{flexDirection:'row',alignItems: "center",width:110,marginTop:1,marginLeft:10,marginRight:5,}}>
                <Icon1  size={9} name="ios-star" />
                <Text style={{color:'black',fontSize:9 ,justifyContent:'center',alignItems: "center",margin:1}}>평점 4.87</Text>
                <Icon2  size={9} name="message" />
                <Text style={{color:'black',fontSize:9 ,justifyContent:'center',alignItems: "center",margin:1}}>리뷰 67</Text>
                </View>
                <View style={{flexDirection:'row',alignItems: "center",width:110,marginTop:1,marginLeft:10,marginRight:5,}}>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,backgroundColor:'grey'}}>무료배송</Text>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,backgroundColor:'grey'}}>최저가</Text>
                <Icon1  size={9} name="ios-arrow-down" />
                <Text style={{color:'blue',fontSize:9 ,alignItems: "center",margin:1,}}>99%</Text>
                </View>
                </View>

                <View style={{ flexDirection:'column',alignItems: "center",width:'30%',marginTop:1,marginLeft:10,marginRight:5}}>
                <Image source={require('../../assets/images/01.jpg')} style={{width:100,height:100,}}/>

                <Text style={{color:'black',fontSize:11 ,alignItems: "center",width:110,marginTop:1,marginLeft:10,marginRight:5,}}>오토반 비트윈 업충전거치 집안용 멀티포켓 … </Text>
                <View style={{flexDirection:'row',alignItems: "center",width:110,marginTop:1,marginLeft:10,marginRight:5,}}>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,}}>35,000</Text>
                <Text style={{color:'black',fontSize:5 ,alignItems: "center",margin:1,}}>원</Text>
                <Text style={{fontSize:9 ,alignItems: "center",margin:1,color:'blue'}}>55%</Text>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,textDecorationLine:'line-through'}}>35,000</Text>
                <Text style={{color:'black',fontSize:5 ,alignItems: "center",margin:1,}}>원</Text>
                </View>
                <View style={{flexDirection:'row',alignItems: "center",width:110,marginTop:1,marginLeft:10,marginRight:5,}}>
                <Icon1  size={9} name="ios-star" />
                <Text style={{color:'black',fontSize:9 ,justifyContent:'center',alignItems: "center",margin:1}}>평점 4.87</Text>
                <Icon2  size={9} name="message" />
                <Text style={{color:'black',fontSize:9 ,justifyContent:'center',alignItems: "center",margin:1}}>리뷰 67</Text>
                </View>
                <View style={{flexDirection:'row',alignItems: "center",width:110,marginTop:1,marginLeft:10,marginRight:5,}}>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,backgroundColor:'grey'}}>무료배송</Text>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,backgroundColor:'grey'}}>최저가</Text>
                <Icon1  size={9} name="ios-arrow-down" />
                <Text style={{color:'blue',fontSize:9 ,alignItems: "center",margin:1,}}>99%</Text>
                </View>
                </View>

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
