import React, {Component} from 'react';
import {
    StyleSheet, ScrollView, View, Text, TouchableOpacity, ImageBackground, Dimensions, 
    Button, Image, FlatList
    } from 'react-native';
import CardItem from '../../components/CardItem';
//import CardItem from '../components/CardItem1';
import Demo from '../../assets/data/demo.js';
import Demonew from '../../assets/data/demonew.js';
import IonIcon from 'react-native-vector-icons/Ionicons';
const fullwidth = Dimensions.get('window').width;

export default class App extends Component {
	static navigationOptions = {
		header: null
	};

	render() {
		return (
			<ImageBackground
				source={require('../../assets/images/bg.png')}
				style={styles.bg}
			>
				<View style={styles.container}>
					<ScrollView>
                      <View style={{height: 150,margintop: 20}}>
                         <ScrollView
                             horizontal={true}
                             showsHorizontalScrollIndicator={false}
                             showsVerticalScrollIndicator={false}
                             >

                                <Image source={require('../../assets/images/01.jpg')} style={ styles.scrimg }/>
 
                                <Image source={require('../../assets/images/02.jpg')} style={ styles.scrimg }/>

                                <Image source={require('../../assets/images/03.jpg')} style={ styles.scrimg }/>

                                <Image source={require('../../assets/images/04.jpg')} style={ styles.scrimg }/>

                          
                         </ScrollView>
                      </View>
					  <FlatList
							numColumns={3}
							data={Demonew}
							renderItem={({ item }) => (
								<TouchableOpacity>
									<CardItem
										image={item.image}
										name={item.name}
										status={item.status}
										//variant
									/>
								</TouchableOpacity>
							)}
							keyExtractor={(item, index) => index.toString()}
						/>
                      
					  <View style={{flexDirection: 'row',marginTop: 20, justifyContent: 'space-between'}}>
							<Text style={styles.title}>내꾸 플러스</Text>
							<TouchableOpacity onPress={this._onPressButton}>
                               <View style={styles.butto}>
                                   <IonIcon name="ios-arrow-forward" size={15} color="black"/>
                               </View>
                            </TouchableOpacity>
					   </View>
					  

						<FlatList
							numColumns={2}
							data={Demo}
							renderItem={({ item }) => (
								<TouchableOpacity>
									<CardItem
										image={item.image}
										name={item.name}
										status={item.status}
										variant
									/>
								</TouchableOpacity>
							)}
							keyExtractor={(item, index) => index.toString()}
						/>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('Story_Maga_uploadScreen')}>
                          <View style={styles.butt}>
                             <Text>스토리 올리기</Text>
                          </View>
                       </TouchableOpacity>

                        <View style={{flexDirection: 'row',marginTop: 20, justifyContent: 'space-between'}}>
							<Text style={styles.title}>내꾸 인기사진</Text>
							<View style={{flexDirection: 'row', marginTop: 10}}>
							   <TouchableOpacity onPress={()=> this.props.navigation.navigate('Image_upload1Screen')}>
                                 
                                    <IonIcon name="ios-camera" size={20} color="black"/>
							     
								</TouchableOpacity>
								<Text style={{fontSize: 10, marginLeft: 3, marginTop: 5}}>사진 올리기</Text>
                            </View>
                        </View>
						<FlatList
							numColumns={3} 
							data={Demo}
							renderItem={({ item }) => (
								<TouchableOpacity>
									<CardItem
										image={item.image}
										name={item.name}
										status={item.status}
										
									/>
								</TouchableOpacity>
							)}
							keyExtractor={(item, index) => index.toString()}

						/>
                        <View style={{flex: 1, flexdirection: "row", height: 100, justifyContent: "center", alignItems: "center", backgroundColor: 'grey'}}>

						    <Text>이벤트배너고정</Text>
						
						</View>

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


					   <View style={{flexDirection: 'row',marginTop: 20, justifyContent: 'space-between'}}>
							<Text style={styles.title}>베스트 100</Text>
							<TouchableOpacity onPress={this._onPressButton}>
                               <View style={styles.butto}>
                                   <IonIcon name="ios-arrow-forward" size={15} color="black"/>
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
                            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                              <TouchableOpacity onPress={this._onPressButton}>
                                 <Image source={require('../../assets/images/03.jpg')} style={{width: fullwidth / 3 - 20, height: 110,marginHorizontal: 7}}/>
                              </TouchableOpacity>
                              <Text style={{fontSize: 10, marginTop: 5}}>오토반 비트윈 업충전거</Text>
                              <Text style={{fontSize: 10}}>치 집안용 멀티포켓 ...</Text>
                                 <View style={{flexDirection: 'row'}}>
                                     
                                     <Text style={{fontSize: 10}}>35,000</Text>
                                     <Text style={{fontSize: 8, marginTop: 2}}> 원 </Text>
                                     
                                 </View>
                            </View>
                       </View>

					   <View style={{flexDirection: 'row', marginTop: 5, marginBottom: 50}}>
                            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                              <TouchableOpacity onPress={this._onPressButton}>
                                 <Image source={require('../../assets/images/04.jpg')} style={{width: fullwidth / 3 - 20, height: 110,marginHorizontal: 7}}/>
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
                                 <Image source={require('../../assets/images/05.jpg')} style={{width: fullwidth / 3 - 20, height: 110,marginHorizontal: 7}}/>
                              </TouchableOpacity>
                              <Text style={{fontSize: 10, marginTop: 5}}>오토반 비트윈 업충전거</Text>
                              <Text style={{fontSize: 10}}>치 집안용 멀티포켓 ...</Text>
                                 <View style={{flexDirection: 'row'}}>
                                     
                                     <Text style={{fontSize: 10}}>35,000</Text>
                                     <Text style={{fontSize: 8, marginTop: 2}}> 원 </Text>
                                     
                                 </View>
                            </View>
                            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                              <TouchableOpacity onPress={this._onPressButton}>
                                 <Image source={require('../../assets/images/opt.jpg')} style={{width: fullwidth / 3 - 20, height: 110,marginHorizontal: 7}}/>
                              </TouchableOpacity>
                              <Text style={{fontSize: 10, marginTop: 5}}>오토반 비트윈 업충전거</Text>
                              <Text style={{fontSize: 10}}>치 집안용 멀티포켓 ...</Text>
                                 <View style={{flexDirection: 'row'}}>
                                     
                                     <Text style={{fontSize: 10}}>35,000</Text>
                                     <Text style={{fontSize: 8, marginTop: 2}}> 원 </Text>
                                     
                                 </View>
                            </View>
                       </View>





						</ScrollView>
				</View>

                
        
			</ImageBackground>
		);
	}
}

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
		paddingTop: 5,
		marginHorizontal: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	title: { paddingBottom: 10, fontSize: 18, color: '#363636', marginTop: 10 },
	icon: {
		fontFamily: 'tinderclone',
		fontSize: 20,
		color: '#363636',
		paddingRight: 10
    },
    button: {
        marginBottom: 30,
        //width: 350,
        height: 50,
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    buttonText: {
        padding: 20,
        color: 'blue',
        fontSize: 14 
    },
    scrimg: {
        height: 150,
        width: 350,
        marginTop: 20
	},
	back: {
		height: 150,
		//width: "100%",
		flexDirection: "row",
		// justifyContent: "",
		// alignItems: "center"
	},
	remo1: {
		borderRadius: 8,

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

	
});
        
        
        






							
						



                    
								
							
                                

							