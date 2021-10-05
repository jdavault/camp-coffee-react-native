import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native'
import { ListItem } from "react-native-elements"

function Coffee(props) {

  const renderCoffeeInfo = ({ item }) => {
    return (
      <ListItem
        title={item.type}
        subtitle={item.description}
        onPress={() => props.onPress(item.id)}
        leftAvatar={{ source: require('../assets/images/3.jpg') }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={props.coffeeImageInfo}
        renderItem={renderCoffeeInfo}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
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