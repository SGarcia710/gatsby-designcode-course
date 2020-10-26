import { createGlobalStyle } from "styled-components"
import { themes } from "./ColorStyles"

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${themes.light.backgroundColor};

    // Dark mode configuration provided by styled-components
    @media (prefers-color-scheme: dark) {
      background: ${themes.dark.backgroundColor};
    }
  }
`
