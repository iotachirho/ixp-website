import {
  Center,
  Container,
  Heading,
  ListItem,
  Stack,
  Tag,
  Text,
  UnorderedList,
  Wrap,
} from "@chakra-ui/react";
import { GetStaticProps, NextPage } from "next";
import { v4 as uuid } from "uuid";
import {
  getExecutives,
  getPledgeClasses,
  Member,
  PledgeClass,
} from "../helpers/data";

interface MembersPageProps {
  executives: Member[];
  pledgeClasses: PledgeClass[];
}

export const getStaticProps: GetStaticProps<MembersPageProps> = async (
  context
) => {
  const executives = getExecutives();
  const pledgeClasses = getPledgeClasses();

  return { props: { executives, pledgeClasses } };
};

const MembersPage: NextPage<MembersPageProps> = ({
  executives,
  pledgeClasses,
}) => {
  return (
    <Stack spacing={10}>
      <Center>
        <Heading>Members</Heading>
      </Center>
      <Wrap spacing={10} justify="center">
        {pledgeClasses.map((pledgeClass) => (
          <Stack key={uuid()}>
            <Heading fontSize="xl">{`${pledgeClass.name} (NAC ${pledgeClass.year})`}</Heading>
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
      </Wrap>
    </Stack>
  );
};

export default MembersPage;
