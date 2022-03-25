import { Center, Heading, Stack } from "@chakra-ui/react";
import { NextPage } from "next";
import NavigationLink from "../components/navigation-link";
import SEO from "../components/seo";

const CustomError: NextPage = () => {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="We were not able to find that page."
      />
      <Center paddingY={10}>
        <Stack alignItems="center">
          <Heading>Page Not Found</Heading>
          <NavigationLink href="/">Go Back Home</NavigationLink>
        </Stack>
      </Center>
    </>
  );
};

export default CustomError;
