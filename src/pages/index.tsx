import { Heading, Stack, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Figure from "../components/figure";
import SEO from "../components/seo";
import groupPhoto from "../../public/images/group-photo.jpg";

const Home: NextPage = () => {
  return (
    <>
      <SEO description="Iota Chi Rho is a men's social fraternity founded in 1992 at Trinity University in San Antonio, Texas. Iota Chi Rho, or IXP for short, lives up to its reputation as the alternative frat by offering Trinity students a unique take on fraternity life." />
      <Stack spacing={10}>
        <Stack textAlign="center">
          <Heading fontSize="4xl">Iota Chi Rho</Heading>
          <Heading fontSize="xl" color="secondaryText">
            Brotherhood, individuality, and friendship.
          </Heading>
        </Stack>
        <Figure
          src={groupPhoto}
          placeholder="blur"
          caption="Current active class of Iota Chi Rho on bid day, 2022."
          layout="responsive"
          objectFit="cover"
          width={500}
          height={300}
        />
        <Stack>
          <Text>
            {`These are the values upheld by the men of Iota Chi Rho, a men's
            social fraternity founded in 1992 at Trinity University in San
            Antonio. Iota Chi Rho, or IXP for short, lives up to its reputation as "the
            alternative frat" by offering Trinity students a unique take on
            fraternity life. Being an I-Chi isn't like being in a chapter of a
            national fraternity at some state school; the stereotypes don't
            easily stick to us. And rightly so — what we want to do is
            different. We attract the oddballs, the folks with off-beat
            interests and passions that drive us to lead and to participate.`}
          </Text>
          <Text>
            {`Make no mistake, this is a club of leaders. I-Chis run the gamut of
            majors, from computer science and physics to English and philosophy.
            We participate in a variety of organizations, like Trinity's policy
            debate team, Trinity University Women in Computing, and the Tigers'
            varsity swim team. You can find I-Chis serving in leadership roles
            in groups including the Trinity University Philosophy Club,
            Trinity's creative non-fiction journal 1966, and the campus
            newspaper, the Trinitonian. I-Chis have produced summer research in
            the humanities and sciences and we participate in both improv comedy
            troupes on campus. These are but a few ways that Iota Chi Rho gives
            back to our community.`}
          </Text>
          <Text>
            {`Above all, Iota Chi Rho strives to instill respect for both
              brothers and others during New Active Orientation each spring. A
              diverse and welcoming group of young men, we would be more than
              glad to meet any Trinity students interested in rushing IXP during
              the fall. Talk to any active member or shoot a message to our
              Facebook page to get in touch.`}
          </Text>
        </Stack>
      </Stack>
    </>
  );
};

export default Home;
