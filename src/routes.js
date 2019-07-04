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

import LendingsPage from "./paginas/emprestimos";
import UserSearchPage from "./paginas/Usuarios";
import UserValuePage from "./paginas/Usuarios/userValue";
import BookPage from "./paginas/livros";
import Main from "./paginas/principal";
import ReservationSearch from "./paginas/reservas/";
import ReservationPage from "./paginas/reservas/reservationValue";

const LendingsStack = createStackNavigator(
  {
    UserSearchPage,
    UserValuePage,
    LendingsPage,
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

const ReservationStack = createStackNavigator(
  {
    ReservationSearch,
    ReservationPage,
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
    Main,
    BookPage
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
        drawerLabel: "Inicio",
        drawerIcon: ({ focused, tintColor }) => (
          <Icon name="book" size={28} color="black" />
        )
      }
    },

    Emprestimos: {
      screen: LendingsStack,
      navigationOptions: {
        drawerLabel: "Emprestimos",
        drawerIcon: ({ focused, tintColor }) => (
          <Icon name="user" size={28} color="black" />
        )
      }
    },
    Reservas: {
      screen: ReservationStack,
      navigationOptions: {
        drawerLabel: "Reservas",
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
