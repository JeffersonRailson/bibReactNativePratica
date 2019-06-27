import React, { Component } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import api from "../../service/api";
import Lendings from "../../componentes/User";

export default class LendingsMain extends Component {
  state = {
    dadosUsers: [],
    dadosLendings: []
  };

  componentDidMount = async () => {
    this.getLendings();
    this.getUsers();
  };
  getLendings = async () => {
    const res = await api.get("/lendings");
    this.setState({ dadosLendings: res.data });
  };

  getUsers = async () => {
    const res = await api.get("/users");
    this.setState({ dadosUsers: res.data });
  };

  render() {
    const { dadosUsers } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          {dadosUsers.map(dados => (
            <TouchableOpacity key={dados.id} onPress={() => alert("blz")}>
              <Lendings
                nome={dados.name}
                tipo={dados.type === 1 ? "Leitor" : "Funcionario"}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}
