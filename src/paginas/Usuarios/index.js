import React, { Component } from "react";

import { View, Button, Text, TouchableOpacity } from "react-native";

import api from "../../service/api";

export default class Users extends Component {
  _isMounted = false;
  state = {
    refreshing: false,
    countLendingsUser: [],
    dataUser: []
  };

  componentDidMount = async id => {
    if (!this._isMounted) {
      this.getLendingsNumber(id);
      this._isMounted = true;
    }
  };
  getLendingsNumber = async id => {
    const res = await api.get(`/lendings/count/${id}`);
    this.setState({ countLendingsUser: res.data });
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { navigation } = this.props;
    const dataUser = navigation.getParam("dataUser", "NO-NAME");
    this.componentDidMount(dataUser.id);
    const { countLendingsUser } = this.state;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <View style={{ backgroundColor: "#ddd", margin: 20 }}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("Lendings", {
                dataUser: dataUser
              })
            }
          >
            <View style={{ margin: 20, alignItems: "center" }}>
              <Text style={{ fontSize: 24, textTransform: "capitalize" }}>
                Nome:
                {dataUser.name}
              </Text>
              <View style={{ margin: 20, alignItems: "center" }}>
                <Text style={{ fontSize: 24, textTransform: "capitalize" }}>
                  emprestimos em aberto:
                  {countLendingsUser.count}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <Button
          style={{ margin: 20 }}
          title="Voltar"
          onPress={() => this.props.navigation.navigate("Main")}
        />
      </View>
    );
  }
}
