import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Lendings from "./paginas/emprestimos";
import Main from "./paginas/principal";
const Routes = createAppContainer(
  createSwitchNavigator({
    Main,
    Lendings
  })
);
export default Routes;
