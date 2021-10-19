import React, { Component } from 'react';
import Constants from 'expo-constants';
import { View, Platform, ScrollView, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from "react-navigation-drawer"
import { createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';

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
    defaultNavigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: '#5637DD'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff'
      },
      headerLeft: <Icon
        name='coffee'
        type='font-awesome'
        iconStyle={styles.stackIcon}
        onPress={() => navigation.toggleDrawer()}
      />
    })
  }
);

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home }
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: '#5637DD'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff'
      },
      headerLeft: <Icon
        name='home'
        type='font-awesome'
        iconStyle={styles.stackIcon}
        onPress={() => navigation.toggleDrawer()}
      />        
    })
  }
);

const ContactUsNavigator = createStackNavigator(
  {
    ContactUs: { screen: ContactUs }
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: '#5637DD'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff'
      },
      headerLeft: <Icon
        name='address-card'
        type='font-awesome'
        iconStyle={styles.stackIcon}
        onPress={() => navigation.toggleDrawer()}
      />
    })
  }
);

const MainNavigator = createDrawerNavigator(
  {
    Home: { 
      screen: HomeNavigator,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
            <Icon
                name='home'
                type='font-awesome'
                size={24}
                color={tintColor}
            />
        )
      }    
    },
    Coffee: { 
      screen: CoffeeInfoNavigator,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icon
            name='coffee'
            type='font-awesome'
            size={24}
            color={tintColor}
          />
        )
      }
    },
    "Contact Us": { 
      screen: ContactUsNavigator,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icon
              name='address-card'
              type='font-awesome'
              size={24}
              color={tintColor}
          />
        )
      }
    }
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
};

const styles = StyleSheet.create({
  stackIcon: {
      marginLeft: 10,
      color: '#fff',
      fontSize: 24
  }
});

export default Main;