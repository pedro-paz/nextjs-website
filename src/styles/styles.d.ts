import "styled-components";

declare module "styled-components" {
  export interface Theme {
    title: string;
    background: string;
    fontColor: string;
    borderColor: string;
  }
}
