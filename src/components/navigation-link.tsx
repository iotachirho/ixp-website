import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { FunctionComponent } from "react";

const NavigationLink: FunctionComponent<
  Omit<NextLinkProps & ChakraLinkProps, "passHref">
> = ({ children, ...props }) => {
  const chakraLinkProps: ChakraLinkProps = {
    color: "secondaryText",
    fontWeight: "bold",
    fontSize: "lg",
    _hover: {
      color: "brand",
    },
  };

  return (
    <NextLink passHref {...props}>
      <ChakraLink {...chakraLinkProps} {...props}>
        {children}
      </ChakraLink>
    </NextLink>
  );
};

export default NavigationLink;
