import React, { Component } from "react";

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  FlatList,
  Picker
} from "react-native";
import api from "../../service/api";
import Book from "../../componentes/book";

export default class Main extends Component {
  static navigationOptions = {
    title: "Inicio - Buscar Livro",
    headerStyle: {}
  };
  state = {
    data: [],
    search: null,
    typeSearch: "assunto",
    renderFlat: false
  };

  searchBook = async () => {
    const { typeSearch, search } = this.state;
    const res = await api.get(`/book/${typeSearch}/${search}`);

    this.setState({ data: res.data });
    if (this.state.data[0]) {
      this.setState({ search: "" });
      this.setState({ renderFlat: true });
    }
  };

  render() {
    const { search, typeSearch, renderFlat, data } = this.state;
    return (
      <View style={styles.container}>
        <Picker
          selectedValue={this.state.typeSearch}
          onValueChange={item => this.setState({ typeSearch: item })}
        >
          <Picker.item label="Buscar por assunto" value="assunto" />
          <Picker.item label="Buscar por titulo" value="titulo" />
        </Picker>
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
          onPress={() => this.searchBook()}
        >
          <Text style={styles.searchButtonText}>Buscar</Text>
        </TouchableOpacity>
        <View style={styles.component}>
          {data[0] && (
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("BookPage", {
                      dataBook: item
                    })
                  }
                >
                  <Book
                    titulo={item.titulo}
                    autor={item.autores}
                    assusnto={item.assunto}
                    publicacao={item.publicacao}
                    isbn={item.isbn}
                  />
                </TouchableOpacity>
              )}
              keyExtractor={item => item.titulo}
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
    backgroundColor: "white",
    borderRadius: 10
  }
});
