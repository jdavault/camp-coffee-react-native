import React, { Component } from 'react';
import Constants from 'expo-constants';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from "react-navigation-drawer"
import { createAppContainer } from 'react-navigation';

import Coffee from './CoffeeComponent';
import CoffeeDetails from "./CoffeeDetailsComponent"

const CoffeeInfoNavigator = createStackNavigator(
  {
    Coffee: { screen: Coffee },
    CoffeeDetails: { screen: CoffeeDetails }
  },
  {
    initialRouteName: 'Coffee',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#5637DD'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff'
      }
    }
  }
);

// const MainNavigator = createDrawerNavigator(
//   {
//     Coffee: { screen: CoffeeInfoNavigator }
//   },
//   {
//     drawerBackgroundColor: "#CEC8FF"
//   }
// )

const AppNavigator = createAppContainer(CoffeeInfoNavigator);
class Main extends Component {

  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
        }}>
        <AppNavigator />
      </View>
    )
  }
}

export default Main;