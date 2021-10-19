
import "react-native-gesture-handler";
import React from "react";
import { Text, View, Button } from "react-native";

// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createDrawerNavigator } from "@react-navigation/drawer";

export default function ModalScreen(route) {
  return (
    <View style={{ margin: 60 }}>
      <Text style={{ fontSize: 24 }}>Hey am a modal screen!</Text>
      <Button
        title="Close this modal"
        onPress={() => {
          route.navigation.goBack();
        }}
      />
    </View>
  );
}
