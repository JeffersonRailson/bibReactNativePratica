import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  Image
} from "react-native";
import api from "../../service/api";
import User from "../../componentes/User";

export default class App extends Component {
  state = {
    data: [],
    user: "",
    noLogged: true
  };

  login = async () => {
    const res = await api.get(`/users/${this.state.user}`);
    this.setState({ data: res.data });
    this.setState({ noLogged: false });
    this.setState({ user: "" });
  };
  logoff = () => {
    this.setState({ user: "" });
    this.setState({ data: [] });
    this.setState({ noLogged: true });
  };
  render() {
    const { data } = this.state;
    return (
      <ScrollView style={styles.conteinerScroll}>
        <View style={styles.container}>
          <Text
            style={{
              fontSize: 25,
              textAlign: "center",
              margin: 15,
              color: "red"
            }}
          >
            awdawdawd
          </Text>
          {this.state.noLogged && (
            <View>
              <TextInput
                style={styles.containerForm}
                placeholder="Informe o usuário (id)"
                autoCapitalize="none"
                onChangeText={text => {
                  this.setState({ user: text });
                }}
              />
            </View>
          )}

          <View style={styles.containerButton}>
            {this.state.noLogged && (
              <Button title="logar" onPress={this.login} />
            )}
            {!this.state.noLogged && (
              <Button title="Sair" onPress={this.logoff} />
            )}
          </View>
          {!this.state.noLogged && (
            <User
              nome={data.name}
              tipo={data.type ? "Leitor" : "funcionario"}
            />
          )}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  conteinerScroll: {
    flex: 1,
    backgroundColor: "#b0c4de"
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#b0c4de"
  },

  containerRepo: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    margin: 20
  },

  containerForm: {
    width: 300,
    padding: 5,
    backgroundColor: "white"
  },

  containerButton: {
    margin: 15
  },

  text: {
    fontSize: 15,
    textAlign: "center",
    margin: 5,
    color: "orange",
    fontWeight: "bold"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
