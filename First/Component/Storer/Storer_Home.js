import React, {Component} from 'react';
import {
    StyleSheet, ScrollView, View, Text, TouchableOpacity, ImageBackground, Dimensions,  Image} from 'react-native';

import IonIcon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Carousel from 'react-native-banner-carousel';
const fullwidth = Dimensions.get('window').width;
const BannerHeight = 100;
const images = [
    "../../assets/images/01.jpg",
    "../../assets/images/02.jpg",
    "../../assets/images/03.jpg"
];

export default class App extends Component {
    renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={{ width: fullwidth, height: BannerHeight }} source={require('../../assets/images/02.jpg')} />
                
            </View>
            
        );
    }
    
        

	render() {
		return (
			<ImageBackground
				source={require('../../assets/images/bg.png')}
				style={styles.bg}
			>
				<View style={styles.container}>
					<ScrollView style={{marginTop:10}}>
                       <Carousel
                        autoplay
                        autoplayTimeout={3000}
                        loop
                        index={0}
                        pageSize={fullwidth}
                       >
                       {images.map((image, index) => this.renderPage(image, index))}
                       </Carousel>
                       <View style={{flexDirection: 'row', marginTop: 20}}>
                         <TouchableOpacity onPress={this._onPressButton}>
                           <Image source={require('../../assets/images/01.jpg')} style={{width: fullwidth / 3 - 20, height: 110,marginHorizontal: 7}}/>
                         </TouchableOpacity>
                         <TouchableOpacity onPress={this._onPressButton}>
                           <Image source={require('../../assets/images/02.jpg')} style={{width: fullwidth / 3 - 20, height: 110,marginHorizontal: 7}}/>
                         </TouchableOpacity>
                         <TouchableOpacity onPress={this._onPressButton}>
                           <Image source={require('../../assets/images/03.jpg')} style={{width: fullwidth / 3 - 20, height: 110,marginHorizontal: 7}}/>
                         </TouchableOpacity>
                       </View>
                       <View style={{flexDirection: 'row', marginTop: 10}}>
                         <TouchableOpacity onPress={this._onPressButton}>
                           <Image source={require('../../assets/images/04.jpg')} style={{width: fullwidth / 3 - 20, height: 110,marginHorizontal: 7}}/>
                         </TouchableOpacity>
                         <TouchableOpacity onPress={this._onPressButton}>
                           <Image source={require('../../assets/images/05.jpg')} style={{width: fullwidth / 3 - 20, height: 110,marginHorizontal: 7}}/>
                         </TouchableOpacity>
                         <TouchableOpacity onPress={this._onPressButton}>
                           <Image source={require('../../assets/images/06.jpg')} style={{width: fullwidth / 3 - 20, height: 110,marginHorizontal: 7}}/>
                         </TouchableOpacity>
                       </View>

                       <View style={{flexDirection: 'row', marginTop: 30, marginBottom: 10}}> 
                          <TouchableOpacity onPress={this._onPressButton}>
              
                            <View style={styles.button1}>
                               <Text style={{fontSize: 10, color: 'white'}}>소나타</Text>
                               <Text style={{fontSize: 8, color: 'white'}}>(집 모델명)▶</Text>
                            </View>
                          </TouchableOpacity>
                          <Text style={{fontSize: 8, marginTop: 8}}>  의  </Text>
                          <TouchableOpacity onPress={this._onPressButton}>
                            <View style={styles.button2}>
                              <Text style={{fontSize: 10, color: 'white'}}>40대</Text>
                              <Text style={{fontSize: 8, color: 'white'}}>(연령)▶</Text>
                            </View>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={this._onPressButton}>
                            <View style={styles.button2}>
                              <Text style={{fontSize: 10, color: 'white'}}>남성</Text>
                              <Text style={{fontSize: 8, color: 'white'}}>(성별)▶</Text>
                            </View>
                          </TouchableOpacity>
                          <Text style={{fontSize: 8, marginTop: 8}}> 에게 가장 인기있는 </Text>
                          <TouchableOpacity onPress={this._onPressButton}>
                            <View style={styles.button2}>
                              <Text style={{fontSize: 10, color: 'white'}}>전체</Text>
                              <Text style={{fontSize: 8, color: 'white'}}>(카테고리)▶</Text>
                            </View>
                          </TouchableOpacity>
                       </View>
                       <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 20}}>
                            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                              <TouchableOpacity onPress={this._onPressButton}>
                                 <Image source={require('../../assets/images/01.jpg')} style={{width: fullwidth / 3 - 20, height: 110,marginHorizontal: 7}}/>
                              </TouchableOpacity>
                              <Text style={{fontSize: 10, marginTop: 5}}>오토반 비트윈 업충전거</Text>
                              <Text style={{fontSize: 10}}>치 집안용 멀티포켓 ...</Text>
                                 <View style={{flexDirection: 'row'}}>
                                     <Text style={{fontSize: 8, marginTop: 2}}>55% </Text>
                                     <Text style={{fontSize: 10}}>35,000</Text>
                                     <Text style={{fontSize: 8, marginTop: 2}}> 원 </Text>
                                     <Text style={{fontSize: 8, textDecorationLine: 'line-through', marginTop: 2}}>35,000</Text>
                                     <Text style={{fontSize: 8, marginTop: 2}}> 원 </Text>
                                 </View>
                            </View>
                            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                              <TouchableOpacity onPress={this._onPressButton}>
                                 <Image source={require('../../assets/images/02.jpg')} style={{width: fullwidth / 3 - 20, height: 110,marginHorizontal: 7}}/>
                              </TouchableOpacity>
                              <Text style={{fontSize: 10, marginTop: 5}}>오토반 비트윈 업충전거</Text>
                              <Text style={{fontSize: 10}}>치 집안용 멀티포켓 ...</Text>
                                 <View style={{flexDirection: 'row'}}>
                                     
                                     <Text style={{fontSize: 10}}>35,000</Text>
                                     <Text style={{fontSize: 8, marginTop: 2}}> 원 </Text>
                                     
                                 </View>
                            </View>
                           <TouchableOpacity onPress={this._onPressButton}>
                             <Image source={require('../../assets/images/03.jpg')} style={{width: fullwidth / 3 - 20, height: 110,marginHorizontal: 7}}/>
                                 <View style={{position: 'absolute', bottom: 50, right: 35 }}>
                                     <Text style={{fontSize: 20}}>더보기</Text>
                               
                               {/* <Text>hello</Text> */}
                                </View>
                          </TouchableOpacity>
                       </View>
                       
                       <TouchableOpacity onPress={this._onPressButton}>
                          <View style={styles.butt}>
                             <Text>+ 더보기 (20)</Text>
                          </View>
                       </TouchableOpacity>
                       <TouchableOpacity onPress={this._onPressButton}>
                          <View style={styles.butt}>
                             <Text>내정보입력하기</Text>
                          </View>
                       </TouchableOpacity>
                       <Text style={{textAlign: 'left', marginLeft: 3, fontSize: 18, marginTop: 10}}>베스트 100</Text>
                       
                       <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 20}}>
                            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                              <TouchableOpacity onPress={this._onPressButton}>
                                 <Image source={require('../../assets/images/01.jpg')} style={{width: fullwidth / 3 - 20, height: 110,marginHorizontal: 7}}/>
                              </TouchableOpacity>
                              <Text style={{fontSize: 10, marginTop: 5}}>오토반 비트윈 업충전거</Text>
                              <Text style={{fontSize: 10}}>치 집안용 멀티포켓 ...</Text>
                                 <View style={{flexDirection: 'row'}}>
                                     <Text style={{fontSize: 8, marginTop: 2}}>55% </Text>
                                     <Text style={{fontSize: 10}}>35,000</Text>
                                     <Text style={{fontSize: 8, marginTop: 2}}> 원 </Text>
                                     <Text style={{fontSize: 8, textDecorationLine: 'line-through', marginTop: 2}}>35,000</Text>
                                     <Text style={{fontSize: 8, marginTop: 2}}> 원 </Text>
                                 </View>
                            </View>
                            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                              <TouchableOpacity onPress={this._onPressButton}>
                                 <Image source={require('../../assets/images/02.jpg')} style={{width: fullwidth / 3 - 20, height: 110,marginHorizontal: 7}}/>
                              </TouchableOpacity>
                              <Text style={{fontSize: 10, marginTop: 5}}>오토반 비트윈 업충전거</Text>
                              <Text style={{fontSize: 10}}>치 집안용 멀티포켓 ...</Text>
                                 <View style={{flexDirection: 'row'}}>
                                     
                                     <Text style={{fontSize: 10}}>35,000</Text>
                                     <Text style={{fontSize: 8, marginTop: 2}}> 원 </Text>
                                     
                                 </View>
                            </View>
                            <TouchableOpacity onPress={this._onPressButton}>
                              <Image source={require('../../assets/images/03.jpg')} style={{width: fullwidth / 3 - 20, height: 110,marginHorizontal: 7}}/>
                                 <View style={{position: 'absolute', bottom: 50, right: 35 }}>
                                     <Text style={{fontSize: 20}}>더보기</Text>
                                 </View>
                            </TouchableOpacity>
                       </View>
                       <TouchableOpacity onPress={this._onPressButton}>
                          <View style={styles.butt}>
                             <Text>+ 더보기 (100)</Text>
                          </View>
                       </TouchableOpacity>
                       <TouchableOpacity onPress={this._onPressButton}>
                          <View style={{height:60, borderWidth: 1, marginTop: 15, backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center'}}>
                             <Text style={{fontSize: 20}}>이벤트 배너(고정)</Text>
                          </View>
                       </TouchableOpacity>
                       <Text style={{textAlign: 'left', marginLeft: 3, fontSize: 18, marginTop: 20}}>인기</Text>
                       <View style={{flexDirection: 'row', marginTop: 15, marginBottom: 15}}>
                            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                              <TouchableOpacity onPress={this._onPressButton}>
                                 <Image source={require('../../assets/images/01.jpg')} style={{width: fullwidth / 3 - 20, height: 110,marginHorizontal: 7}}/>
                              </TouchableOpacity>
                              <Text style={{fontSize: 10, marginTop: 5}}>오토반 비트윈 업충전거</Text>
                              <Text style={{fontSize: 10}}>치 집안용 멀티포켓 ...</Text>
                              <View style={{flexDirection: 'row'}}>
                                     <Text style={{fontSize: 8, marginTop: 2}}>55% </Text>
                                     <Text style={{fontSize: 10}}>35,000</Text>
                                     <Text style={{fontSize: 8, marginTop: 2}}> 원 </Text>
                                     <Text style={{fontSize: 8, textDecorationLine: 'line-through', marginTop: 2}}>35,000</Text>
                                     <Text style={{fontSize: 8, marginTop: 2}}> 원 </Text>
                              </View>
                              <View style={{flexDirection: 'row'}}>
                                     <IonIcon name="ios-star" size={10}/>
                                     
                                     <Text style={{fontSize: 8}}> 평점 4.87 </Text>
                                     <MaterialCommunityIcon name="message" size={10}/>
                                     <Text style={{fontSize: 8}}> 리뷰 67</Text>
                              </View>
                            </View>

                            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                              <TouchableOpacity onPress={this._onPressButton}>
                                 <Image source={require('../../assets/images/02.jpg')} style={{width: fullwidth / 3 - 20, height: 110,marginHorizontal: 7}}/>
                              </TouchableOpacity>
                              <Text style={{fontSize: 10, marginTop: 5}}>오토반 비트윈 업충전거</Text>
                              <Text style={{fontSize: 10}}>치 집안용 멀티포켓 ...</Text>
                              <View style={{flexDirection: 'row'}}>
                                     <Text style={{fontSize: 10}}>35,000</Text>
                                     <Text style={{fontSize: 8, marginTop: 2}}> 원 </Text>
                              </View>
                              <View style={{flexDirection: 'row'}}>
                                     <IonIcon name="ios-star" size={10}/>
                                     
                                     <Text style={{fontSize: 8}}> 평점 4.87 </Text>
                                     <MaterialCommunityIcon name="message" size={10}/>
                                     <Text style={{fontSize: 8}}> 리뷰 67</Text>
                              </View>
                            </View>

                            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                              <TouchableOpacity onPress={this._onPressButton}>
                                 <Image source={require('../../assets/images/03.jpg')} style={{width: fullwidth / 3 - 20, height: 110,marginHorizontal: 7}}/>
                                    <View style={{position: 'absolute', bottom: 20, right: 35 }}>
                                     <Text style={{fontSize: 20}}>더보기</Text>
                                    </View>
                              </TouchableOpacity>
                              <View style={{flexDirection: 'row', marginTop: 40}}>
                                     <IonIcon name="ios-star" size={10}/>
                                     
                                     <Text style={{fontSize: 8}}> 평점 4.87 </Text>
                                     <MaterialCommunityIcon name="message" size={10}/>
                                     <Text style={{fontSize: 8}}> 리뷰 67</Text>
                              </View>
                            </View>
                       </View>

                       <TouchableOpacity onPress={this._onPressButton}>
                          <View style={styles.butt}>
                             <Text>+ 더보기 (100)</Text>
                          </View>
                       </TouchableOpacity>
                       <TouchableOpacity onPress={this._onPressButton}>
                          <View style={styles.base}>
                             <Text>입점 신청하기</Text>
                          </View>
                       </TouchableOpacity>
                       <View style={{flexDirection: 'row',marginTop: 20, justifyContent: 'space-between'}}>
							<Text style={styles.title}>내꾸 기획전</Text>
							<TouchableOpacity onPress={this._onPressButton}>
                               <View style={styles.butto}>
                                   <IonIcon name="ios-arrow-forward" size={15} color="black"/>
                               </View>
                            </TouchableOpacity>
						</View>

                       
                       <View style={styles.back}>
                         <Image source={require('../../assets/images/01.jpg')} style={{width: fullwidth / 3 - 20, height: 110,marginHorizontal: 7}}/>
                            <View style={{flexDirection: 'column', marginLeft: 5, marginTop: 5}}>
						       <Text style={styles.title}>정성 가득! 집을 리모델링 하다</Text>
						       <Text style={{textAlign: 'right', fontSize: 15, color: 'blue', marginTop: 3}}>~75%</Text>
                               <Text style={{textAlign: 'left', fontSize: 10, color: 'black', marginTop: 15, marginLeft: 5}}>75개 상품 · 5일 10시간 17분 남음</Text>
                            </View>
					   </View>
                    </ScrollView>
                </View>               
            </ImageBackground>                           
    );
}
};   



const styles = StyleSheet.create({
	container: {
		justifyContent: 'space-between',
		flex: 1,
		paddingHorizontal: 10
	},
	bg: {
		flex: 1,
		resizeMode: 'cover',
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height
	},
	top: {
		paddingTop: 50,
		marginHorizontal: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	title: { paddingBottom: 10, fontSize: 18, color: '#363636', marginTop: 10 },
	icon: {
		//fontFamily: 'tinderclone',
		fontSize: 20,
		color: '#363636',
		paddingRight: 10
    },
    button1: {
        flexDirection: 'column',
        color: 'white',
        width:  fullwidth / 3 - 60, 
        height: 30,
        borderWidth: 1,
        marginHorizontal: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 5,
        padding: 3
        
    },
    button2: {
        flexDirection: 'column',
        color: 'white',
        width:  fullwidth / 3 - 65, 
        height: 30,
        borderWidth: 1,
        marginHorizontal: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 5,
        padding: 3
        
    },
    buttonText: {
        padding: 20,
        color: 'blue',
        fontSize: 14 
    },
    // img: {
    //     height: 120,
    //     width: fullwidth, 
    //     marginTop: 20
	// },
	back: {
		height: 150,
		//width: "100%",
		flexDirection: "row",
		// justifyContent: "",
		// alignItems: "center"
	},
	remo1: {
		

		width: Dimensions.get('window').width / 3 - 30,
		height: 120,
	},	
	butto: {
        //height: 30,
        width: 40,
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: 'grey',
        padding: 3
      },
      butt: {
        height: 30,
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 5,
        marginBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        padding: 3
      },
      base: {
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 5,
        marginBottom: 20,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        padding: 3
      },

	
});
        

                          
                        
                              
                                    
                              
                               
                                      
                              
                                     