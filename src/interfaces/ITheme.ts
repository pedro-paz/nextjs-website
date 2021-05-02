interface ThemedElement {
  background?: string;
  boxShadow?: string;
  color?: string;
}

interface ITheme {
  background: string;
  fontColor: string;
  card: ThemedElement;
  input: ThemedElement;
  sideMenu: ThemedElement;
}

export default ITheme;
