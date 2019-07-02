import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function User({
  nome,
  tipo,
  consultaCompleta,
  email,
  tel,
  endereco
}) {
  if (consultaCompleta) {
    return (
      <View style={styles.conteiner}>
        <View>
          <View style={styles.viewTexto}>
            <Text style={styles.textTipo}>Email: </Text>
            <Text style={styles.textEmail}>{email}</Text>
          </View>

          <View style={styles.viewTexto}>
            <Text style={styles.textTipo}>Telefone: </Text>
            <Text style={styles.textTipo}>{tel}</Text>
          </View>
          <View style={styles.viewTexto}>
            <Text style={styles.textTipo}>Endereço: </Text>
            <View
              style={{
                justifyContent: "center",
                width: 200
              }}
            >
              <Text style={styles.textNome}>{endereco}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
  if (!consultaCompleta) {
    return (
      <View style={styles.conteiner}>
        <View>
          <View style={styles.viewTexto}>
            <Text style={styles.textNome}>Nome: </Text>
            <View
              style={{
                justifyContent: "center",
                width: 200
              }}
            >
              <Text style={styles.textNome}>{nome}</Text>
            </View>
          </View>
          <View style={styles.viewTexto}>
            <Text style={styles.textNome}>Tipo: </Text>
            <Text style={styles.textNome}>{tipo}</Text>
          </View>
        </View>
        <Icon style={styles.icons} name="angle-right" size={50} />
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
