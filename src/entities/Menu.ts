import { IconType } from "react-icons";
import Route from "../enums/Route";

export default interface MenuItem {
  Name: string;
  Icon: IconType;
  Url?: Route;
  SubMenu?: MenuItem[];
}
