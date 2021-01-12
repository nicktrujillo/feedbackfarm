import React from "react";
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
            <Td>{site.url}</Td>
            <Td>
              <Link color={linkColor}>view feedback</Link>
            </Td>
            <Td>{format(parseISO(site.createdAt), "PP")}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default SiteTable;
