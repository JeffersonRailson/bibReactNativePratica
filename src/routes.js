import { Image, View } from "react-native";
import React, { Component } from "react";
import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

const logo = require("./assets/img/ifma.png");

import Lendings from "./paginas/emprestimos";
import Main from "./paginas/principal";
import user from "./paginas/Usuarios";
import books from "./paginas/livros";
const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      books,
      user,
      Lendings
    },
    {
      initialRouteName: "Main",
      defaultNavigationOptions: {
        headerTintColor: "green",
        headerTitle: (
          <View style={{ alignItems: "center" }}>
            <Image style={{ width: 60, height: 60 }} source={logo} />
          </View>
        ),
        headerBackTitle: null
      },
      mode: "modal"
    }
  )
);
export default Routes;
