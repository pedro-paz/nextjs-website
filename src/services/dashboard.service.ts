import Revenue from "../entities/Revenue";
import Seller from "../entities/Seller";
import IDashboardService from "../interfaces/IDashboardService";

export default class DashboardService implements IDashboardService {
  public getSellers(): Seller[] {
    return [
      {
        Name: "Pedro Paz",
        Id: 42235,
        Amount: 350,
        Goal: 75,
        Status: "Pendente",
      },
      {
        Name: "Gustavo Farias",
        Id: 42442,
        Amount: 220,
        Goal: 100,
        Status: "Pendente",
      },
      {
        Name: "João Roberto",
        Id: 42257,
        Amount: 345,
        Goal: 35,
        Status: "Pendente",
      },
      {
        Name: "Janete Regina",
        Id: 42311,
        Amount: 115,
        Goal: 45,
        Status: "Pendente",
      },
    ];
  }
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
