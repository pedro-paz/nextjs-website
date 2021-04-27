import MenuItem from "../entities/Menu";
import Route from "../enums/Route";
import { FiCalendar, FiFolder, FiHome, FiPieChart } from "react-icons/fi";
import IMenuService from "../interfaces/IMenuService";

export default class MenuService implements IMenuService {
  public GetMenus(): MenuItem[] {
    return [
      {
        Icon: FiHome,
        Name: "Inicio",
        Url: Route.User,
      },
      {
        Icon: FiPieChart,
        Name: "Dashboard",
        Url: Route.Colaborators,
      },
      {
        Icon: FiCalendar,
        Name: "Calendário",
        Url: Route.Settings,
      },
      {
        Icon: FiFolder,
        Name: "Documentos",
        Url: Route.Products,
      },
    ];
  }
}
