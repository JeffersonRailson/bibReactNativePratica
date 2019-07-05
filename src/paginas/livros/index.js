import React, { Component } from "react";

import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  FlatList,
  StyleSheet
} from "react-native";


import Book from "../../componentes/book";

export default class BookPage extends Component {
  _isMounted = false;
  static navigationOptions = {
    title: "Livro",
    headerStyle: {},
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  state = {
    refreshing: false,
    getDataBook: []
  };

  componentDidMount = async => {
    const { navigation } = this.props;
    const dataBook = navigation.getParam("dataBook", "NO-NAME");
    if (!this._isMounted) {
      this.setState({ getDataBook: dataBook });
      this._isMounted = true;
    }
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { getDataBook } = this.state;
    return (
      <ScrollView
        style={{
          flex: 1
        }}
      >
        <View style={{ backgroundColor: "#ddd", margin: 20 }}>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <Text style={{ fontSize: 20 }}>Titulo: </Text>
            <View
              style={{
                justifyContent: "center",
                width: 200
              }}
            >
              <Text style={{ fontSize: 20 }}>{getDataBook.titulo}</Text>
            </View>
          </View>
          <View style={{ margin: 20, alignItems: "center" }}>
            <FlatList
              data={[getDataBook]}
              renderItem={({ item }) => (
                <Book
                  autor={item.autores}
                  publicacao={item.publicacao}
                  isbn={item.isbn}
                  assusnto={item.assunto}
                  tipoConsulta={true}
                />
              )}
              keyExtractor={item => item.email}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  searchButton: {
    backgroundColor: "green",
    borderRadius: 4,
    height: 42,
    margin: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  searchButtonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#FFF"
  }
});
