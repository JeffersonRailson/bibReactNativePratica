import React, { Component } from "react";

import { View, Button, Text, TouchableOpacity, FlatList } from "react-native";

import api from "../../service/api";

import User from "../../componentes/User";

export default class Users extends Component {
  _isMounted = false;
  state = {
    refreshing: false,
    countLendingsUser: [],
    dataUser: [],
    dataUserValues: []
  };

  componentDidMount = async id => {
    if (!this._isMounted) {
      this.getLendingsNumber(id);
      this.getUserValue(id);
      this._isMounted = true;
    }
  };
  getLendingsNumber = async id => {
    const res = await api.get(`/lendings/count/${id}`);
    this.setState({ countLendingsUser: res.data });
  };

  getUserValue = async id => {
    const res = await api.get(`/user/values/${id}`);
    this.setState({ dataUserValues: res.data });
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { navigation } = this.props;
    const dataUser = navigation.getParam("dataUser", "NO-NAME");
    this.componentDidMount(dataUser.id);
    const { countLendingsUser, dataUserValues } = this.state;
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
          />
          <View style={{ margin: 20, alignItems: "center" }}>
            <FlatList
              data={dataUserValues}
              renderItem={({ item }) => (
                <User consultaCompleta={true} email={item.key == "email"} />
              )}
            />
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
