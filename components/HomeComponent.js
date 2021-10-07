import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { COFFEE_IMG_INFO } from '../shared/coffee-img-descrip';
import { COFFEE_TYPE_DATA } from '../shared/coffee-type-data';
import { COFFEE_SERVICE_DATA } from '../shared/coffee-service-data';

function RenderItem({ item }) {
  if (item) {
    return (
      <Card
        featuredTitle={item.name}
        image={require('../assets/images/coffee.jpg')}
      >
        <Text style={{ margin: 10 }}>
          {item.description}
        </Text>
      </Card>
    );
  }
  return <View />;
}

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      coffeeInfo: COFFEE_IMG_INFO,
      coffeeData: COFFEE_TYPE_DATA,
      coffeeSerivce: COFFEE_SERVICE_DATA
    };
  }

  static navigationOptions = {
    title: 'Home'
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Coming Soon</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  text: {
    padding: 50,
    fontSize: 30,
    backgroundColor: "#fff",
    justifyContent: "center",
  }
})

export default Home;