import { Center, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import SEO from "../components/seo";

const JoinPage: NextPage = () => {
  return (
    <>
      <SEO
        title="Join"
        description=" Join our rush list to come to events and meet the members of IXP."
      />
      <Stack spacing={10}>
        <Center>
          <Heading>Join Iota Chi Rho</Heading>
        </Center>
        <Text>
          The rush process begins in the fall semester. Join our rush list to
          come to events and meet the members of IXP. On pref day at the
          begining of the fall semester, rank up to three greek orginizations
          you wish to join (we hope we are one). You then receive a bid, which
          makes you a full member of the club!
        </Text>
        <Text>
          If you have any questions, want to learn more, or just want to say
          hi,&nbsp;
          <Link href="mailto:iotachirhotu@gmail.com">shoot us an email</Link>.
          we always love to meet new people!
        </Text>
      </Stack>
    </>
  );
};

export default JoinPage;
