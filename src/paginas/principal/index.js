import React, { Component } from "react";

import { View, StyleSheet, Text } from "react-native";

export default class Main extends Component {
  static navigationOptions = {
    title: "Inicio",
    headerStyle: {},
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Principal</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8FF",
    paddingHorizontal: 20,
    paddingTop: 30
  },
  text: {
    fontSize: 50
  }
});
