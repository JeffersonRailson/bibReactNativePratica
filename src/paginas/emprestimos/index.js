import React, { Component } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import api from "../../service/api";
import Lendings from "../../componentes/User";

export default class LendingsMain extends Component {
  state = {
    dadosLendings: []
  };

  componentDidMount = async () => {
    this.getLendings();
    this.getUsers();
  };
  getLendings = async id => {
    const res = await api.get(`/lendings/${id}`);
    this.setState({ dadosLendings: res.data });
  };
  render() {
    const { dadosLendings } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
 
        </ScrollView>
      </View>
    );
  }
}
