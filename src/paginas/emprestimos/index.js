import React, { Component } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import api from "../../service/api";
import Lendings from "../../componentes/Lendings";

export default class LendingsMain extends Component {
  _isMounted = false;
  state = {
    dadosUser: [],
    dadosLendings: []
  };

  componentDidMount = async () => {
    const { navigation } = this.props;
    const dataUser = navigation.getParam("dataUser", "NO-NAME");
    if (!this._isMounted) {
      this.setState({ dadosUser: dataUser });
      this.getLendingsCount(dataUser.id);

      this._isMounted = true;
    }
  };
  componentWillUnmount() {
    this._isMounted = false;
  }
  getLendings = async () => {
    const res = await api.get(`/lendings/${this.dadosUser.id}`);
    this.setState({ dadosLendings: res.data });
  };

  getLendingsCount = async id => {
    const res = await api.get(`/lendings/count/${id}`);
    this.setState({ dadosLendings: res.data });
  };
  render() {
    const { dadosLendings, dadosUser } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Lendings
            DataEntrega={dadosUser.name}
            Exemplar={dadosLendings.count}
          />
        </ScrollView>
      </View>
    );
  }
}
