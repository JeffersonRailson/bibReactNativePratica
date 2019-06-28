import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Lendings from "./paginas/emprestimos";
import Main from "./paginas/principal";
import user from "./paginas/Usuarios";
import books from "./paginas/livros";
const Routes = createAppContainer(
  createSwitchNavigator({
    Main,
    books,
    Lendings,
    user
  })
);
export default Routes;
