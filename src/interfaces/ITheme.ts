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

interface ThemeCard extends ThemedElement {
  solidBackground;
}

interface ITheme {
  background: string;
  fontColor: string;
  card: ThemeCard;
  input: ThemedElement;
  sideMenu: ThemedSideMenu;
}

export default ITheme;
