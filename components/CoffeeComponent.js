import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native'
import { ListItem } from "react-native-elements"
import { COFFEE_IMAGE_INFO } from '../shared/coffee-img-descrip';

class Coffee extends Component {

  constructor(props) {
    super(props);
    this.state = {
      coffeeImageInfo: COFFEE_IMAGE_INFO
    };
  }

  static navigationOptions = {
    title: 'Coffee'
  }

  render() {
    const { navigate } = this.props.navigation;
    const renderCoffeeInfo = ({ item }) => {
      return (
        <ListItem
          title={item.type}
          subtitle={item.description}
          onPress={() => navigate('CoffeeDetails', { coffeeInfoId: item.id })}
          leftAvatar={{ source: require('../assets/images/3.jpg') }}
        />
      );
    };
    return (
      <FlatList
        data={this.state.coffeeImageInfo}
        renderItem={renderCoffeeInfo}
        keyExtractor={item => item.id.toString()}
      />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  text: {
    padding: 5
  }
})
export default Coffee;