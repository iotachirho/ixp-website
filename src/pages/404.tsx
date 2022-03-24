import { Center, Heading, Stack, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import NavigationLink from "../components/navigation-link";

const CustomError: NextPage = () => {
  return (
    <Center paddingY={10}>
      <Stack alignItems="center">
        <Heading>Page Not Found</Heading>
        <NavigationLink href="/">Go Back Home</NavigationLink>
      </Stack>
    </Center>
  );
};

export default CustomError;
