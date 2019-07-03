import React from "react";
import { View, AppRegistry } from "react-native";

import Main from "./paginas/principal";
import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import Routes from "./routes";

const App = () => <Routes />;

const AppBottomTabNavigator = createBottomTabNavigator({
  Home: Main
});
export default App;
