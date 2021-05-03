interface ThemedElement {
  background?: string;
  boxShadow?: string;
  color?: string;
}

interface ThemedSideMenu {
  background?: string;
  boxShadow?: string;
  color?: string;
  selectedCell: ThemedElement;
  notSelectedCell: ThemedElement;
  cellIndicator: ThemedElement;
}

interface ITheme {
  background: string;
  fontColor: string;
  card: ThemedElement;
  input: ThemedElement;
  sideMenu: ThemedSideMenu;
}

export default ITheme;
