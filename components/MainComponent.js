import React, { Component } from 'react';
import Coffee from './CoffeeComponent';
import { COFFEE_IMAGE_INFO } from '../shared/coffee-img-descrip';
import CoffeeDetails from "./CoffeeDetailsComponent"
import { View } from 'react-native';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coffeeImageInfo: COFFEE_IMAGE_INFO,
      selectedCoffee: null
    };
  }

  onCoffeeSelect(coffeeInfoId) {
    this.setState({ selectedCoffee: coffeeInfoId });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Coffee coffeeImageInfo={this.state.coffeeImageInfo}
          onPress={coffeeInfoId => this.onCoffeeSelect(coffeeInfoId)}
        />
        <CoffeeDetails
          coffeeInfo={this.state.coffeeImageInfo.filter(
            coffeeInfo => coffeeInfo.id === this.state.selectedCoffee)[0]}
        />

      </View>
    )
  }
}

export default Main;