import Revenue from "../entities/Revenue";
import IDashboardService from "../interfaces/IDashboardService";

export default class DashboardService implements IDashboardService {
  public getRevenues(): Revenue[][] {
    return new Array(3).fill(null).map<Revenue[]>((_x, i) =>
      new Array(7).fill(null).map<Revenue>((_y, j) => ({
        Id: i * 10 + j,
        Amount: 10 + Math.random() * 20,
      }))
    );
  }

  public getRevenuesByProduct(): Revenue[][] {
    return new Array(3).fill(null).map<Revenue[]>((_x, i) =>
      new Array(7).fill(null).map<Revenue>((_y, j) => ({
        Id: i * 10 + j,
        Amount: 10 + Math.random() * 20,
      }))
    );
  }
}
