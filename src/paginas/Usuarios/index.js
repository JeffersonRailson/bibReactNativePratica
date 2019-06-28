import React, { Component } from "react";

import { View, Button, Text, Image } from "react-native";

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
      this.getUser(id);
      this._isMounted = true;
    }
  };
  getLendingsNumber = async id => {
    const res = await api.get(`/lendings/count/${id}`);
    this.setState({ countLendingsUser: res.data });
  };

  getUser = async id => {
    const res = await api.get(`/users/${id}`);
    this.setState({ dataUser: res.data });
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { navigation } = this.props;
    const id = navigation.getParam("id", "NO-NAME");
    this.componentDidMount(id);
    const { countLendingsUser, dataUser } = this.state;
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
