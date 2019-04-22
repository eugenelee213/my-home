import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, TextInput, TouchableOpacity, Text, Image, Dimensions} from 'react-native';
//import { IonIcon1 } from 'react-native-vector-icons/Ionicons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { SearchBar } from 'react-native-elements';
import Search from 'react-native-search-box';

const fullwidth = Dimensions.get('window').width; 
export default class App extends Component{
    
    render() 
    
      {
        return (
          <View style={styles.container}>
            <ScrollView>
               <View style={{flexDirection: 'column', marginBottom: 100}}>
                   <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                         <View style={styles.butto}>
                            <IonIcon name="ios-arrow-back" size={15} color="black"/>
                         </View>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={this._onPressButton}>
                         <View style={styles.butto}>
                            <Text> 추가 </Text>
                         </View>
                      </TouchableOpacity>
                   </View>
                   
                  
                   <View style={styles.search_box}>
                         <Search defaultValue='' placeholder='등록한 사진 검색' searchIconCollapsedMargin = {10} placeholderCollapsedMargin = {40}
                         ref="search_box"
                         /> 
                   </View>
                   <View style={{flexDirection:'row', marginTop: 10, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                          <Text style={{textAlign: 'right', fontSize: 12}}>원하는 결과 가 없다면?</Text>
                          <TouchableOpacity onPress={this._onPressButton}>
                            <Text style={{textAlign: 'right', fontSize: 10, marginLeft: 2, textDecorationLine: 'underline'}}>직접등록</Text>
                          </TouchableOpacity>
                   </View>

                   <View style={{flexDirection:'row', marginTop: 30}}>
                     <Image source={require('../assets/images/01.jpg')} style={{width: fullwidth / 3 - 20, height: 110}}/>
                        <View style={{flexDirection: 'row', marginTop: 40, justifyContent: 'space-between'}}>
                          <Text style={{fontSize: 15, marginLeft: 10, marginRight: 80}}>집안용 공기청정기</Text>
                          <TouchableOpacity onPress={this._onPressButton}>
                                <View style={styles.butto}>
                                   <Text> 선택 </Text>
                                </View>
                          </TouchableOpacity>
                        </View>
                   </View>
                   <View style={{flexDirection:'row', marginTop: 10}}>
                     <Image source={require('../assets/images/02.jpg')} style={{width: fullwidth / 3 - 20, height: 110}}/>
                        <View style={{flexDirection: 'row', marginTop: 40, justifyContent: 'space-between'}}>
                          <Text style={{fontSize: 15, marginLeft: 10, marginRight: 80}}>집안용 공기청정기</Text>
                          <TouchableOpacity onPress={this._onPressButton}>
                                <View style={styles.butto}>
                                   <Text> 선택 </Text>
                                </View>
                          </TouchableOpacity>
                        </View>
                   </View>
                   <View style={{flexDirection:'row', marginTop: 10}}>
                     <Image source={require('../assets/images/03.jpg')} style={{width: fullwidth / 3 - 20, height: 110}}/>
                        <View style={{flexDirection: 'row', marginTop: 40, justifyContent: 'space-between'}}>
                          <Text style={{fontSize: 15, marginLeft: 10, marginRight: 80}}>집안용 공기청정기</Text>
                          <TouchableOpacity onPress={this._onPressButton}>
                                <View style={styles.butto}>
                                   <Text> 선택 </Text>
                                </View>
                          </TouchableOpacity>
                        </View>
                   </View>
                   <View style={{flexDirection:'row', marginTop: 10}}>
                     <Image source={require('../assets/images/04.jpg')} style={{width: fullwidth / 3 - 20, height: 110}}/>
                        <View style={{flexDirection: 'row', marginTop: 40, justifyContent: 'space-between'}}>
                          <Text style={{fontSize: 15, marginLeft: 10, marginRight: 80}}>집안용 공기청정기</Text>
                          <TouchableOpacity onPress={this._onPressButton}>
                                <View style={styles.butto}>
                                   <Text> 선택 </Text>
                                </View>
                          </TouchableOpacity>
                        </View>
                   </View>
                   <View style={{flexDirection:'row', marginTop: 10, borderBottomWidth: 1}}>
                     <Image source={require('../assets/images/05.jpg')} style={{width: fullwidth / 3 - 20, height: 110, marginBottom:20}}/>
                        <View style={{flexDirection: 'row', marginTop: 40, justifyContent: 'space-between'}}>
                          <Text style={{fontSize: 15, marginLeft: 10, marginRight: 80}}>집안용 공기청정기</Text>
                          <TouchableOpacity onPress={this._onPressButton}>
                                <View style={styles.butto}>
                                   <Text> 선택 </Text>
                                </View>
                          </TouchableOpacity>
                        </View>
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
    butto: {
        //height: 30,
        width: 40,
        borderWidth: 1,
        borderRadius: 5,
        
        
        
        alignItems: 'center',
        backgroundColor: 'grey',
        padding: 3
      },
    butti: {
        flexDirection: 'row',
        
        width:  fullwidth - 20, 
        height: 35,
        borderWidth: 1,
        marginHorizontal: 7,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'grey',
        borderRadius: 12,
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
      

    

    