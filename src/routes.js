import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Lendings from "./paginas/emprestimos";
import Main from "./paginas/principal";
import user from "./paginas/Usuarios";
const Routes = createAppContainer(
  createSwitchNavigator({
    Main,
    Lendings,
    user
  })
);
export default Routes;
