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
  gradient: string[];
  background: string;
  lightColor: string;
  darkColor: string;
  mutedColor: string;
  fontColor: string;
  boxShadow: string;
  card: ThemeCard;
  input: ThemedElement;
  sideMenu: ThemedSideMenu;
  button: ThemedElement;
  ghostButton: ThemedElement;
}

export default ITheme;
