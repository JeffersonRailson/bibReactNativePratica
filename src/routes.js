import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Lendings from "./paginas/emprestimos";
import Main from "./paginas/principal";
import teste from "./paginas/principal/teste";
const Routes = createAppContainer(
  createSwitchNavigator({
    Main,
    teste,
    Lendings
  })
);
export default Routes;
