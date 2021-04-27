import MenuItem from "../entities/Menu";

export default interface IMenuService {
  GetMenus(): MenuItem[];
}
