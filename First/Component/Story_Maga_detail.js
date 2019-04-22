import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView,Text, View, TouchableOpacity, Image, Dimensions, TextInput} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
//import Main_Page from './Component/Main_Page';
//import IonIcon from 'react-native-vector-icons/Ionicons';
const fullwidth = Dimensions.get('window').width; 

export default class App extends Component{
  render() {
    return (
        <View style={styles.container}>
           <ScrollView>
             <View style={{flexDirection: "column", marginTop: 10}}>
                 <Image source={require('../assets/images/opt.jpg')} style={{width: '100%'}}/>
                 <View style={{flexDirection: "row", marginTop: 6}}>
                   <Text style={{textAlign: 'left', fontSize: 15, color: 'blue'}}>공지</Text>
                   <Text style={{textAlign: 'left', fontSize: 14, color: 'black'}}> TITLE 텍스트</Text>
                 </View>
                 <Text style={{textAlign: 'left', fontSize: 10, color: 'black',marginTop: 10, marginBottom: 20}}>  By 내꾸 2019-03-01</Text>    
                 <View style={styles.top}>
                     <View style={{flexDirection: 'row', backgroundColor: 'grey', height: 50 }}>
                        <View style={{flexDirection: 'column',alignItems: 'center', marginTop: 5}}>
                           <View style={{width: fullwidth / 4 -20, marginHorizontal: 5}}>
                           <Text style={{fontSize: 12}}>모델명</Text>
                           <Text style={{fontSize: 12, marginTop: 8}}>기간</Text>
                           </View>
                           
                        </View>
                        <View style={{flexDirection: 'column',alignItems: 'center', marginTop: 5}}>
                         <View style={{width: fullwidth / 4 -20, marginHorizontal: 5}}>
                           <Text style={{fontSize: 12}}>스타일</Text>
                           <Text style={{fontSize: 12, marginTop: 8}}>컬러  </Text>
                         </View>
                           
                        </View>
                        <View style={{flexDirection: 'column',alignItems: 'center', marginTop: 5}}>
                         <View style={{width: fullwidth / 4 -20, marginHorizontal: 5}}>
                           <Text style={{fontSize: 12}}>작업</Text>
                           <Text style={{fontSize: 12, marginTop: 8}}>지역</Text>
                         </View>
                           
                        </View>
                        <View style={{flexDirection: 'column',alignItems: 'center', marginTop: 5}}>
                         <View style={{width: fullwidth / 4 -20, marginHorizontal: 5}}>
                           <Text style={{fontSize: 12}}>분야</Text>
                           
                         </View>
                           
                        </View>
                   </View>


               
                 </View>

                 <Image source={require('../assets/images/tea.jpeg')} style={{width: '100%', marginTop: 15}}/>
                 <Text style={{textAlign: 'left', fontSize: 12, color: 'black',marginTop: 10, marginBottom: 40}}>3년 전 새집 소개 이후 다시 인사드려요.</Text> 
                 <View style={{flexDirection: 'column', borderTopWidth: 1,  marginBottom: 5}}>
                   <View style={{flexDirection: 'row',marginBottom:2, marginTop: 5}}>
                       <View style={{flexDirection: 'column',alignItems: 'center'}}>
                         <View style={styles.butti}>
                           <Text style={{color: 'white'}}>999</Text>
                         </View>
                         <Text style={{color: 'blue',marginTop: 2}}>팔로우</Text>
                       </View>

                       <View style={{flexDirection: 'column',alignItems: 'center'}}>
                         <View style={styles.butti}>
                           <Text style={{color: 'white'}}>999</Text>
                         </View>
                         <Text style={{color: 'blue',marginTop: 2}}>좋아요</Text>
                       </View>

                       <View style={{flexDirection: 'column',alignItems: 'center'}}>
                         <View style={styles.butti}>
                           <Text style={{color: 'white'}}>999</Text>
                        </View>
                        <Text style={{color: 'blue',marginTop: 2}}>스크랩(찜)</Text>
                       </View>

                       <View style={{flexDirection: 'column',alignItems: 'center'}}>
                        <View style={styles.butti}>
                           <Text style={{color: 'white'}}>999</Text>
                        </View>
                        <Text style={{color: 'blue',marginTop: 2}}>댓글</Text>
                       </View>

                       <View style={{flexDirection: 'column',alignItems: 'center'}}>
                        <View style={styles.butti}>
                           <Text style={{color: 'white'}}>999</Text>
                        </View>
                        <Text style={{color: 'blue',marginTop: 2}}>공유</Text>
                       </View>
                  
                   </View>
                 </View>

                 <View style={{flexDirection: "row",justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 6}}>
							
					<TouchableOpacity>
					  <IonIcon name="ios-arrow-back" size={25} color="black"/>
							
					</TouchableOpacity>
                    <View style={{flexDirection: 'row', marginTop: 3}}>
				      <Text style={{textAlign: 'left', fontSize: 15, color: 'blue', paddingLeft: 10}}>공지</Text>
                      <Text style={{textAlign: 'left', fontSize: 14, color: 'black'}}> TITLE 텍스트</Text>
                    </View>
                 </View>    

                 <Text style={{textAlign: 'left', fontSize: 14, color: 'black'}}>사진1  TITLE</Text>
                 <Image source={require('../assets/images/tea.jpeg')} style={{width: '100%', marginTop: 10}}/>			

                <View style={{flexDirection: 'row',marginTop:15 }}>
                  <Image source={require('../assets/images/01.jpg')} style={{width: fullwidth / 4 - 15, height: 90,marginHorizontal: 5}}/>
                  <Image source={require('../assets/images/02.jpg')} style={{width: fullwidth / 4 - 15, height: 90,marginHorizontal: 5}}/>
                </View>  
                <Text style={{textAlign: 'left', fontSize: 14, color: 'black', marginTop: 5}}>사진2  TITLE</Text>
                <Image source={require('../assets/images/tea.jpeg')} style={{width: '100%', marginTop: 10}}/>
                <Image source={require('../assets/images/01.jpg')} style={{width: fullwidth / 4 - 15, height: 90,marginHorizontal: 5, marginTop: 10}}/>
                <Text style={{textAlign: 'left', fontSize: 12, color: 'black',marginTop: 10, marginBottom: 10}}>가성비 좋은 제품을 하나 보여드리고 싶어서...</Text>
                <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 10, borderBottomWidth: 1}}> 
                    <TouchableOpacity onPress={this._onPressButton}>
              
                     <View style={styles.button}>

                        <Text>#소나타</Text>
                     </View>
                   </TouchableOpacity>
                   <TouchableOpacity onPress={this._onPressButton}>
                     <View style={styles.button}>
                       <Text>#새집</Text>
                     </View>  
                     
                   </TouchableOpacity>
                   <TouchableOpacity onPress={this._onPressButton}>
                     <View style={styles.button}>

                       <Text>#팁</Text>
                     </View>
                   </TouchableOpacity>
                </View>
                
                <View style={{flexDirection: 'row', height: 70}}>
                  <Image source={require('../assets/images/01.jpg')} style={{borderRadius: 28, width: 55, height: 60 }}/>
                  <View style={{flexDirection: 'column', marginHorizontal: 6, marginTop: 10, marginBottom: 5}}>
                     <View style={{flexDirection: 'row'}}>
                       <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black', textAlignVertical: 'left'  }}>절세미남</Text>
                       <Text style={{fontSize: 14, fontWeight: 'bold', color: 'blue', textAlignVertical: 'left' }}> · 팔로우</Text>
                     </View> 
                       <Text style={{fontSize: 10, textAlignVertical: 'left' , marginTop: 5}}>30대 싱글녀가 꾸며가는 세상</Text>
                  </View>
                </View>
                <TouchableOpacity onPress={this._onPressButton}>
                  <View style={styles.butt}>
                     <Text>+ 더보기</Text>
                  </View>
                </TouchableOpacity>
                <View style={{flexDirection: 'column', marginTop: 10}}>
                   <View style={{flexDirection: 'row',justifyContent:'space-between', marginBottom: 5}}>  
                      <Text style={{textAlign: 'left', fontSize: 18}}>이 스토리(매거진)에 소개된 제품</Text>
                      <Text style={{textAlign: 'right', fontSize: 15}}>+ 전체보기</Text>             
                   </View>
                   <ScrollView 
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      showsVerticalScrollIndicator={false}>
                         <Image source={require('../assets/images/01.jpg')} style={{width: fullwidth / 3 - 20, height: 110,marginHorizontal: 3}}/>
                         <Image source={require('../assets/images/02.jpg')} style={{width: fullwidth / 3 - 20, height: 110,marginHorizontal: 3}}/>
                         <Image source={require('../assets/images/03.jpg')} style={{width: fullwidth / 3 - 20, height: 110,marginHorizontal: 3}}/>
                         <Image source={require('../assets/images/04.jpg')} style={{width: fullwidth / 3 - 20, height: 110,marginHorizontal: 3}}/>
                   </ScrollView>
                   <View style={{flexDirection: 'row', marginTop: 20, justifyContent: 'space-between', borderBottomWidth: 1, borderTopWidth:1}}>

                    <Text style={{textAlign: "left", fontSize: 12, marginTop: 25}}>좋아요 5 · 스크랩 4 · 조회 860</Text>
                    <TouchableOpacity onPress={this._onPressButton}>
                      <View style={styles.butto}>
                         <Text>신고</Text>
                        
                      </View>
                    </TouchableOpacity>
                   </View>

                   <View style={{flexDirection: 'column', marginTop: 10, borderBottomWidth: 1}}>
                      <Text style={{textAlign:'left', fontSize: 12}}>총 1개 댓글</Text>
                      <View style={{flexDirection: 'row', height: 70, marginTop: 10  }}>
                           <Image source={require('../assets/images/01.jpg')} style={{borderRadius: 28, width: 55, height: 60 }}/>
                           <View style={{flexDirection: 'column', marginHorizontal: 6, marginTop: 10, marginBottom: 5}}>
                              <View style={{flexDirection: 'row'}}>
                                 <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black', textAlignVertical: 'left'  }}>절세미남</Text>
                                 <Text style={{fontSize: 14, fontWeight: 'bold', color: 'blue', textAlignVertical: 'left' }}> · 팔로우</Text>
                              </View> 
                              <Text style={{fontSize: 10, textAlignVertical: 'left' , marginTop: 5}}>아주 맘에 들어요!</Text>
                              
                                <Text style={{fontSize: 7, textAlignVertical: 'left' , marginTop: 5}}>1분·♥1좋아요 ·삭제</Text>
                            </View>    


                      </View>
                              
                            
                
                      
                      <View style={{flexDirection: 'row', justifyContent:'flex-end',alignItems: 'flex-end',marginBottom: 5}}>

                        <TouchableOpacity onPress={this._onPressButton}>
                        <View style={styles.butto}>

                        <Text>신고</Text>
                        </View>
                        </TouchableOpacity>
                        
                      </View>

                   </View>
                   
                   <Text style={{textAlign: 'left', fontWeight: '500', fontSize: 18, marginTop: 15}}>비슷한 집량 모델의 추천 스토리(매거진)</Text>
                   <Image source={require('../assets/images/tea.jpeg')} style={{width: '100%', marginTop: 10}}/>
                   <Text style={{textAlign: 'center', fontSize: 15, marginTop: 10}}>5월을 맞아 준비해 봤습니다.</Text>
                   <View style={{marginTop: 10,  justifyContents: 'center', alignItems: 'center'}}>
                       <View style={{flexDirection: 'row',alignContent: 'space-between'}}>
                           <Image source={require('../assets/images/01.jpg')} style={{borderRadius: 20, width: 40, height: 40 }}/>
                           <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black', marginTop: 7 }}>  절세미남</Text>
                           <Text style={{fontSize: 12, fontWeight: 'bold', color: 'blue', marginTop: 8 }}> · 팔로우</Text>
                       </View>
                   </View>
                   <Text style={{textAlign: "center", fontSize: 10, marginTop: 10, marginBottom: 20}}>좋아요 5 · 스크랩 4 · 조회 860</Text>


                </View>
             
             
             </View>
           </ScrollView>
        </View>
    );
}
};





const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
    flex: 1,
    backgroundColor: 'white',
		paddingHorizontal: 10
    },
    top: {
        flexDirection: 'column',
        height: 50
        //backgroundColor: 'grey'
        
        
    },
    topop: {
        paddingTop: 10,
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginTop:10
      },
    butti: {
        flexDirection: 'row',
        color: 'grey',
        width:  fullwidth / 5 - 20, 
        height: 25,
        borderWidth: 1,
        marginHorizontal: 7,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        borderRadius: 12,
        padding: 3
      },
    button: {
        flexDirection: 'row',
        color: 'grey',
        width:  fullwidth / 3 - 35, 
        height: 30,
        borderWidth: 1,
        marginBottom: 10,
        marginHorizontal: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        borderRadius: 5,
        padding: 3
        
    },
    butt: {
      height: 30,
      borderWidth: 1,
      borderRadius: 5,
      marginHorizontal: 2,
      marginBottom: 5,
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
      marginHorizontal:5,
      marginTop: 13,
      marginBottom: 13,
      backgroundColor: 'grey',
      padding: 3
    },
}
);

