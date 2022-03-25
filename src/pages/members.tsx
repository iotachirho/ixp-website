import {
  Center,
  Heading,
  ListItem,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  UnorderedList,
  Wrap,
} from "@chakra-ui/react";
import { GetStaticProps, NextPage } from "next";
import { v4 as uuid } from "uuid";
import Figure from "../components/figure";
import SEO from "../components/seo";
import { getPledgeClasses, PledgeClass } from "../helpers/data";
import groupPhoto1996 from "../..//images/1996-group-photo.png";

interface MembersPageProps {
  pledgeClasses: PledgeClass[];
}

export const getStaticProps: GetStaticProps<MembersPageProps> = async () => {
  const pledgeClasses = getPledgeClasses();

  return { props: { pledgeClasses } };
};

const MembersPage: NextPage<MembersPageProps> = ({ pledgeClasses }) => {
  return (
    <>
      <SEO
        title="Members"
        description="Meet the active and alumni members of Iota Chi Rho."
      />
      <Stack spacing={10}>
        <Center>
          <Heading>Members</Heading>
        </Center>
        <Figure
          src={groupPhoto1996}
          placeholder="blur"
          caption="Active members of Iota Chi Rho, 1996."
          layout="responsive"
          objectFit="cover"
          width={500}
          height={300}
        />
        <SimpleGrid spacing={10} columns={{ base: 1, sm: 2, lg: 3 }}>
          {pledgeClasses.map((pledgeClass) => (
            <Stack key={uuid()}>
              <Heading fontSize="xl">{`${pledgeClass.name} (${pledgeClass.year})`}</Heading>
              <UnorderedList styleType="none">
                {pledgeClass.members.map((member) => (
                  <ListItem
                    key={uuid()}
                    color={member.active ? "initial" : "blackAlpha.500"}
                  >
                    <Wrap>
                      <Text>{`${member.firstName} ${member.lastName}`}</Text>
                      {member.positions.map((position) => (
                        <Tag key={uuid()} size="sm">
                          {position}
                        </Tag>
                      ))}
                    </Wrap>
                  </ListItem>
                ))}
              </UnorderedList>
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
    </>
  );
};

export default MembersPage;
