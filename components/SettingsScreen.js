import * as React from 'react';
import { Button, View, Text } from 'react-native';


export default function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SETTINGS PAGE</Text>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to Notifications"
      />
    </View>
  );
};