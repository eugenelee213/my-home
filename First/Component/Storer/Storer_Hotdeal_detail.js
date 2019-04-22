import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, TouchableOpacity, Text, Image, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Accordion from 'react-native-collapsible/Accordion';
const fullwidth = Dimensions.get('window').width; 
const SECTIONS = [
  {
    title: '1',
    content: '1'
  },
];

const SECTIONS1 = [
  {
    title: '9',
    content: '9'
  },
];

export default class App extends Component {
  state = {
      activeSections: []
    };
   
    _renderSectionTitle = section => {
      return (
        <View style={{height:5,margin:5}}>
        </View>
      );
    };
   
    _renderHeader = section => {
      return (
        <View style={{flexDirection:'row',borderWidth:1,backgroundColor:'grey' }}>
          <Text style={{fontSize:15,color:'black',margin:5,marginLeft:15}}>포인트 </Text>
          <Text style={{fontSize:15,color:'blue',margin:5,}}>150P </Text>
          <Text style={{fontSize:15,color:'black',margin:5,}}>VIP등급은 500p 적립     </Text>
          <Icon style={{marginLeft:80,margin:5}} size={15} name="ios-arrow-up" color="black"/>
          <Icon style={{margin:5}} size={15} name="ios-arrow-down" color="black"/>
        </View>
      );
    };
   
    _renderContent = section => {
      return (
       <View style={{flexDirection:'column',borderWidth:1}}> 
        <View style={{flexDirection:'row',backgroundColor:'grey' }}>
          <Text style={{fontSize:13,color:'black',}}>기본적립 배송비와 적립금 사용분을 제외한 실 결제금액의 </Text>
          <Text style={{fontSize:13,color:'blue',}}>1% </Text>
          <Text style={{fontSize:13,color:'black',}}>적립</Text>
        </View>
        <View style={{flexDirection:'row',backgroundColor:'grey'}}>
          <Text style={{fontSize:13,color:'black',marginLeft:52}}>VIP등급은 </Text>
          <Text style={{fontSize:13,color:'blue',}}>2% </Text>
          <Text style={{fontSize:13,color:'black',}}>적립</Text>
        </View>
        <View style={{flexDirection:'row',backgroundColor:'grey',textAlignVertical:'center'}}>
          <Icon size={10} style={{marginLeft:52}} name="ios-star"/>
          <Text style={{fontSize:13,color:'black'}}> 최근 6개월동안 </Text>
          <Text style={{fontSize:13,color:'blue',}}>2회 + 50만원 이상 </Text>
          <Text style={{fontSize:13,color:'black',}}>구매시 VIP승급</Text>
        </View>
        <Text style={{fontSize:13,color:'black',backgroundColor:'grey'}}>적립기준 배송완료일을 기준으로 7일 후 적립</Text>
        <Text style={{fontSize:13,color:'black',backgroundColor:'grey'}}>유효기간 적립일로부터 6개월 후 자동소멸</Text>
        <Text style={{fontSize:13,color:'black',backgroundColor:'grey'}}>사용기준 내내꾸미기에서 구매 결제시에만 사용가능</Text>
        <Text style={{fontSize:13,color:'black',backgroundColor:'grey'}}>사용제한 1)최종 실결제금액기준 10,000원 이상 구매시 사용가능</Text>
        <View style={{backgroundColor:'grey',textAlignVertical:'center'}}>
        <Text style={{fontSize:13,color:'black',backgroundColor:'grey',marginLeft:52}}>2)기획전 중 일부 상품 사용불가</Text>
        </View>
        <View style={{flexDirection:'row',backgroundColor:'grey',textAlignVertical:'center'}}>
          <Icon size={10} style={{marginLeft:52}} name="ios-star"/>
          <Text style={{fontSize:13,color:'black'}}> 배송비제외</Text>
        </View>
      </View>
      );
    };
   
    _updateSections = activeSections => {
      this.setState({ activeSections });
    };
   
   state1 = {
      activeSections1: []
    };
   
    _renderSectionTitle1 = section1 => {
      return (
        <View style={{height:5,margin:5}}>
        </View>
      );
    };
   
    _renderHeader1 = section1 => {
      return (
        <View style={{flexDirection:'row',borderWidth:1,backgroundColor:'grey' }}>
          <Icon1 style={{marginLeft:15,margin:5}} size={15} name="thumb-up-outline" color="blue"/>
          <Text style={{fontSize:15,color:'blue',margin:1,}}>990 </Text>
          <Icon1 style={{margin:5}} size={15} name="thumb-down-outline" color="blue"/>
          <Text style={{fontSize:15,color:'black',margin:1,}}>90</Text>   
          <Icon style={{marginLeft:260,margin:5}} size={15} name="ios-arrow-up" color="black"/>  
          <Icon style={{margin:5}} size={15} name="ios-arrow-down" color="black"/>     
        </View>
      );
    };
   
    _renderContent1 = section1 => {
      return (
       <View style={{borderWidth:1,backgroundColor:'grey',height:20}}> 
          <Text style={{fontSize:13,color:'black',}}>품질 , 가격 등의 만족도로 상품 개선할 수 있음</Text>
       
      </View>
      );
    };
   
    _updateSections1 = activeSections1 => {
      this.setState({ activeSections1 });
    };



  render() {
    const handlePress1 = () => false
    let pic = {
      uri: '../../assets/images/01.jpg'
    };
    return (
      <ScrollView style={{ flexDirection:'column',flex:1}}>
            <View style={{  margin:5,flexDirection:'row', justifyContent: "center", alignItems: "center"}}>
                
                      <View  onPress = {handlePress1} style={{width:'15%',height:30,margin:5, backgroundColor:'grey',borderWidth:1, justifyContent: "center", alignItems: "center",borderRadius:10,}}>
                      <Icon  size={25} name="ios-arrow-back" color="black"  justifyContent= "center" alignItems= "center" />
                      </View >
                  
                      
                      <Text style={{textAlign: 'center',width:'50%',textAlignVertical:'center',fontWeight: 'bold',color:'black',fontSize: 17,}}>     오픈 기념 쿠폰</Text>
                      
                      
                      <View style={{flexDirection:'row',width:'20%',height:30,margin:5, backgroundColor:'grey',borderWidth:1, borderRadius:12,justifyContent: "center", alignItems: "center",}}>
                        <Icon  onPress = {handlePress1} size={20} name="md-share" color="black"  justifyContent= "center" alignItems= "center" color="white" />
                        <Text style={{fontSize:20,color:'white'}}>    999 </Text>
                      </View >
                      <Icon2 style={{margin:5,width:'10%'}} name="shopping-cart" size={20} color="blue" />
            </View>
            <View onPress = {handlePress1} style={{width:'100%', alignItems: "center"}}>
                <Image source={require('../../assets/images/01.jpg')} style={{width: '95%', height: 250}}/>
            </View>
            <View style={{flexDirection:'row',alignItems: "center",margin:5}}>
            <View style={{flexDirection:'column',alignItems: "center",margin:5}}>
            <Text style={{width:'100%',color:'black',fontSize:15 ,alignItems: "center",margin:5}}>오토반 비트윈 업충전거치 집안용 멀티포켓 … </Text>
            <View style={{width:'100%',flexDirection:'row',alignItems: "center",margin:5}}>
                <Text style={{fontSize:15 ,alignItems: "center",margin:1,color:'blue'}}>55%</Text>
                <Text style={{color:'black',fontSize:15 ,alignItems: "center",margin:1,}}>35,000</Text>
                <Text style={{color:'black',fontSize:10 ,alignItems: "center",margin:1,}}>원</Text>
                <Text style={{color:'black',fontSize:15 ,alignItems: "center",margin:1,textDecorationLine:'line-through'}}>35,000</Text>
                <Text style={{color:'black',fontSize:10 ,alignItems: "center",margin:1,}}>원</Text>
            </View>
            </View>
            <View style={{flexDirection:'row',width:'20%',height:30,margin:5, backgroundColor:'grey',borderWidth:1, borderRadius:12,justifyContent: "center", alignItems: "center",}}>
                <Icon  onPress = {handlePress1} size={20} name="md-share" color="black"  justifyContent= "center" alignItems= "center" color="white" />
                <Text style={{fontSize:20,color:'white'}}>    999 </Text>
            </View >
            </View>
            <Accordion
                sections={SECTIONS}
                activeSections={this.state.activeSections}
                renderSectionTitle={this._renderSectionTitle}
                renderHeader={this._renderHeader}
                renderContent={this._renderContent}
                onChange={this._updateSections}
            />
            <View style={{flexDirection:'row',alignItems: "center",margin:5}}>
            <Text style={{fontSize:15,margin:5,color:'black'}}>배송비</Text>
            <Text style={{fontSize:15,margin:5,backgroundColor:'grey',width:100,textAlign:'center',color:'white'}}>무료배송</Text>
            </View>
            <View style={{flexDirection:'row',margin:5, justifyContent: "center", alignItems: "center",backgroundColor:'grey',borderWidth:1,borderRadius:10}}>
            <Text style={{color:'black',backgroundColor:'grey',width:'80%',textAlign:'center',fontSize:15}}>리뷰 228</Text>
            <View style={{backgroundColor:'grey',height:35,width:'20%', justifyContent: "center", alignItems: "center",borderWidth:1,borderRadius:10}}>
            <Icon  size={15} name="ios-arrow-forward" color="black" />
            </View>
            </View>
            <View style={{flexDirection:'row',margin:10}}>
              <View style={{flexDirection:'column',width:'20%', justifyContent: "center", alignItems: "center"}}>
              <Text style={{color:'black',textAlignVertical:'center',textAlign:'center',fontSize:20}}>4.17</Text>
              <View style={{flexDirection:'row',width:'20%', justifyContent: "center", alignItems: "center",}}>
                <Icon size={15} style={{margin:1,textAlignVertical:'center'}} name="ios-star" color="red"  />
                <Icon size={15} style={{margin:1,textAlignVertical:'center'}} name="ios-star" color="red"  />
                <Icon size={15} style={{margin:1,textAlignVertical:'center'}} name="ios-star" color="red"  />
                <Icon size={15} style={{margin:1,textAlignVertical:'center'}} name="ios-star" color="red"  />
                <Icon size={15} style={{margin:1,textAlignVertical:'center'}} name="ios-star-outline" color="red" />
              </View>
              </View>
              
              <View style={{flexDirection:'column',margin:1,height:70,width:'30%', justifyContent: "center", alignItems: "center"}}>
              <View style={{flexDirection:'row', justifyContent: "center", alignItems: "center",}}>
                <Icon size={12} style={{margin:1,textAlignVertical:'center'}} name="ios-star" color="red"  />
                <Icon size={12} style={{margin:1,textAlignVertical:'center'}} name="ios-star" color="red"  />
                <Icon size={12} style={{margin:1,textAlignVertical:'center'}} name="ios-star" color="red"  />
                <Icon size={12} style={{margin:1,textAlignVertical:'center'}} name="ios-star" color="red"  />
                <Icon size={12} style={{margin:1,textAlignVertical:'center'}} name="ios-star" color="red"  />
                
              </View>
              <View style={{flexDirection:'row', justifyContent: "center", alignItems: "center",}}>
                <Icon size={12} style={{margin:1,textAlignVertical:'center'}} name="ios-star" color="red"  />
                <Icon size={12} style={{margin:1,textAlignVertical:'center'}} name="ios-star" color="red"  />
                <Icon size={12} style={{margin:1,textAlignVertical:'center'}} name="ios-star" color="red"  />
                <Icon size={12} style={{margin:1,textAlignVertical:'center'}} name="ios-star" color="red"  />
                <Icon size={12} style={{margin:1,textAlignVertical:'center'}} name="ios-star-outline" color="red" />
              </View>
              <View style={{flexDirection:'row', justifyContent: "center", alignItems: "center",}}>
                <Icon size={12} style={{margin:1,textAlignVertical:'center'}} name="ios-star" color="red"  />
                <Icon size={12} style={{margin:1,textAlignVertical:'center'}} name="ios-star" color="red"  />
                <Icon size={12} style={{margin:1,textAlignVertical:'center'}} name="ios-star" color="red"  />
                <Icon size={12} style={{margin:1,textAlignVertical:'center'}} name="ios-star-outline" color="red" />
                <Icon size={12} style={{margin:1,textAlignVertical:'center'}} name="ios-star-outline" color="red" />
              </View>
              <View style={{flexDirection:'row', justifyContent: "center", alignItems: "center",}}>
                <Icon size={12} style={{margin:1,textAlignVertical:'center'}} name="ios-star" color="red"  />
                <Icon size={12} style={{margin:1,textAlignVertical:'center'}} name="ios-star" color="red"  />
                <Icon size={12} style={{margin:1,textAlignVertical:'center'}} name="ios-star-outline" color="red" />
                <Icon size={12} style={{margin:1,textAlignVertical:'center'}} name="ios-star-outline" color="red" />
                <Icon size={12} style={{margin:1,textAlignVertical:'center'}} name="ios-star-outline" color="red" />
              </View>
              <View style={{flexDirection:'row', justifyContent: "center", alignItems: "center",}}>
                <Icon size={12} style={{margin:1,textAlignVertical:'center'}} name="ios-star" color="red"  />
                <Icon size={12} style={{margin:1,textAlignVertical:'center'}} name="ios-star-outline" color="red" />
                <Icon size={12} style={{margin:1,textAlignVertical:'center'}} name="ios-star-outline" color="red" />
                <Icon size={12} style={{margin:1,textAlignVertical:'center'}} name="ios-star-outline" color="red" />
                <Icon size={12} style={{margin:1,textAlignVertical:'center'}} name="ios-star-outline" color="red" />
              </View>
              </View>
              <View style={{flexDirection:'column',margin:1,height:70,width:'30%',}}>
              <View style={{flexDirection:'row',textAlignVertical:'center'}}>
                <View style={{margin:1,height:10,width:90,backgroundColor:'red',color:'black'}}></View>
                <Text style={{margin:1,height:12,color:'black',fontSize:10,marginLeft:10}}>90</Text>
              </View>
              <View style={{flexDirection:'row',textAlignVertical:'center'}}>
              <View style={{margin:1,height:10,width:100,backgroundColor:'red',color:'black'}}></View>
                <Text style={{margin:1,height:12,color:'black',fontSize:10,}}>100</Text>
              </View>
              <View style={{flexDirection:'row',textAlignVertical:'center'}}>
              <View style={{margin:1,height:10,width:40,backgroundColor:'red',color:'black'}}></View>
                <Text style={{margin:1,height:12,color:'black',fontSize:10,marginLeft:60}}>26</Text>
              </View>
              <View style={{flexDirection:'row',textAlignVertical:'center'}}>
              <View style={{margin:1,height:10,width:26,backgroundColor:'red',color:'black'}}></View>
                <Text style={{margin:1,height:12,color:'black',fontSize:10,marginLeft:74}}>11</Text>
              </View>
              <View style={{flexDirection:'row',textAlignVertical:'center'}}>
              <View style={{margin:1,height:10,width:10,backgroundColor:'red',color:'black'}}></View>
                <Text style={{margin:1,height:12,color:'black',fontSize:10,marginLeft:90}}>1</Text>
              </View>
              </View>
            </View>
            <View style={{flexDirection:'row',margin:5, justifyContent: "center",height:35, alignItems: "center",backgroundColor:'grey',borderWidth:1,borderRadius:10}}>
              <Text style={{color:'black',width:'80%',textAlign:'center',fontSize:15}}>블스원 브랜드 제품 더 보기</Text>
            </View>
            <Accordion
                sections={SECTIONS1}
                activeSections={this.state1.activeSections1}
                renderSectionTitle={this._renderSectionTitle1}
                renderHeader={this._renderHeader1}
                renderContent={this._renderContent1}
                onChange={this._updateSections1}
            />
        
            <Image onPress = {handlePress1} source={require('../../assets/images/01.jpg')} style={{marginTop:5,width: '100%', height: 200}}/>
            <View style={{flexDirection:'row',marginTop:10,width: '100%',justifyContent: "center", alignItems: "center"}}>
            <Icon2  style={{marginTop:5,width: '20%',height:25,textAlign:'center', textAlignVertical: "center",backgroundColor:'grey',borderRadius:12,borderWidth:1}} size={20} name="book" color="white"  justifyContent= "center" alignItems= "center" />
            <View style={{marginTop:5,width: '75%',height:30,justifyContent: "center", alignItems: "center"}}>
            <Text  style={{width: '90%',height:25,textAlign:'center', textAlignVertical: "center",backgroundColor:'grey',borderRadius:5,borderWidth:1,fontSize:20}}>구매하기(포인트 150p 적립)</Text>
            </View>
            </View>
            <View style={{ margin:5,flexDirection:'row', justifyContent: "center", alignItems: "center"}}>
                
                      <View  onPress = {handlePress1} style={{width:'10%',height:30,margin:5, backgroundColor:'grey',borderWidth:1, justifyContent: "center", alignItems: "center",borderRadius:10,}}>
                      <Icon  size={25} name="ios-arrow-back" color="black"  justifyContent= "center" alignItems= "center" />
                      </View >
                  
                      
                      <Text style={{textAlign: 'center',width:'55%',textAlignVertical:'center',fontWeight: 'bold',color:'black',fontSize: 15,}}>오토반 비트윈 업충전거 치 집안용</Text>
                      
                      
                      <View style={{flexDirection:'row',width:'20%',height:30,margin:5, backgroundColor:'grey',borderWidth:1, borderRadius:12,justifyContent: "center", alignItems: "center",}}>
                        <Icon  onPress = {handlePress1} size={20} name="md-share" color="black"  justifyContent= "center" alignItems= "center" color="white" />
                        <Text style={{fontSize:20,color:'white'}}>    999 </Text>
                      </View >
                      <Icon2 style={{margin:5,width:'10%'}} name="shopping-cart" size={20} color="blue" />
            </View>
            <View style={{flexDirection: 'row', marginTop: 30, marginBottom: 10}}> 
                      <TouchableOpacity onPress={this._onPressButton}>
              
                         <View style={styles.button1}>

                           <Text>상품소개</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={this._onPressButton}>
                        <View style={styles.button}>

                           <Text>문의(999)</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={this._onPressButton}>
                        <View style={styles.button}>
                           <View style={{flexDirection: 'column'}}>

                           <Text>판매자정보</Text>
                           <Text style={{fontSize: 10, marginLeft: 6}}>교환/반품</Text>
                           </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <Image source={require('../../assets/images/opt.jpg')}/>

                    <View style={{flexDirection: 'row', marginTop: 30, marginBottom: 10}}> 
                      <TouchableOpacity onPress={this._onPressButton}>
              
                         <View style={styles.button}>

                           <Text>상품소개</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={this._onPressButton}>
                        <View style={styles.button1}>

                           <Text>문의(999)</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={this._onPressButton}>
                        <View style={styles.button}>
                           <View style={{flexDirection: 'column'}}>

                           <Text>판매자정보</Text>
                           <Text style={{fontSize: 10, marginLeft: 6}}>교환/반품</Text>
                           </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                    
                    <View style={{flexDirection: 'row',marginTop: 20}}>
                      <TouchableOpacity onPress={this._onPressButton}>
                          <View style={styles.butt}>
                             <Text>상품 문의하기</Text>
                          </View>
                      </TouchableOpacity>
                    </View>
                    
							      <View style={{flexDirection: 'row',marginTop: 20}}>
                      <Text style={{fontSize: 12, marginLeft: 40, marginRight: 10}}>상품문의</Text>
                      <Text style={{fontSize: 12, marginLeft: 20, marginRight: 10}}>2018-07-15 I</Text>
                      <Text style={{fontSize: 12, marginLeft: 20, marginRight: 10}}>hfgyI3***</Text>
                    </View> 

                    <View style={{flexDirection: 'row',marginTop: 20}}>
                      <Text style={{fontSize: 12, marginLeft: 20, marginRight: 10, color: 'red'}}>Q</Text>
                      <Text style={{fontSize: 12, marginRight: 10}}>주문했는데 21일이나 그 이후에 도착할수있도록 보내주세요</Text>
                      
                    </View>
                    <View style={{flexDirection: 'row',marginTop: 20}}>
                      <TouchableOpacity onPress={this._onPressButton}>
              
                          <View style={styles.button2}>

                            <Text style={{color: 'white'}}>답변완료</Text>
                         </View>
                      </TouchableOpacity>
                      <Text style={{fontSize: 12, marginLeft: 20, marginRight: 10, marginTop: 5}}>2018-07-15 I</Text>
                      <Text style={{fontSize: 12, marginLeft: 20, marginRight: 10, marginTop: 5}}>hfgyI3***</Text>
                    </View> 
					          
                    <View style={{flexDirection: 'row',marginTop: 20}}>
                      <Text style={{fontSize: 12, marginLeft: 20, marginRight: 10, color: 'red'}}>Q</Text>
                      <Text style={{fontSize: 12, marginRight: 10}}>주문했는데 21일이나 그 이후에 도착할수있도록 보내주세요</Text>
                      
                    </View>
                    <View style={{flexDirection: 'row',marginTop: 20}}>
                      <Text style={{fontSize: 12, marginLeft: 20, marginRight: 10, color: 'red'}}>A</Text>
                      <Text style={{fontSize: 12, marginRight: 10}}>판매자 답변입니다</Text>
                      <Text style={{fontSize: 10, marginLeft:10}}>2018-07-15</Text>
                    </View>
                    <View style={{flexDirection: 'row',marginTop: 20}}>
                      <Text style={{fontSize: 12, marginLeft: 20, marginRight: 10, color: 'red'}}>A</Text>
                      <Text style={{fontSize: 12, marginRight: 10}}>개발중:판매자 답변입니다</Text>
                      <Text style={{fontSize: 10, marginLeft:10}}>2018-07-15</Text>
                    </View>

                    <Text style={{fontSize: 8, marginLeft:20, marginTop: 20}}>안녕하세요 내꾸관리자입니다 ㅎ ㅎ ㅎ</Text>
                    <Text style={{fontSize: 8, marginLeft:20}}>배송문의 주셨내요 ㅎ ㅎ ㅎ</Text>
                    <Text style={{fontSize: 8, marginLeft:20}}>수작:안타깝지만 택배로 발송되는 상품이다보니 배송일 지정은 어렵습니다 ᅲᅲ</Text>
                    <Text style={{fontSize: 8, marginLeft:20}}>ㅎ ㅎ ㅎ 오전 8시 기준으로 이후 주문건은 다음날 발송되며 출고이후 수령까지 약 1-2일 가량</Text>
                    <Text style={{fontSize: 8, marginLeft:20}}>ㅎ ㅎ ㅎ소요되는점 참고해주세요</Text>
                    <Text style={{fontSize: 8, marginLeft:20}}>ㅎ ㅎ ㅎ 감사합니다.</Text>
                    <View style={{flexDirection:'row',marginTop:10,width: '100%',justifyContent: "center", alignItems: "center"}}>
                    <Icon2  style={{marginTop:5,width: '20%',height:25,textAlign:'center', textAlignVertical: "center",backgroundColor:'grey',borderRadius:12,borderWidth:1}} size={20} name="book" color="white"  justifyContent= "center" alignItems= "center" />
                    <View style={{marginTop:5,width: '75%',height:30,justifyContent: "center", alignItems: "center"}}>
                    <Text  style={{width: '90%',height:25,textAlign:'center', textAlignVertical: "center",backgroundColor:'grey',borderRadius:5,borderWidth:1,fontSize:20}}>구매하기(포인트 150p 적립)</Text>
                    </View>
                    </View>
      </ScrollView>
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
    butt: {
        height: 30,
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 15,
        //marginBottom: 5,
        width: fullwidth-50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        padding: 3
      },
      butto: {
        //height: 30,
        width: 40,
        
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal:7,
        marginTop: 35,
        
        alignItems: 'flex-end',
        backgroundColor: 'grey',
        padding: 3
      },
      button: {
        flexDirection: 'row',
        color: 'grey',
        width:  fullwidth / 3 - 35, 
        height: 30,
        borderWidth: 1,
        marginHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        borderRadius: 5,
        padding: 3
        
    },
    button1: {
      flexDirection: 'row',
      //color: 'white',
      width:  fullwidth / 3 - 35, 
      height: 30,
      borderWidth: 1,
      marginHorizontal: 15,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 5,
      padding: 3
      
  },
  button2: {
    flexDirection: 'row',
    //color: 'white',
    width:  fullwidth / 3 - 35, 
    height: 30,
    borderWidth: 1,
    marginHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    //borderRadius: 5,
    padding: 3
    
},
}
);