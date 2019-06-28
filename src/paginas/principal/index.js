import React, { Component } from "react";

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Image
} from "react-native";
import api from "../../service/api";
import User from "../../componentes/User";
const logo = require("../../assets/img/ifma.png");

export default class Home extends Component {
  state = {
    data: [],
    search: null,
    type: null,
    teste: false
  };

  search = async search => {
    const res = await api.get(`/${search}/q/${this.state.search}`);
    this.setState({ data: res.data });
    this.setState({ search: "" });
    this.setState({ teste: true });
  };

  render() {
    const { data, teste } = this.state;
    return (
      <View style={styles.container}>
        <Image style={{ width: 70, height: 70, margin: 15 }} source={logo} />
        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite os termos da Pesquisa"
          placeholderTextColor="#999"
          onChangeText={description => this.setState({ search: description })}
        />
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => this.search("users")}
        >
          <Text style={styles.searchButtonText}>Buscar</Text>
        </TouchableOpacity>
        <View style={styles.component}>
          {teste &&
            data.map(user => (
              <TouchableOpacity
                key={user.id}
                onPress={() =>
                  this.props.navigation.navigate("user", {
                    dataUser: user
                  })
                }
              >
                <User
                  key={user.id}
                  nome={user.name}
                  tipo={user.type ? "Leitor" : "funcionario"}
                />
              </TouchableOpacity>
            ))}
        </View>
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
  input: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 15,
    marginTop: 10,
    fontSize: 16
  },
  searchButton: {
    backgroundColor: "#00FF7F",
    borderRadius: 4,
    height: 42,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  searchButtonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#FFF"
  },
  logo: {
    height: 128,
    width: 138,
    resizeMode: "center"
  },
  component: {
    marginTop: 50,
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10
  }
});
