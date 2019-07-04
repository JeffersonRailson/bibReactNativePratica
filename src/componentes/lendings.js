import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import User from "./user";

// import { Container } from './styles';

export default function Lending({
  titulo,
  dataEmprestimo,
  devolocao,
  status,
  count
}) {
  if (count) {
    return (
      <View style={styles.conteiner}>
        <Text style={{ fontSize: 20, marginLeft: 20 }}>
          Emprestimos em aberto:
        </Text>
        <View>
          <Text style={{ fontSize: 20, margin: 20 }}>{count}</Text>
        </View>
      </View>
    );
  }
  if (!count) {
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
            <Text style={styles.textNome}>Data do empréstimo: </Text>
            <Text style={styles.textNome}>{dataEmprestimo}</Text>
          </View>
          <View style={styles.viewTexto}>
            <Text style={styles.textNome}>{status}: </Text>
            <Text style={styles.textNome}>{devolocao}</Text>
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
    backgroundColor: "#ddd",
    margin: 20,
    borderRadius: 10,
    flexDirection: "row"
  },

  viewName: {
    flex: 1,
    backgroundColor: "#ddd",
    margin: 20,
    borderRadius: 10,
    flexDirection: "row"
  },
  viewType: {
    flex: 1,
    backgroundColor: "#ddd",
    margin: 20,
    borderRadius: 10,
    flexDirection: "row"
  },

  textNome: {
    fontSize: 15
  },

  textEmail: {
    fontSize: 15
  },

  icons: {
    marginRight: 10
  }
});
