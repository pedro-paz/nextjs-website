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
}

export default ITheme;
