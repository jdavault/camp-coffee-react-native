import React, { Component } from 'react';
import {
  SafeAreaView, StyleSheet, TextInput, Text, View, ScrollView,
  Button, Alert
} from 'react-native';

class ContactUs extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNum: '',
      message: '',
      touched: {
        firstName: false,
        lastName: false,
        phoneNum: false,
        email: false
      }
    };
  }

  static navigationOptions = {
    title: 'Contact Us'
  }

  handleContact() {
    console.log(JSON.stringify(this.state));
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      phoneNum: '',
      message: '',
      address: '',
      touched: {
        firstName: false,
        lastName: false,
        phoneNum: false,
        email: false
      }
    });
  }

  onChangeText = e => {
    //You don't really need an onChangeEvent but
    //But this one will log all changes to the terminal
    console.log(e)
  }

  render() {
    return (
      <ScrollView>
        <SafeAreaView>
          <Text>First Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={this.onChangeText}
            value={this.firstName}
            placeholder="First Name"
          />
          <Text>Last Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={this.onChangeText}
            value={this.lastName}
            placeholder="Last Name"
          />
          <Text>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={this.onChangeText}
            value={this.email}
            placeholder="Email"
          />
          <Text>Phone</Text>
          <TextInput
            style={styles.input}
            onChangeText={this.onChangeText}
            value={this.phoneNum}
            placeholder="Phone Number"
            keyboardType="numeric"
          />
          <Text>Address</Text>
          <TextInput
            style={styles.input}
            onChangeText={this.onChangeText}
            value={this.address}
            placeholder="Address"
          />
          <Text>Message</Text>
          <TextInput
            multiline
            numberOfLines={4}
            onChangeText={this.onChangeText}
            value={this.message}
            style={{ padding: 10 }}
          />
          <Button
            onPress={() =>
              Alert.alert('Simple Button pressed')
            }
            title="Submit"

          />
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default ContactUs;