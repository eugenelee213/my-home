import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView,Text, View, TouchableOpacity, Image, Dimensions, TextInput} from 'react-native';

//import Main_Page from './Component/Main_Page';
import IonIcon from 'react-native-vector-icons/Ionicons';
const fullwidth = Dimensions.get('window').width;


export default class App extends Component{
   
  render() {
    return (
        <View style={styles.container}>
          <ScrollView>

          <View style={styles.top}>
							
							<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
							<IonIcon name="ios-arrow-back" size={25} color="black" 
							
							/>
              </TouchableOpacity>
							<Text style={{textAlign: "center", fontSize: 20, width: "100%"}}>휴대폰 거치대</Text>
          </View>

          <View style={{flexDirection: "column", marginTop: 10}}>
            <Image source={require('../../assets/images/01.jpg')} style={{width: '100%', height: 200}}/>
            <Text style={{textAlign: "right", fontSize: 15, marginTop: 3}}>출처 http://cafe.naver.com/1234</Text>
            <Text style={{textAlign: "right", fontSize: 15}}>@ 저작권자</Text>
            <Image source={require('../../assets/images/01.jpg')} style={{borderRadius: 8,width: fullwidth / 3 - 30, height: 110}}/>
          </View>
          
          <View style={styles.high}>
            <Text style={{textAlign: "center", fontSize: 12, marginTop: 6}}>우리 집 바닥에 어울리는 가구 찾아 떠납니다. 같이 하실래요?</Text>
             <View style={{flexDirection: 'row', marginTop: 30, marginBottom: 10}}> 
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
              

          </View>

          <View style={{flexDirection: 'column', marginTop: 10}}>
             <View style={{flexDirection: 'row', height: 70 }}>
                <Image source={require('../../assets/images/01.jpg')} style={{borderRadius: 28, width: 55, height: 60 }}/>
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
            <View style={{flexDirection: 'row',marginTop:20 }}>
                  <Image source={require('../../assets/images/01.jpg')} style={{borderRadius: 8,width: fullwidth / 4 - 15, height: 90,marginHorizontal: 5}}/>
                  <Image source={require('../../assets/images/02.jpg')} style={{borderRadius: 8,width: fullwidth / 4 - 15, height: 90,marginHorizontal: 5}}/>
                  <Image source={require('../../assets/images/03.jpg')} style={{borderRadius: 8,width: fullwidth / 4 - 15, height: 90,marginHorizontal: 5}}/>
                  <Image source={require('../../assets/images/04.jpg')} style={{borderRadius: 8,width: fullwidth / 4 - 15, height: 90,marginHorizontal: 5}}/>
            </View>

            <View style={{flexDirection: 'row', marginTop: 20, justifyContent: 'space-between', borderBottomWidth: 1, borderTopWidth:1}}>

               <Text style={{textAlign: "left", fontSize: 12, marginTop: 25}}>좋아요 5 · 스크랩 4 · 조회 860</Text>
               <TouchableOpacity onPress={this._onPressButton}>
                  <View style={styles.butto}>

                   <Text>신고</Text>
                  </View>
               </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'column', marginTop: 10}}>
             <Text style={{textAlign:'left', fontSize: 12}}>총 1개 댓글</Text>
             <View style={{flexDirection: 'row', height: 70, marginTop: 10  }}>
                <Image source={require('../../assets/images/01.jpg')} style={{borderRadius: 28, width: 55, height: 60 }}/>
                <View style={{flexDirection: 'column', marginHorizontal: 6, marginTop: 10, marginBottom: 5}}>
                   <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black', textAlignVertical: 'left'  }}>절세미남</Text>
                    <Text style={{fontSize: 14, fontWeight: 'bold', color: 'blue', textAlignVertical: 'left' }}> · 팔로우</Text>
                   </View> 
                   <Text style={{fontSize: 10, textAlignVertical: 'left' , marginTop: 5}}>아주 맘에 들어요!</Text>
                    <Text style={{fontSize: 7, textAlignVertical: 'left' , marginTop: 5}}>1분·♥1좋아요 ·삭제</Text>
              
                </View>
                
              </View>
              <View style={{flexDirection: 'row', justifyContent:'flex-end',alignItems: 'flex-end'}}>

                        <TouchableOpacity onPress={this._onPressButton}>
                        <View style={styles.butto}>

                        <Text>신고</Text>
                        </View>
                        </TouchableOpacity>
                        
              </View>
            </View>

            <View style={{flexDirection: 'column',borderBottomWidth: 1, marginBottom: 5}}>
               <View style={{flexDirection: 'row',marginBottom:2 }}>
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





             
          </View>
      
          </ScrollView>  
        
        </View>
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
  top: {
      paddingTop: 50,
      marginHorizontal: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop:10
    },
  high: {
      flexDirection: 'column',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      
      marginTop:20,
      


  },
  button: {
      flexDirection: 'row',
      color: 'grey',
      width:  fullwidth / 3 - 35, 
      height: 30,
      borderWidth: 1,
      marginHorizontal: 2,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'grey',
      borderRadius: 5,
      padding: 3
      
  },
  buttonText: {
      padding: 30,
      color: 'black',
      fontSize: 14 
  },
  butt: {
    height: 30,
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 2,
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
  }
    
  
    
    
}
);      
    
  


                

							