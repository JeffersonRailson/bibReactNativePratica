import React, { Component } from "react";
import {
  ScrollView,
  Text,
  View,
  FlatList
} from "react-native";
import api from "../../service/api";
import Lendings from "../../componentes/Lendings";

export default class LendingsMain extends Component {
  _isMounted = false;
  static navigationOptions = {
    title: "Emprestimos",
    headerStyle: {}
  };
  state = {
    dadosUser: [],
    dadosLendata: [],
    dataCountLendings: []
  };

  componentDidMount = async () => {
    const { navigation } = this.props;
    const dataUser = navigation.getParam("dataUser", "NO-NAME");
    if (!this._isMounted) {
      this.setState({ dadosUser: dataUser });
      this.getLendingsCount(dataUser.id);
      this.getLendings(dataUser.id);
      this._isMounted = true;
    }
  };
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
  render() {
    const { dataCountLendings, dadosUser } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View>
            <Lendings count={dataCountLendings.count} />
          </View>
          <View>
            <FlatList
              data={[
                {
                  titulo: dadosUser.name,
                  dataEmprestimo: "Hoje",
                  devolocao: "Amanhã",
                  status: "Data prevista para devolução"
                }
              ]}
              renderItem={({ item }) => (
                <Lendings
                  titulo={item.titulo}
                  dataEmprestimo={item.dataEmprestimo}
                  devolocao={item.devolocao}
                  status={item.status}
                />
              )}
              keyExtractor={item => item.titulo}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
