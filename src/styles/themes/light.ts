import ITheme from "../../interfaces/ITheme";

export const lightTheme: ITheme = {
  background: "#ebebf5",
  fontColor: "#474747",
  card: {
    boxShadow: "2px 2px 44px 0px #a0a0a073",
    background: "transparent",
  },
  input: {
    background: "#ffffff3b",
    color: "black",
    boxShadow: "2px 2px 5px 0px #a0a0a073",
  },
  sideMenu: {
    boxShadow: "2px 2px 44px 0px #a0a0a073",
    background: "#ffffff40",
    color: "black",
    selectedCell: {
      color: "#7080e2",
    },
    notSelectedCell: {
      color: "#9faec7",
    },
    cellIndicator: {
      background: "#7080e2",
      boxShadow: "0 0 4px 2px #d4d9f9",
    },
  },
};
