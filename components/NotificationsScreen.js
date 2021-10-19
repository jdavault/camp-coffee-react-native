import * as React from 'react';
import { Button, View, Text } from 'react-native';


export default function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>NAVIGATIONS PAGE</Text>
      <Button
        onPress={() => navigation.navigate('Settings')}
        title="Go to Settings"
      />
    </View>
  );
};