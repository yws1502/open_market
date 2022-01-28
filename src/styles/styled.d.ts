import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      base: string;
      gray: string;
      lightGray: string;
      deepGray: string;
      red: string;
    };
  }
}
