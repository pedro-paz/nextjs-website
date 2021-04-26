import MenuItem from "../entities/Menu";
import Route from "../enums/Route";
import { FaBeer } from "react-icons/fa";
import { MdSearch, MdAccountCircle } from "react-icons/md";

export default class MenuService {
  public GetMenus(): MenuItem[] {
    return [
      {
        Icon: FaBeer,
        Name: "Clientes",
        SubMenu: [
          {
            Icon: MdSearch,
            Name: "Usuarios",
            Url: Route.User,
          },
          {
            Icon: MdSearch,
            Name: "Colaboradores",
            SubMenu: [
              {
                Icon: MdAccountCircle,
                Name: "Filial 1",
                Url: Route.Colaborators,
              },
            ],
          },
        ],
      },
      {
        Icon: FaBeer,
        Name: "Preferencias",
        Url: Route.Settings,
      },
      {
        Icon: FaBeer,
        Name: "Produtos",
        Url: Route.Products,
      },
    ];
  }
}
