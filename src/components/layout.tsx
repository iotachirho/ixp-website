import { Center, Container, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import NavigationLink from "./navigation-link";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Center shadow="sm" padding={5}>
        <Container maxWidth="xl">
          <Stack as={Center}>
            <Stack direction="row" spacing={10}>
              <NavigationLink color="green" href="/">
                ixp
              </NavigationLink>
              <NavigationLink href="/members">members</NavigationLink>
              <NavigationLink href="/join">join</NavigationLink>
            </Stack>
          </Stack>
        </Container>
      </Center>
      <Container maxWidth="5xl" marginY={10}>
        {children}
      </Container>
      <Center padding={10}>
        <Stack alignItems="center">
          <Stack direction="row">
            <Link
              padding={2}
              color="gray"
              href="https://www.facebook.com/ixptu/"
              isExternal
            >
              <Icon aria-label="Facebook" as={FaFacebookSquare} />
            </Link>
            <Link
              padding={2}
              color="gray"
              href="https://twitter.com/iotachirho"
              isExternal
            >
              <Icon aria-label="Twitter" as={FaTwitterSquare} />
            </Link>
            <Link
              padding={2}
              color="gray"
              href="https://www.instagram.com/iotachirho/"
              isExternal
            >
              <Icon aria-label="Instagram" as={FaInstagramSquare} />
            </Link>
            <Link
              padding={2}
              color="gray"
              href="mailto:iotachirhotu@gmail.com"
              isExternal
            >
              <Icon aria-label="Email" as={AiTwotoneMail} />
            </Link>
          </Stack>
          <Text fontSize="sm" color="grey">
            &copy; Iota Chi Rho
          </Text>
        </Stack>
      </Center>
    </>
  );
};

export default Layout;
