import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme, ThemeOverride } from "@chakra-ui/react";
import Layout from "../components/layout";

const themeOverride: ThemeOverride = {
  components: {
    Link: {
      baseStyle: {
        color: "brand",
      },
    },
    Text: {
      baseStyle: {
        color: "text",
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
  config: { useSystemColorMode: true },
};

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={extendTheme(themeOverride)}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default CustomApp;
