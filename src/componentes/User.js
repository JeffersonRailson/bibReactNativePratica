import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function User({ nome, tipo, consultaCompleta }) {
  if (consultaCompleta) {
    return (
      <View style={styles.conteiner}>
        <View style={styles.viewTexto}>
          <Text style={styles.textNome}>Nome: {nome}</Text>

          <Text style={styles.textTipo}>Tipo de Usuario: {tipo}</Text>
        
        </View>
        <Icon style={styles.icons} name="angle-right" size={20} />
      </View>
    );
  }
  if (!consultaCompleta) {
    return (
      <View style={styles.conteiner}>
        <View style={styles.viewTexto}>
          <Text style={styles.textNome}>Nome: {nome}</Text>

          <Text style={styles.textTipo}>Tipo de Usuario: {tipo}</Text>
        </View>
        <Icon style={styles.icons} name="angle-right" size={20} />
      </View>
    );
  }
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

  textTipo: {
    fontSize: 15,
    textAlign: "left"
  },

  icons: {
    marginRight: 20
  }
});
