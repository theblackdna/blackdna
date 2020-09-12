/**
 * @todo
 * [ ] re-pick colors to support a11y
 */

import { theme, DefaultTheme } from "@chakra-ui/core";

const customTheme: DefaultTheme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    body: "Work Sans, sans-serif",
    heading: "Markazi Text, serif",
  },
  colors: {
    ...theme.colors,
    teal: {
      //primary
      ...theme.colors.teal,
      700: "#005661",
      500: "#00838e",
      300: "#4fb3be",
    },
    orange: {
      ...theme.colors.orange,
      // secondary
      600: "#ba4c00",
      400: "#f47b00",
      200: "#ffac42",

      // tertiary
      900: "#5F4A37",
      700: "#7F6E5F",
      500: "#9F9287",
      300: "#BFB7AF",
    },
    gray: {
      ...theme.colors.gray,
      900: "#262E33",
      700: "#51585C",
      500: "#7D8285",
      300: "#A8ABAD",
      100: "#D4D5D6",
    },
  },
};

export default customTheme;