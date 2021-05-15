import MenuItem from "../entities/Menu";
import Revenue from "../entities/Revenue";

export default interface IDashboardService {
  getRevenues(): Revenue[][];
  getGoalPercentage(): number;
}
