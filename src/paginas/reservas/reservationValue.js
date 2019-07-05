import React, { Component } from "react";

import { View, Text, ScrollView, FlatList, StyleSheet } from "react-native";

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
    dataBook: [],
    renderFlat: false
  };

  teste = {
    teste: ""
  };

  componentDidMount = async => {
    const { navigation } = this.props;
    const dataUser = navigation.getParam("dataUser", "NO-NAME");
    if (!this._isMounted) {
      this.setState({ getDataUser: dataUser });
      this.getReservation(dataUser.id);
      this._isMounted = true;
    }
  };

  getReservation = async record_id => {
    const res = await api.get(`/reservations/user/${record_id}`);
    this.setState({ dataReservation: res.data });
  };

  getBookValue = async id => {
    const res = await api.get(`/book/${id}`);
    this.setState({ dataBook: res.data });
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { getDataUser, dataReservation, dataBook } = this.state;
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
              <Text style={{ fontSize: 20 }} />
            </View>
            <View>
              {dataReservation.map(item => (
                <Text>{this.getBookValue(item.record_id)}</Text>
              ))}

              <Text />
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
