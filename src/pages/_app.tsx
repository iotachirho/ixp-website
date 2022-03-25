import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme, ThemeOverride } from "@chakra-ui/react";
import Layout from "../components/layout";

const themeOverride: ThemeOverride = {
  components: {
    Link: {
      baseStyle: {
        color: "green",
      },
    },
  },
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
