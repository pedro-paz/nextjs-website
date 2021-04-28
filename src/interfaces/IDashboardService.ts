import MenuItem from "../entities/Menu";

export default interface IDashboardService {
  GetData(): MenuItem[];
}
