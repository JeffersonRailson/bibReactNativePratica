import React from "react";
import { Image } from "react-native";
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
  DrawerActions
} from "react-navigation";
import ButtonMenu from "./componentes/MenuGaveta/botao";

import Icon from "react-native-vector-icons/FontAwesome";

import Lendings from "./paginas/emprestimos";
import UserSearch from "./paginas/Usuarios";
import UserScreen from "./paginas/Usuarios/userValue";
import BooksSearch from "./paginas/livros";
import Main from "./paginas/principal";

const UserStack = createStackNavigator(
  {
    UserSearch,
    UserScreen,
    Lendings,
    Main
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerLeft: (
        <ButtonMenu
          onPressCallback={() =>
            navigation.dispatch(DrawerActions.toggleDrawer())
          }
        />
      ),
      headerTitleStyle: {
        fontWeight: "bold"
      }
    })
  }
);

const BookStack = createStackNavigator(
  {
    BooksSearch,
    Main
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerLeft: (
        <ButtonMenu
          onPressCallback={() =>
            navigation.dispatch(DrawerActions.toggleDrawer())
          }
        />
      ),
      headerTitleStyle: {
        fontWeight: "bold"
      }
    })
  }
);

const MainStack = createStackNavigator(
  {
    Main
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerLeft: (
        <ButtonMenu
          onPressCallback={() =>
            navigation.dispatch(DrawerActions.toggleDrawer())
          }
        />
      ),
      headerTitleStyle: {
        fontWeight: "bold"
      }
    })
  }
);

const BibDrawer = createDrawerNavigator(
  {
    Inicio: {
      screen: MainStack,
      navigationOptions: {
        drawerLabel: "Inicio"
      }
    },

    Usuario: {
      screen: UserStack,
      navigationOptions: {
        drawerLabel: "Usuarios",
        drawerIcon: ({ focused, tintColor }) => (
          <Icon name="user" size={28} color="black" />
        )
      }
    },
    Livros: {
      screen: BookStack,
      navigationOptions: {
        drawerLabel: "Livros",
        drawerIcon: ({ focused, tintColor }) => (
          <Icon name="book" size={28} color="black" />
        )
      }
    }
  },
  {
    contentOptions: {
      activeTintColor: "green",
      labelStyle: {
        fontSize: 20
      }
    },
    style: {
      flex: 1,
      margin: 10
    }
  }
);

const Routes = createAppContainer(BibDrawer);
export default Routes;
