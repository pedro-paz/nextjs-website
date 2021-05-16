import MenuItem from "../entities/Menu";
import Revenue from "../entities/Revenue";
import Seller from "../entities/Seller";

export default interface IDashboardService {
  getRevenues(): Revenue[][];
  getGoalPercentage(): number;
  getSellers(): Seller[];
}
