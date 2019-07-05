import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import User from "./user";

// import { Container } from './styles';

export default function Reservation({
  tipoConsulta,
  nome,
  matricula,
  tipoUsuario,
  dataReserva,
  expira,
  titulo,
  autor,
  publicacao,
  isbn
}) {
  if (tipoConsulta === "user") {
    return (
      <View style={styles.conteiner1}>
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
            <Text style={styles.textNome}>Matricula: 0000</Text>
            <Text style={styles.textNome}>{matricula}</Text>
          </View>
          <View style={styles.viewTexto}>
            <Text style={styles.textNome}>Tipo usuario: </Text>
            <Text style={styles.textNome}>{tipoUsuario}</Text>
          </View>
        </View>
      </View>
    );
  }
  if (tipoConsulta === "book") {
    return (
      <View style={styles.conteiner2}>
        <View>
          <View style={styles.viewTexto2}>
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
          <View style={styles.viewTexto2}>
            <Text style={styles.textNome}>Autor: </Text>
            <Text style={styles.textNome}>{autor}</Text>
          </View>
          <View style={styles.viewTexto2}>
            <Text style={styles.textNome}>Ano de publicacao: </Text>
            <Text style={styles.textNome}>{publicacao}</Text>
          </View>

          <View style={styles.viewTexto2}>
            <Text style={styles.textNome}>ISBN: </Text>
            <Text style={styles.textNome}>{isbn}</Text>
          </View>
          <View style={styles.viewTexto2}>
            <Text style={styles.textNome}>Data da reserva: </Text>
            <Text style={styles.textNome}>{expira}</Text>
          </View>
          <View style={styles.viewTexto2}>
            <Text style={styles.textNome}>Data de expiração da reserva: </Text>
            <View
              style={{
                justifyContent: "center",
                width: 100
              }}
            >
              <Text style={styles.textNome}>{dataReserva}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conteiner1: {
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#ddd",
    height: 150
  },
  conteiner2: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ddd",
    margin: 20,
    borderRadius: 10
  },

  viewTexto: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ddd",
    margin: 5,
    borderRadius: 10,
    flexDirection: "row"
  },

  viewTexto2: {
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
