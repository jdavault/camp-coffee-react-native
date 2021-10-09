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
          <Text style={styles.text}>First Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={this.onChangeText}
            value={this.firstName}
            placeholder="First Name"
          />
          <Text style={styles.text}>Last Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={this.onChangeText}
            value={this.lastName}
            placeholder="Last Name"
          />
          <Text style={styles.text}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={this.onChangeText}
            value={this.email}
            placeholder="Email"
          />
          <Text style={styles.text}>Phone</Text>
          <TextInput
            style={styles.input}
            onChangeText={this.onChangeText}
            value={this.phoneNum}
            placeholder="Phone Number"
            keyboardType="numeric"
          />
          <Text style={styles.text}>Address</Text>
          <TextInput
            style={styles.input}
            onChangeText={this.onChangeText}
            value={this.address}
            placeholder="Address"
          />
          <Text style={styles.text}>Message</Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            onChangeText={this.onChangeText}
            value={this.message}
            placeholder="Message"
            style={{ padding: 10 }}
          />
          <Button
            onPress={() =>
              Alert.alert('Your information has been submitted.')
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
    marginTop: 5,
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    marginLeft: 20,
    marginBottom: 0
  }
});

export default ContactUs;