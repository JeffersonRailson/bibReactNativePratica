import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import User from "./user";

// import { Container } from './styles';

export default function Book({
  tipoConsulta,
  titulo,
  isbn,
  autor,
  assusnto,
  publicacao
}) {
  if (!tipoConsulta) {
    return (
      <View style={styles.conteiner}>
        <View>
          <View style={styles.viewTexto}>
            <Text style={styles.textNome}>Titulo: </Text>
            <View
              style={{
                justifyContent: "center",
                width: 200
              }}
            >
              <Text style={styles.textNome}>{titulo}</Text>
            </View>
          </View>
          <View style={styles.viewTexto}>
            <Text style={styles.textNome}>Autor: </Text>
            <View
              style={{
                justifyContent: "center",
                width: 200
              }}
            >
              <Text style={styles.textNome}>{autor}</Text>
            </View>
          </View>
          <View style={styles.viewTexto}>
            <Text style={styles.textNome}>Assusnto: </Text>
            <View
              style={{
                justifyContent: "center",
                width: 200
              }}
            >
              <Text style={styles.textNome}>{assusnto}</Text>
            </View>
          </View>
        </View>
        <Icon style={styles.icons} name="angle-right" size={40} color="black" />
      </View>
    );
  }
  if (tipoConsulta) {
    return (
      <View style={styles.conteiner}>
        <View>
          <View style={styles.viewTexto}>
            <Text style={styles.textNome}>Autor: </Text>
            <Text style={styles.textNome}>{autor}</Text>
          </View>
          <View style={styles.viewTexto}>
            <Text style={styles.textNome}>Assusnto: </Text>
            <Text style={styles.textNome}>{assusnto}</Text>
          </View>
          <View style={styles.viewTexto}>
            <Text style={styles.textNome}>Publicação: </Text>
            <Text style={styles.textNome}>{publicacao}</Text>
          </View>

          <View style={styles.viewTexto}>
            <Text style={styles.textNome}>ISBN: </Text>
            <Text style={styles.textNome}>{isbn}</Text>
          </View>
        </View>
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
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ddd",
    margin: 20,
    borderRadius: 10,
    flexDirection: "row"
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
