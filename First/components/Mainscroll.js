import React, { Component } from 'react';
import {StyleSheet,Text,View, ScrollView} from 'react-native';

export default class Mainscroll extends Component {
  render() {
    return (
     
      
       <View style={styles.container}>
        <ScrollView>
           


           


         <Text style={styles.welcome}>Welcome to React Native</Text>
         
         
         

        </ScrollView>
       </View>
     

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    flex: 1,
    margin: 20,
    backgroundColor: 'orange',
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 70,
  }
});

