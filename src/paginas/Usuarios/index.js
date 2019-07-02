import React, { Component } from "react";

import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  FlatList,
  StyleSheet
} from "react-native";

import api from "../../service/api";

import User from "../../componentes/User";

export default class Users extends Component {
  _isMounted = false;
  state = {
    refreshing: false,
    countLendingsUser: [],
    getDataUser: [],
    dataUserValue: []
  };

  componentDidMount = async => {
    const { navigation } = this.props;
    const dataUser = navigation.getParam("dataUser", "NO-NAME");
    if (!this._isMounted) {
      this.setState({ getDataUser: dataUser });
      this.getLendingsNumber(dataUser.id);
      this.getValueUser(dataUser.id);
      this._isMounted = true;
    }
  };
  getLendingsNumber = async id => {
    const res = await api.get(`/lendings/count/${id}`);
    this.setState({ countLendingsUser: res.data });
  };

  getValueUser = async id => {
    const res = await api.get(`/user/values/${id}`);
    const [
      dataNascimento,
      ,
      endereco,
      ,
      enderecoComplemento,
      telTrabalho,
      enderecoEstado,
      ,
      cpf,
      enderecoNumero,
      enderecoCidade,
      telCasa,
      telCell,
      ,
      cep,
      email
    ] = res.data;
    const dataUserValueObj = {
      dataNascimento,
      endereco,
      enderecoComplemento,
      telTrabalho,
      enderecoEstado,
      cpf,
      enderecoNumero,
      enderecoCidade,
      telCasa,
      telCell,
      cep,
      email
    };
    this.setState({ dataUserValue: dataUserValueObj });
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { countLendingsUser, getDataUser, dataUserValue } = this.state;
    return (
      <ScrollView
        style={{
          flex: 1
        }}
      >
        <View style={{ backgroundColor: "#ddd", margin: 20 }}>
          <View>
            <Text style={{ fontSize: 20 }}>{getDataUser.name}</Text>
          </View>
          <View style={{ margin: 20, alignItems: "center" }}>
            <FlatList
              data={[dataUserValue]}
              renderItem={({ item }) => (
                <User
                  consultaCompleta={true}
                  tel={item.telCell}
                  endereco={item.endereco}
                  email={item.email}
                />
              )}
              keyExtractor={item => item.dataNascimento}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.searchButton}
          onPress={() =>
            this.props.navigation.navigate("Lendings", {
              dataUser: getDataUser
            })
          }
        >
          <Text style={styles.searchButtonText}>Emprestimos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => this.props.navigation.navigate("Main")}
        >
          <Text style={styles.searchButtonText}>Voltar</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  searchButton: {
    backgroundColor: "#00FF7F",
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
