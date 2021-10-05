import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { COFFEE_IMAGE_INFO } from '../shared/coffee-img-descrip';

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

class CoffeeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coffeeImageInfo: COFFEE_IMAGE_INFO
    };
  }

  static navigationOptions = {
    title: 'Coffee Details'
  }
  render() {
    const coffeeInfoId = this.props.navigation.getParam('coffeeInfoId');
    const coffeeInfo = this.state.coffeeImageInfo.filter(coffeeInfo => coffeeInfo.id === coffeeInfoId)[0];
    return <RenderCoffeeInfo coffeeInfo={coffeeInfo} />;
  }
}
export default CoffeeDetails;

