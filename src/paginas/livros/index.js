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
import Book from "../../componentes/book";
const logo = require("../../assets/img/ifma.png");

export default class BooksSearch extends Component {
  static navigationOptions = {
    title: "Buscar Livros",
    headerStyle: {}
  };
  state = {
    data: [],
    search: null,
    type: null,
    renderFlat: false
  };

  search = async search => {
    const res = await api.get(`/${search}/q/${this.state.search}`);
    this.setState({ data: res.data });
    this.setState({ search: "" });
    this.setState({ renderFlat: true });
  };

  render() {
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
          onPress={() => this.search("users")}
        >
          <Text style={styles.searchButtonText}>Buscar</Text>
        </TouchableOpacity>
        <FlatList
          style={{ marginTop: 10 }}
          data={[{ key: "a" }, { key: "b" }]}
          renderItem={({ item }) => (
            <Book
              título={item.key}
              disponibilidade={item.key}
              autor={item.key}
            />
          )}
        />
        <View style={styles.component}>
          <TouchableOpacity />
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
    backgroundColor: "white",
    borderRadius: 10
  }
});
