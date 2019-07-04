import React, { Component } from "react";

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  FlatList
} from "react-native";
import api from "../../service/api";
import User from "../../componentes/User";
const logo = require("../../assets/img/logo.png");

export default class UserSearch extends Component {
  static navigationOptions = {
    title: "Buscar Usuário",
    headerStyle: {}
  };
  state = {
    data: [],
    search: null,
    type: null,
    renderFlat: false
  };

  search = async () => {
    const res = await api.get(`/users/q/${this.state.search}`);
    this.setState({ data: res.data });
    this.setState({ search: "" });
    this.setState({ renderFlat: true });
  };

  render() {
    const { data, renderFlat } = this.state;
    return (
      <View style={styles.container}>
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
          onPress={() => this.search()}
        >
          <Text style={styles.searchButtonText}>Buscar</Text>
        </TouchableOpacity>
        <View style={styles.component}>
          {renderFlat && (
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("UserScreen", {
                      dataUser: item
                    })
                  }
                >
                  <User
                    nome={item.name}
                    tipo={item.type ? "Leitor" : "funcionario"}
                  />
                </TouchableOpacity>
              )}
              keyExtractor={item => item.name}
            />
          )}
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
    backgroundColor: "green",
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
    borderRadius: 10
  }
});
