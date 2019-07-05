import React, { Component } from "react";

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from "react-native";

import { parseISO, format, formatRelative, formatDistance } from "date-fns";

import api from "../../service/api";

import Reservation from "../../componentes/reservation";

export default class ReservationPage extends Component {
  _isMounted = false;
  static navigationOptions = {
    title: "Reservas do usuario",
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
    renderNull: false
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
      this.getBookValue(dataUser.id);

      this._isMounted = true;
    }
  };

  getReservation = async record_id => {
    const res = await api.get(`/reservations/user/${record_id}`);
    this.setState({ dataReservation: res.data });
  };

  getBookValue = async idUser => {
    const res = await api.get(`/reservations/user/book/${idUser}`);
    this.setState({ dataBook: res.data });
    if (this.state.dataBook[0]) {
      this.setState({ renderNull: true });
    }
  };

  getDateReservation = idBook => {
    const { dataReservation } = this.state;
    let retorno = "";
    dataReservation.map(item => {
      if (item.record_id === idBook) {
        retorno = item;
      }
    });
    return retorno;
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { getDataUser, dataBook, renderNull } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.componentReservationUser}>
          <TouchableOpacity
            style={styles.searchButton}
            onPress={() =>
              this.props.navigation.navigate("UserPage", {
                dataUser: getDataUser
              })
            }
          >
            <Reservation
              tipoConsulta="user"
              nome={getDataUser.name}
              matricula={getDataUser.id}
              tipoUsuario={getDataUser.type == 1 ? "Leitor" : "funcionario"}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.componentReservationBook}>
          {dataBook[0] && (
            <FlatList
              data={dataBook}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("BookPage", {
                      dataBook: item
                    })
                  }
                >
                  <Reservation
                    tipoConsulta="book"
                    titulo={item.titulo}
                    autor={item.autores}
                    publicacao={item.publicacao}
                    isbn={item.isbn}
                    expira={
                      this.getDateReservation(item.id).created ||
                      "não encontrada"
                    }
                    dataReserva={
                      this.getDateReservation(item.id).expires ||
                      "não encontrada"
                    }
                  />
                </TouchableOpacity>
              )}
              keyExtractor={item => item.titulo}
            />
          )}

          {!renderNull && (
            <Text style={{ fontSize: 50, textAlign: "center" }}>
              Sem reservas aquivadas
            </Text>
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

  componentReservationBook: {
    marginTop: 20,
    marginBottom: 50,
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10
  },
  componentReservationUser: {
    backgroundColor: "white",
    borderRadius: 10
  }
});
