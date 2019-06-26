import React, { Component } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import api from "../../service/api";
import Lendings from "../../componentes/User";

export default class LendingsMain extends Component {
  state = {
    refreshing: false
  };

  render() {
    const { navigation, user } = this.props;
    const nome = navigation.getParam("name", "NO-NAME");
    const idade = navigation.getParam("idade", "NO-AGE");
    const sexo = navigation.getParam("sexo", "NO-SEX");
    const endereco = navigation.getParam("endereco", "NO-ADDRESS");
    const cidade = navigation.getParam("cidade", "NO-CITY");
    const uf = navigation.getParam("uf", "NO-UF");
    const image = navigation.getParam("image", "");
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
