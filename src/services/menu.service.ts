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
        Url: Route.Home,
      },
      {
        Icon: FiPieChart,
        Name: "Dashboard",
        Url: Route.Dashboard,
      },
      {
        Icon: FiCalendar,
        Name: "Calendário",
        Url: Route.Calendar,
      },
      {
        Icon: FiFolder,
        Name: "Documentos",
        Url: Route.Documents,
      },
    ];
  }
}
