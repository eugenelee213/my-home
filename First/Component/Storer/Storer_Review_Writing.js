import React, {Component} from 'react';
import { Text, View,ScrollView,Image,} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Accordion from 'react-native-collapsible/Accordion';
import { TextInput } from 'react-native-gesture-handler';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';

const SECTIONS = [
    {
      title: '상품의 사진을 올려주세요.(선택)',
      content: '상품과 관련 없거나 부적합한 사진을 리뷰에 등록하시는 경우, 사전경고 없이 포인트 회수와 함께 사진이 삭제될수 있습니다.'
    },
  ];

export default class HelloWorldApp extends Component {
    state = {
        activeSections: []
      };
    
      _renderSectionTitle = section => {
        return (
          <View style={{height:20,margin:5}}>
          </View>
        );
      };
     
      _renderHeader = section => {
        return (
          <View style={{flexDirection:'row',borderWidth:1,backgroundColor:'grey' }}>
            <Text style={{width:'90%',fontSize:20,color:'black',margin:5}}>{section.title}</Text>
            <Icon style={{margin:5}} size={20} name="ios-arrow-down" color="black"/>
          </View>
        );
      };
     
      _renderContent = section => {
        return (
          <View style={{borderWidth:1,backgroundColor:'grey'}}>
            <Text style={{fontSize:20,color:'black',margin:5,height:100}}>{section.content}</Text>
          </View>
        );
      };
     
      _updateSections = activeSections => {
        this.setState({ activeSections });
      };
    
  render() {
    const handlePress1 = () => false
    let pic = {
      uri: '../../assets/images/01.jpg'
    };
    
    return (
      <ScrollView style={{ flexDirection:'column',flex:1,}}>
            <View style={{ flexDirection:'row', justifyContent: "center", alignItems: "center"}}>
                
                      <View  onPress = {handlePress1} style={{width:'15%',height:30,margin:5, backgroundColor:'grey',borderWidth:1, justifyContent: "center", alignItems: "center",borderRadius:10,}}>
                      <Icon  size={25} name="ios-arrow-back" color="black"  justifyContent= "center" alignItems= "center" />
                      </View >
                  
                      
                      <Text style={{textAlign: 'center',width:'50%',textAlignVertical:'center',fontWeight: 'bold',color:'black',fontSize: 17,}}>          리뷰 쓰기</Text>
                      
                      
                      <View style={{flexDirection:'row',width:'20%',height:30,margin:5, backgroundColor:'grey',borderWidth:1, borderRadius:12,justifyContent: "center", alignItems: "center",}}>
                        <Icon  onPress = {handlePress1} size={20} name="md-share" color="black"  justifyContent= "center" alignItems= "center" />
                        <Text style={{fontSize:20,}}>    999 </Text>
                      </View >
                      <Icon2 style={{margin:5,width:'10%'}} name="shopping-cart" size={20} color="blue" />
            </View>
            <View style={{ flexDirection:'row', justifyContent: "center", alignItems: "center", height: 120,margin:5}}>
                <Image source={require('../../assets/images/01.jpg')} style={{width:'30%', height: 120,margin:5}}/>
                <View style={{ flexDirection:'column',width:'50%',}}>
                <Text style={{height:'50%', fontSize:20,textAlignVertical:'bottom'}}>집안용 공기청정기</Text>
                <Text style={{height:'50%', fontSize:15,textAlignVertical:'bottom',color:'blue'}}>사진(프리미엄) 100p</Text>
                </View>
                <Text style={{fontSize:15,width:'15%',height:'30%',margin:5, backgroundColor:'grey',borderWidth:1, borderRadius:12,justifyContent: "center", alignItems: "center",color:'black',textAlign:'center',textAlignVertical:'center'}}>선택</Text>
            </View>
            <View style={{ flexDirection:'row', height: 30,margin:5}}>
                <Text  style={{width:'30%', height: 30,margin:5,fontSize:20,color:'black'}}>만족도</Text>
                <Icon size={15} style={{margin:1,height: 30,textAlignVertical:'center'}} name="ios-star" color="blue"  />
                <Icon size={15} style={{margin:1,height: 30,textAlignVertical:'center'}} name="ios-star" color="blue"  />
                <Icon size={15} style={{margin:1,height: 30,textAlignVertical:'center'}} name="ios-star" color="blue"  />
                <Icon size={15} style={{margin:1,height: 30,textAlignVertical:'center'}} name="ios-star" color="blue"  />
                <Icon size={15} style={{margin:1,height: 30,textAlignVertical:'center'}} name="ios-star-outline" color="blue" />
            </View>
            <Text style={{width:'100%',fontSize:15,textAlignVertical: "center", textAlign: "center"}}>별점을 선택해주세요.</Text>
            <Accordion
                sections={SECTIONS}
                activeSections={this.state.activeSections}
                renderSectionTitle={this._renderSectionTitle}
                renderHeader={this._renderHeader}
                renderContent={this._renderContent}
                onChange={this._updateSections}
            />
            <ScrollView style={{ flexDirection:'row',margin:5,}} horizontal='true'>
                <Image source={require('../../assets/images/01.jpg')} style={{width:100, height: 100,margin:5}}/>
                <Image source={require('../../assets/images/01.jpg')} style={{width:100, height: 100,margin:5}}/>
                <Image source={require('../../assets/images/01.jpg')} style={{width:100, height: 100,margin:5}}/>
                <Image source={require('../../assets/images/01.jpg')} style={{width:100, height: 100,margin:5}}/>
                <Image source={require('../../assets/images/01.jpg')} style={{width:100, height: 100,margin:5}}/>
                <Image source={require('../../assets/images/01.jpg')} style={{width:100, height: 100,margin:5}}/>
            </ScrollView>
            <View style={{ flexDirection:'column',margin:5,justifyContent: "center",alignItems: "center",}}>
            <Text style={{width:'100%',fontSize:20,margin:5,color:'black'}}>리뷰를 작성해주세요.</Text>
            <TextInput style={{width:'90%',fontSize:15,borderWidth:1,height:40}}>입력</TextInput>
            <Text style={{width:'100%',fontSize:20,margin:5,color:'black'}}>직접 제품을 사용하고 작성하는 리뷰인가요?</Text>
            </View>
            <CircleCheckBox
                checked={true}
                onToggle={(checked) => console.log('My state is: ', checked)}
                labelPosition={LABEL_POSITION.RIGHT}
                label="예. 그리고 오늘의집 리뷰 정책 에도 동의 합니다."
            />
            <View style={{ flexDirection:'row',margin:10}}>
            <Icon size={5} style={{margin:1,height: 30,textAlignVertical:'center'}} name="ios-star"  />
            <Text style={{width:'100%',fontSize:15,margin:5,color:'black'}}>작성해주신 리뷰는 심사한 뒤 등록 및 포인트 지급을 합니다.</Text>
            </View>
            <Text onPress = {handlePress1} style={{height:30,margin:10, backgroundColor:'grey',borderWidth:1, textAlignVertical: "center", textAlign: "center",borderRadius:5,}}>완료하기</Text>
      </ScrollView>
    );
  }
}
