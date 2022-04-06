import { extendTheme, ThemeOverride } from "@chakra-ui/react";

const themeOverride: ThemeOverride = {
  components: {
    Link: {
      baseStyle: {
        color: "brand",
      },
    },
    Text: {
      baseStyle: {
        color: "primaryText",
      },
    },
  },
  semanticTokens: {
    colors: {
      primaryText: {
        default: "gray.900",
        _dark: "gray.100",
      },
      secondaryText: {
        default: "gray.600",
        _dark: "gray.400",
      },
      brand: {
        default: "green.600",
        _dark: "green.500",
      },
    },
  },
  config: { initialColorMode: "system" },
};

const theme = extendTheme(themeOverride);

export default theme;
