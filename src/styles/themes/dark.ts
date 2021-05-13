import ITheme from "../../interfaces/ITheme";

export const darkTheme: ITheme = {
  background: "linear-gradient(37deg, #2d354a, #352e36)",
  fontColor: "#e2e2e2",
  gradient: ["#934bea", "#c147c1", "#f64294"],
  boxShadow: "0 0 40px 3px #00000073",
  lightColor: "#ffffff0d",
  darkColor: "#0000005c",
  card: {
    boxShadow: "0 0 40px 3px #00000073;",
    background: "#0000006b",
    solidBackground: "#18171d",
  },
  input: {
    color: "#dbdbdb",
    boxShadow: "0 0 40px 3px #00000073",
    background: "#00000087",
  },
  sideMenu: {
    boxShadow: "0 0 40px 3px #00000073",
    background: "#00000066",
    color: "white",
    selectedCell: {
      color: "#fafafa",
    },
    notSelectedCell: {
      color: "#79839c",
    },
    cellIndicator: {
      background: "#efefef",
      boxShadow: "0 0 4px 2px #3a3a3a",
    },
  },
};
