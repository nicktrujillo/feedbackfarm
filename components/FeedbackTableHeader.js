import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

const FeedbackTableHeader = () => {
  return (
    <Flex justifyContent='space-between' mt={8}>
      <Heading size='lg' as='h1' mb={8}>
        My Feedback
      </Heading>
    </Flex>
  );
};

export default FeedbackTableHeader;
