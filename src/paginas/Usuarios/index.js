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

import User from "../../componentes/user";

export default class UserPage extends Component {
  _isMounted = false;
  static navigationOptions = {
    title: "Usuario",
    headerStyle: {},
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
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
      this.getValueUser(dataUser.id);
      this._isMounted = true;
    }
  };

  getValueUser = async id => {
    const res = await api.get(`/user/values/${id}`);
    this.setState({ dataUserValue: res.data });
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { getDataUser, dataUserValue } = this.state;
    return (
      <ScrollView
        style={{
          flex: 1
        }}
      >
        <View style={{ backgroundColor: "#ddd", margin: 20 }}>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <Text style={{ fontSize: 20 }}>Nome: </Text>
            <View
              style={{
                justifyContent: "center",
                width: 200
              }}
            >
              <Text style={{ fontSize: 20 }}>{getDataUser.name}</Text>
            </View>
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
              keyExtractor={item => item.email}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.searchButton}
          onPress={() =>
            this.props.navigation.navigate("LendingsPage", {
              dataUser: getDataUser
            })
          }
        >
          <Text style={styles.searchButtonText}>Emprestimos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.searchButton}
          onPress={() =>
            this.props.navigation.navigate("ReservationPage", {
              dataUser: getDataUser
            })
          }
        >
          <Text style={styles.searchButtonText}>Reservas</Text>
        </TouchableOpacity>
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
