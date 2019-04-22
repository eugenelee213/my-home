
import React, {Component} from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
  createMaterialTopTabNavigator
  
} from 'react-navigation';

import { StyleSheet, Text, View } from 'react-native'
import Search from 'react-native-search-box';
import Icon from 'react-native-vector-icons/FontAwesome5';

import  Main_Page from './Component/Main_Page';
import Photo_detail from './Component/Home/Photo_detail';

import Storer_Gihoik_detail from './Component/Storer/Storer_Gihoik_detail'
import Storer_Sale_detail from './Component/Storer/Storer_Sale_detail'
import Storer_Hotdeal_detail from './Component/Storer/Storer_Hotdeal_detail'
import Storer_Review_detail from './Component/Storer/Storer_Review_Writing'

import Story_Maga_upload from './Component/Story_Maga_upload' 
import Compare_upload from './Image_upload/Compare_upload'
import Tag_upload from './Image_upload/Tag_upload'
import Image_upload1 from './Image_upload/Image_upload1'
import Image_upload2 from './Image_upload/Image_upload2'
import Image_upload3 from './Image_upload/Image_upload3'

const MainNavigator = createStackNavigator({
  

  Main_PageScreen: { screen: Main_Page },
  Photo_detailScreen: { screen: Photo_detail },
  Story_Maga_uploadScreen: {screen: Story_Maga_upload},
  Compare_uploadScreen: {screen: Compare_upload},
  Tag_uploadScreen: {screen: Tag_upload},
  Image_upload1Screen: {screen: Image_upload1},
  Image_upload2Screen: {screen: Image_upload2},
  Image_upload3Screen: {screen: Image_upload3},
  Gihoik_detailScreen: {screen: Storer_Gihoik_detail},
  Storer_Sale_detailScreen: {screen: Storer_Sale_detail},
  Storer_Hotdeal_detailScreen: {screen: Storer_Hotdeal_detail},
  Storer_Review_detailScreen: {screen: Storer_Review_detail}

},
//  {
//    defaultNavigationOptions: {
//        header: null  

//      }
//  }


);

const App = createAppContainer(MainNavigator);
export default App;

        
   

  