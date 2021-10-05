import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function RenderCoffeeInfo({ coffeeInfo }) {
  if (coffeeInfo) {
    return (
      <Card
        featuredTitle={coffeeInfo.type}
        image={require('../assets/images/3.jpg')}
      >
        <Text style={{ margin: 10 }}>
          {coffeeInfo.description}
        </Text>
      </Card>
    );
  }
  return <View />;
}

function CoffeeDetails(props) {
  return <RenderCoffeeInfo coffeeInfo={props.coffeeInfo} />;
}

export default CoffeeDetails;