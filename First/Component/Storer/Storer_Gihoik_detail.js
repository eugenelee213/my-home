import React, {Component} from 'react';
import { Text, View,ScrollView,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';



export default class HelloWorldApp extends Component {
  render() {
    const handlePress1 = () => false
    let pic = {
      uri: '../../assets/images/01.jpg'
    };
    return (
      <ScrollView style={{ flexDirection:'column',flex:1}}>
            <View style={{ flexDirection:'row',}}>
                
                      <View  onPress = {handlePress1} style={{width:'15%',height:30,margin:5, backgroundColor:'grey',borderWidth:1, justifyContent: "center", alignItems: "center",borderRadius:10,}}>
                      <Icon  size={25} name="ios-arrow-back" color="black"  justifyContent= "center" alignItems= "center" />
                      </View >
                  
                      
                      <Text style={{textAlign: 'center',width:'50%',textAlignVertical:'center',fontWeight: 'bold',color:'black',fontSize: 17,}}>정상가득 집을 인테리어 하다!</Text>
                      
                      
                      <View style={{flexDirection:'row',width:'30%',height:30,margin:5, backgroundColor:'grey',borderWidth:1, borderRadius:12,justifyContent: "center", alignItems: "center",}}>
                        <Icon  onPress = {handlePress1} size={25} name="md-share" color="black"  justifyContent= "center" alignItems= "center" color="white" />
                        <Text style={{fontSize:20}}>          999 </Text>
                      </View >
            </View>
            <View onPress = {handlePress1} style={{width:'100%', alignItems: "center"}}>
                <Image source={require('../../assets/images/01.jpg')} style={{width: '95%', height: 450}}/>
            </View>
            <View style={{ flexDirection:'row',alignItems: "center",width:'100%'}}>

                <View style={{ flexDirection:'column',alignItems: "center",width:'30%',marginTop:15,marginLeft:10,marginRight:5}}>
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
                <Icon  size={9} name="ios-star" />
                <Text style={{color:'black',fontSize:9 ,justifyContent:'center',alignItems: "center",margin:5}}>평점 4.87</Text>
                <Icon1  size={9} name="message" />
                <Text style={{color:'black',fontSize:9 ,justifyContent:'center',alignItems: "center",margin:5}}>리뷰 67</Text>
                </View>
                <View style={{flexDirection:'row',alignItems: "center",width:110,marginTop:1,marginLeft:10,marginRight:5,}}>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,backgroundColor:'grey'}}>무료배송</Text>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,backgroundColor:'grey'}}>최저가</Text>
                <Icon  size={9} name="ios-arrow-down" />
                <Text style={{color:'blue',fontSize:9 ,alignItems: "center",margin:1,}}>99%</Text>
                </View>
                </View>


                <View style={{ flexDirection:'column',alignItems: "center",width:'30%',marginTop:15,marginLeft:10,marginRight:5}}>
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
                <Icon  size={9} name="ios-star" />
                <Text style={{color:'black',fontSize:9 ,justifyContent:'center',alignItems: "center",margin:5}}>평점 4.87</Text>
                <Icon1  size={9} name="message" />
                <Text style={{color:'black',fontSize:9 ,justifyContent:'center',alignItems: "center",margin:5}}>리뷰 67</Text>
                </View>
                <View style={{flexDirection:'row',alignItems: "center",width:110,marginTop:1,marginLeft:10,marginRight:5,}}>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,backgroundColor:'grey'}}>무료배송</Text>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,backgroundColor:'grey'}}>최저가</Text>
                <Icon  size={9} name="ios-arrow-down" />
                <Text style={{color:'blue',fontSize:9 ,alignItems: "center",margin:1,}}>99%</Text>
                </View>
                </View>

                <View style={{ flexDirection:'column',alignItems: "center",width:'30%',marginTop:15,marginLeft:10,marginRight:5}}>
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
                <Icon  size={9} name="ios-star" />
                <Text style={{color:'black',fontSize:9 ,justifyContent:'center',alignItems: "center",margin:5}}>평점 4.87</Text>
                <Icon1  size={9} name="message" />
                <Text style={{color:'black',fontSize:9 ,justifyContent:'center',alignItems: "center",margin:5}}>리뷰 67</Text>
                </View>
                <View style={{flexDirection:'row',alignItems: "center",width:110,marginTop:1,marginLeft:10,marginRight:5,}}>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,backgroundColor:'grey'}}>무료배송</Text>
                <Text style={{color:'black',fontSize:9 ,alignItems: "center",margin:1,backgroundColor:'grey'}}>최저가</Text>
                <Icon  size={9} name="ios-arrow-down" />
                <Text style={{color:'blue',fontSize:9 ,alignItems: "center",margin:1,}}>99%</Text>
                </View>
                </View>

            </View>
      </ScrollView>
    );
  }
}
