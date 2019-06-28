import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import User from "./User";

// import { Container } from './styles';

export default function Lending({ Exemplar, DataEntrega, DataPrevistaEntrega }) {
  return (
    <View style={styles.conteiner}>
      <View>
        <Text style={styles.textNome}>{Exemplar}</Text>
        <Text style={styles.textNome}>{DataEntrega}</Text>
        <Text style={styles.textNome}>{DataPrevistaEntrega}</Text>
      </View>
      <Icon style={styles.icons} name="angle-right" size={20} />
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ddd",
    margin: 20,
    borderRadius: 10,
    flexDirection: "row"
  },

  viewTexto: {
    marginLeft: 10,
    backgroundColor: "#ddd",
    alignItems: "baseline",
    flex: 1
  },

  textNome: {
    fontSize: 15,
    textAlign: "left"
  },

  textEmail: {
    fontSize: 15,
    textAlign: "left"
  },

  icons: {
    marginRight: 20
  }
});
