import Revenue from "../entities/Revenue";
import IDashboardService from "../interfaces/IDashboardService";

export default class DashboardService implements IDashboardService {
  public getGoalPercentage(): number {
    return Math.round(30 + Math.random() * 70);
  }
  public getRevenues(): Revenue[][] {
    return new Array(3).fill(null).map<Revenue[]>((_x, i) =>
      new Array(7).fill(null).map<Revenue>((_y, j) => ({
        Id: i * 10 + j,
        Amount: 10 + Math.random() * 20,
      }))
    );
  }
}
