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


import Home_Magazine from './Home/Home_Magazine'
import Home_Photo from './Home/Home_Photo'
import Home_Story from './Home/Home_Story'
import Home_QuesAnws from './Home/Home_QuesAnws'
import Home_Event from './Home/Home_Event'
import Home_Lanking from './Home/Home_Lanking'

const MainNavigator = createMaterialTopTabNavigator({
  매거진: { screen: Home_Magazine },
  사진: { screen: Home_Photo },
  스토리: { screen: Home_Story },
  질문과답변: { screen: Home_QuesAnws },
  이벤트: { screen: Home_Event },
  내꾸랭킹: { screen: Home_Lanking }
},
  {  tabBarOptions: {
        tabBarIcon: ({ tintColor }) => (
            < IonIcon name='ios-home' style={{color:tintColor}} size={24} /> ),
        labelStyle: { fontSize: 10 },
        activeTintColor: '#e91e63'
  }

  }
);



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

  // static navigationOptions = ({
  //   tabBarIcon: ({ tintColor }) => (
  //     < IonIcon name='ios-home' style={{color:tintColor}} size={24} />
  // )
  // headerLeft: <Text>hello</Text>,
  // headerRight: <Text>hello</Text>
  // headerTitle: 'hello'
  // })
    
  

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