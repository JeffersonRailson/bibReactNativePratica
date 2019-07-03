import React from "react";
import { TouchableOpacity, Image } from "react-native";

import logo from "../../assets/img/ifma.png";

const ButtonMenu = ({ onPressCallback }) => (
  <TouchableOpacity onPress={onPressCallback}>
    <Image style={{ height: 50, width: 50 }} source={logo} />
  </TouchableOpacity>
);

export default ButtonMenu;
