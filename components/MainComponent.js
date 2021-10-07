import React, { Component } from 'react';
import Constants from 'expo-constants';
import { View, Platform, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from "react-navigation-drawer"
import { createAppContainer } from 'react-navigation';

import Home from './HomeComponent';
import Coffee from './CoffeeComponent';
import CoffeeDetails from "./CoffeeDetailsComponent"
import ContactUs from "./ContactUsComponent"

const CoffeeInfoNavigator = createStackNavigator(
  {
    Coffee: { screen: Coffee },
    CoffeeDetails: { screen: CoffeeDetails },
    ContactUs: { screen: ContactUs }
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

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home }
  },
  {
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

const ContactUsNavigator = createStackNavigator(
  {
    ContactUs: { screen: ContactUs }
  },
  {
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

const MainNavigator = createDrawerNavigator(
  {
    Home: { screen: HomeNavigator },
    Coffee: { screen: CoffeeInfoNavigator },
    "Contact Us": { screen: ContactUsNavigator }
  },
  {
    drawerBackgroundColor: '#CEC8FF'
  }
);

const AppNavigator = createAppContainer(MainNavigator);
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