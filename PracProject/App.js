/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow



 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component{
  onPress = () => {
    alert('Hiii')
  }
  render() {
    const mobiles = [
      {name : 'samsung', cost : 40},
      {name : 'apple', cost : 60},
      {name : 'onePlus', cost : 30},
    ]
    return (
      <View style={styles.container}>
        <View>
        {
          mobiles.map((mobile, index) => 
          <Text key={index}>{mobile.name} is {mobile.cost}</Text>
          )
        }
        </View>
        <TouchableOpacity style = {styles.button} onPress={this.onPress}>
          <View style = {styles.textContainer}>
            <Icon name="home" size={20} color="white"/>
            <Text style = {styles.text}>Hiii</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center'
  },
  text:{
    fontSize: 24,
    color: 'white',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  textContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button:{
    margin: 20,
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 30,
  }
});
