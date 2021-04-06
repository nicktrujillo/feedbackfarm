import React from "react";
import NextLink from "next/link";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { format, parseISO } from "date-fns";

const SiteTable = ({ sites }) => {
  const linkColor = useColorModeValue("blue.600", "blue.200");

  return (
    <Table variant='striped' colorScheme='blue'>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Site Link</Th>
          <Th>Feedback Link</Th>
          <Th>Date Added</Th>
        </Tr>
      </Thead>
      <Tbody>
        {sites.map((site) => (
          <Tr key={site.url}>
            <Td fontWeight='medium'>{site.name}</Td>
            <Td>
              <Link href={site.url} isExternal>
                {site.url}
              </Link>
            </Td>
            <Td>
              <NextLink href='/p/[siteId]' as={`/p/${site.id}`} passHref>
                <Link color={linkColor} fontWeight='medium'>
                  view feedback
                </Link>
              </NextLink>
            </Td>
            <Td>{format(parseISO(site.createdAt), "PP")}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default SiteTable;
