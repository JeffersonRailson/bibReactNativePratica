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

import Reservation from "../../componentes/reservation";

export default class ReservationPage extends Component {
  _isMounted = false;
  static navigationOptions = {
    title: "Reservas",
    headerStyle: {},
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  state = {
    refreshing: false,
    getDataUser: [],
    dataReservation: [],
    renderFlat: false
  };

  componentDidMount = async => {
    const { navigation } = this.props;
    const dataUser = navigation.getParam("dataUser", "NO-NAME");
    if (!this._isMounted) {
      this.setState({ getDataUser: dataUser });
      this._isMounted = true;
      renderFlat: false;
    }
  };

  getReservation = async () => {
    const { getDataUser } = this.state;
    const res = await api.get(`/reservations/user/${getDataUser.id}`);
    this.setState({ dataReservation: res.data });
  };

  getValueBook = async () => {
    const { getDataUser } = this.state;
    const res = await api.get(`/book/`);
    this.setState({ dataReservation: res.data });
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { getDataUser, renderFlat } = this.state;
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
            <View>
              {renderFlat && (
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
