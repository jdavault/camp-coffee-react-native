import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

//import { createAppContainer } from 'react-navigation';
import colors from "../assets/colors/colors"

import EntypoIcon from "react-native-vector-icons/Entypo"
import MaterialUIIcon from "react-native-vector-icons/MaterialCommunityIcons"

import { Icon } from 'react-native-elements';

import SettingsScreen from './SettingsScreen';
import NotificationsScreen from './NotificationsScreen';

import Home from './HomeComponent';
import Coffee from './CoffeeComponent';
import CoffeeDetails from "./CoffeeDetailsComponent"
import ContactUs from "./ContactUsComponent"
import ModalScreen from "./ModalScreen"

//const Stack = createStackNavigator()
const MainStack = createStackNavigator()
const RootStack = createStackNavigator()
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const MainStackScreen = ({ navigation }) => {
  return (
    <MainStack.Navigator
      //You can put options to apply to all screen here
      screenOptions={{
        headerStyle: {
          backgroundColor: '#5637DD'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          color: '#fff'
        }
      }}
    >
      <MainStack.Screen
        name="Home"
        component={Home}
        //You can put screen specifc options here
        options={{
          title: "Main Screen",
          headerLeft: (props) => (
            <Icon
              name='coffee'
              type='font-awesome'
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
              size={24}
              color={"white"}
            />
          )
        }}
      />
      <MainStack.Screen name="Coffee"
        component={Coffee}
        options={{
          title: "List of Fine Coffees",
          headerBackTitle: "Back"  //we can remove this and i will give the parent name
        }}
      />
      <MainStack.Screen name="CoffeeDetails"
        component={CoffeeDetails}
        options={{
          title: "Coffee Details",
          headerBackTitle: "Back",  //we can remove this and i will give the parent name
          headerRight: (props) => (
            <Icon
              name='check-circle'
              type='font-awesome'
              iconStyle={styles.stackIconRight}
              size={24}
              onPress={() => alert("Hi there!")}
              color={"white"}
            />
          )
        }}
      />
      <MainStack.Screen name="ContactUs" component={ContactUs}
        options={{
          headerRight: (props) => (
            <Button
              title='Done'
              onPress={() => alert("Hi there!")}
            />
          )
        }}
      />
    </MainStack.Navigator>
  )
}

const RootStackScreen = () => {
  return (
    <RootStack.Navigator mode="modal"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#5637DD'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          color: '#fff'
        }
      }}
    >
      <RootStack.Screen name="Welcome to Camp Coffee" component={MainStackScreen} />
      <RootStack.Screen
        name="MyModal"
        component={ModalScreen}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  )
}

const TabNavigation = () => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        styles: styles.tabBar,
        activeTintColor: colors.orange,
        inactiveTintColor: colors.gray,
        showLabel: false
      }}>
      <Tabs.Screen name="Home"
        component={RootStackScreen}
        options={{
          tabBarIcon: ({ color }) => <EntypoIcon name="home" size={32} color={color} />,
        }}
      />
      <Tabs.Screen name="Coffee"
        component={Coffee}
        options={{
          tabBarIcon: ({ color }) => <MaterialUIIcon name="coffee" size={32} color={color} />,
        }} />
      <Tabs.Screen name="Contact Us" component={ContactUs}
        options={{
          tabBarBadge: 3,
          tabBarIcon: ({ color }) => <Icon name="mail" size={32} color={color} />,
        }} />
    </Tabs.Navigator>
  );
}

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContentOptions={{
        headerStyle: {
          backgroundColor: '#5637DD'
        },
        activeTintColor: '#e91e63',
        headerTintColor: '#fff',
        headerTitleStyle: {
          color: '#fff'
        },
        itemStyle: { marginVertical: 2 },
      }}>
      <Drawer.Screen name="Tabs" component={TabNavigation} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

//We have both <MainStackScreen> and <RootStackScreen />
const Main = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  )
};

const styles = StyleSheet.create({
  stackIcon: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 24
  },
  tabBar: {
    backgroundColor: colors.brown,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  stackIconRight: {
    marginRight: 20,
    color: '#fff',
    fontSize: 24
  }
});

export default Main;