import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Code,
  Switch,
} from "@chakra-ui/react";

import RemoveFeedbackButton from "./RemoveFeedbackButton";

const FeedbackTable = ({ allFeedback }) => {
  return (
    <Table variant='striped' colorScheme='blue'>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Feedback</Th>
          <Th>Route</Th>
          <Th>Visible</Th>
          <Th>{""}</Th>
        </Tr>
      </Thead>
      <Tbody>
        {allFeedback.map((feedback) => (
          <Tr key={feedback.id}>
            <Td fontWeight='medium'>{feedback.author}</Td>
            <Td>{feedback.text}</Td>
            <Td>
              <Code>{"/"}</Code>
            </Td>
            <Td>
              <Switch
                colorScheme='linkedin'
                size='md'
                defaultIsChecked={feedback.status === "active"}
              />
            </Td>
            <Td>
              <RemoveFeedbackButton feedbackId={feedback.id} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default FeedbackTable;
