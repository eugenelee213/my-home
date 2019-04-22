import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions} from 'react-native';
import Search from 'react-native-search-box';
//import FontAwesome, { Icons } from 'react-native-fontawesome';
import IonIcon from 'react-native-vector-icons/Ionicons'

import {
  createMaterialTopTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';


import Storer_Home from './Storer/Storer_Home'
import Storer_Lanking from './Storer/Storer_Lanking'
import Storer_Sale from './Storer/Storer_Sale'
import Storer_Magazine from './Storer/Storer_Magazine'
import Storer_Hotdeal from './Storer/Storer_Hotdeal'
import Storer_Gihoik from './Storer/Storer_Gihoik'

const MainNavigator = createMaterialTopTabNavigator({
  홈: { screen: Storer_Home },
  랭킹: { screen: Storer_Lanking },
  SALE: { screen: Storer_Sale },
  매거진: { screen: Storer_Magazine },
  핫딜: { screen: Storer_Hotdeal },
  기획전: { screen: Storer_Gihoik }
});

const App = createAppContainer(MainNavigator);

App.navigationOptions = ({
  tabBarIcon: ({ tintColor }) => (
    < IonIcon name='ios-home' style={{color:tintColor}} size={24} />
),
headerLeft: <Text>hello</Text>,
headerRight: <Text>hello</Text>,
headerTitle: 'hello'
})

export default App;


// const  AppTabContainet = createAppContainer(AppTabNavigator);

// export default class Storer extends Component {

//   static navigationOptions = ({
//     tabBarIcon: ({ tintColor }) => (
//       < IonIcon name='ios-home' style={{color:tintColor}} size={24} />
//   )
//   // headerLeft: <Text>hello</Text>,
//   // headerRight: <Text>hello</Text>
//   // headerTitle: 'hello'
//   })
    
  

//   render() {
//     return (
          
//     <AppTabContainet/>);
      
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//   }
// })