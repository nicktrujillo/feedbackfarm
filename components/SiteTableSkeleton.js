import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Link,
  Skeleton,
} from "@chakra-ui/react";

const SiteTableSkeleton = () => {
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
        <Tr>
          <Td>
            <Skeleton>...</Skeleton>
          </Td>
          <Td>
            <Skeleton>...</Skeleton>
          </Td>
          <Td>
            <Skeleton>...</Skeleton>
          </Td>
          <Td>
            <Skeleton>...</Skeleton>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Skeleton>...</Skeleton>
          </Td>
          <Td>
            <Skeleton>...</Skeleton>
          </Td>
          <Td>
            <Skeleton>...</Skeleton>
          </Td>
          <Td>
            <Skeleton>...</Skeleton>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Skeleton>...</Skeleton>
          </Td>
          <Td>
            <Skeleton>...</Skeleton>
          </Td>
          <Td>
            <Skeleton>...</Skeleton>
          </Td>
          <Td>
            <Skeleton>...</Skeleton>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Skeleton>...</Skeleton>
          </Td>
          <Td>
            <Skeleton>...</Skeleton>
          </Td>
          <Td>
            <Skeleton>...</Skeleton>
          </Td>
          <Td>
            <Skeleton>...</Skeleton>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default SiteTableSkeleton;
