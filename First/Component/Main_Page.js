
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Search from 'react-native-search-box';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './Home';
import StorerScreen from './Storer';
import MypageScreen from './Mypage';
import AnnounceScreen from './Announce'
import AddScreen from './Add'

const MainNavigator = createStackNavigator({
  Main:createBottomTabNavigator({
               홈1: { screen: HomeScreen },
               스토어: { screen: StorerScreen },
               마이페이지: { screen: MypageScreen },
               알림: { screen: AnnounceScreen },
               " ": { screen: AddScreen }
     })
},

  { defaultNavigationOptions: {
    
    header: <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5, marginBottom: 5}}>
          
                 <Text style={{marginLeft: 10}}>로고</Text>
                 <View style={{width:'70%', fontSize: 20, textAlign: 'left'}}>
                       <Search defaultValue='검색' cancelTitle='취소' placeholder='검색' searchIconCollapsedMargin = {-120} placeholderCollapsedMargin = {130} backgroundColor='grey'
                      
                       /> 
                 </View>
                 <Icon  style={{marginRight: 10}} name="shopping-cart" size={30} color="blue" />

            </View>
    
    }
  }

);



const App = createAppContainer(MainNavigator);



export default App;

// export default class MainScreen extends Component {

//   // navigationOptions 코드 추가
//   // static navigationOptions = {
//   //   headerLeft: <Icon name='ios-camera' style={{ paddingLeft:10 }}/>,
//   //   title: 'Coding Tiger',
//   //   headerRight: <Icon name='ios-send' style={{ paddingRight:10 }}/>,
//   // }

//   render() {
//     return <AppTabContainet/>;
      
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//   }
// })
