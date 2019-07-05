import React, { Component } from "react";
import {
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  StyleSheet
} from "react-native";
import api from "../../service/api";
import Lendings from "../../componentes/lendings";

export default class LendingsMain extends Component {
  _isMounted = false;
  static navigationOptions = {
    title: "Emprestimos do usuario",
    headerStyle: {}
  };
  state = {
    getDataUser: [],
    dataLendata: [],
    dataCountLendings: [],
    dataBook: [],
    renderNull: false
  };

  componentDidMount = async () => {
    const { navigation } = this.props;
    const dataUser = navigation.getParam("dataUser", "NO-NAME");
    if (!this._isMounted) {
      this.setState({ getDataUser: dataUser });
      this.getLendingsCount(dataUser.id);
      this.getLendings(dataUser.id);
      this.getBookValue(dataUser.id);
      this._isMounted = true;
    }
  };

  componentDidUpdate() {
    this.componentDidMount();
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  getLendings = async id => {
    const res = await api.get(`/lendings/${id}`);
    this.setState({ dataLendings: res.data });
  };

  getLendingsCount = async id => {
    const res = await api.get(`/lendings/count/${id}`);
    this.setState({ dataCountLendings: res.data });
  };

  getBookValue = async id => {
    const res = await api.get(`/lending/user/book/${id}`);
    this.setState({ dataBook: res.data });
    if (this.state.dataBook[0]) {
      this.setState({ renderNull: true });
    }
  };

  getDateReservation = (idBook, id) => {
    const { dataReservation } = this.state;
    let retorno = "";
    dataReservation.map(item => {
      if (item.record_id === idBook && item.id === id) {
        retorno = item;
      }
    });
    return retorno;
  };

  render() {
    const { dataCountLendings, getDataUser, dataBook, renderNull } = this.state;
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
            <Lendings
              tipoConsulta="user"
              nome={getDataUser.name}
              matricula={getDataUser.id}
              tipoUsuario={getDataUser.type == 1 ? "Leitor" : "funcionario"}
              emprestimosCount={dataCountLendings.count}
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
                  <Lendings
                    tipoConsulta="book"
                    titulo={item.titulo}
                    autor={item.autores}
                    publicacao={item.publicacao}
                    isbn={item.isbn}
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
