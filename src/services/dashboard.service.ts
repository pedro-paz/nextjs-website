import MenuItem from "../entities/Menu";
import IDashboardService from "../interfaces/IDashboardService";

export default class DashboardService implements IDashboardService {
  GetData(): MenuItem[] {
    throw new Error("Method not implemented.");
  }
}
