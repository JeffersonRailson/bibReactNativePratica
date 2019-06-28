import React, { Component } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import api from "../../service/api";
import Lendings from "../../componentes/Lendings";

export default class LendingsMain extends Component {
  state = {
    dadosUser: [],
    dadosLendings: []
  };

  componentDidMount = async id => {
    this.getLendingsCount(id);
  };
  getLendings = async () => {
    const res = await api.get(`/lendings/${this.dataUser.id}`);
    this.setState({ dadosLendings: res.data });
  };

  getLendingsCount = async id => {
    const res = await api.get(`/lendings/count/${id}`);
    this.setState({ dadosLendings: res.data });
  };
  render() {
    const { navigation } = this.props;
    const dataUser = navigation.getParam("dataUser", "NO-NAME");
    this.componentDidMount(dataUser.id);
    const { dadosLendings } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Lendings
            DataEntrega={dataUser.name}
            Exemplar={dadosLendings.count}
          />
        </ScrollView>
      </View>
    );
  }
}
