import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, TouchableOpacity, Text, Image, Dimensions, ImageBackground} from 'react-native';
import  IonIcon  from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-gesture-handler';
import Button from 'react-native-button'
import Search from 'react-native-search-box';
const fullwidth = Dimensions.get('window').width;


export default class App extends Component{
    render() 
    
      {
      return (
          <View style={styles.container}>
            <ScrollView>
               <View style={{flexDirection: 'column'}}>
                   <View style={{flexDirection: 'row' }}>
                      
                      <TouchableOpacity onPress={() => this.props.navigation.goBack()}>

                         <View style={styles.butto}>
                           
                           <IonIcon name="ios-arrow-back" size={14}/>
                         </View>
                      </TouchableOpacity>

                   </View>

                   <View style={styles.search_box}>
                         <Search defaultValue='' placeholder=' 제품명, 브랜드를 등록하세요' searchIconCollapsedMargin = {10} 
                         ref="search_box"
                         /> 
                   </View>
                   <View style={{flexDirection:'row', marginTop: 10, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                          <Text style={{textAlign: 'right', fontSize: 12}}>원하는 결과 가 없다면?</Text>
                          <TouchableOpacity onPress={this._onPressButton}>
                            <Text style={{textAlign: 'right', fontSize: 10, marginLeft: 2, textDecorationLine: 'underline'}}>직접등록</Text>
                          </TouchableOpacity>
                   </View>
                   <View style={{flexDirection:'row', marginTop: 20}}>
                     <Image source={require('../assets/images/01.jpg')} style={{width: fullwidth / 3 - 20, height: 110}}/>
                        <View style={{flexDirection: 'row', marginTop: 40, justifyContent: 'space-between'}}>
                          <Text style={{fontSize: 15, marginLeft: 10, marginRight: 80, marginTop:10}}>집안용 공기청정기</Text>
                          <TouchableOpacity onPress={this._onPressButton}>
                                <View style={styles.butto}>
                                   <Text> 선택 </Text>
                                </View>
                          </TouchableOpacity>
                        </View>
                   </View>
                   <Image source={require('../assets/images/tea.jpeg')} style={{width: '100%', marginTop: 15}}/>
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
    butt: {
        height: 30,
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 2,
        //marginBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        padding: 3
      },
      butto: {
        //height: 25,
        width: 45,
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal:5,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        padding: 3
      },
      search_box: {
        //flex : 0.6,
        width:'70%',
        marginLeft: 50, 
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10
        //margin: 10,
    }
      
}
);