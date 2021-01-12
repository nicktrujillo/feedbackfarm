import React from "react";
import {
  Box,
  Heading,
  Text,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { format, parseISO } from "date-fns";

const Feedback = ({ author, text, createdAt }) => {
  const color = useColorModeValue("blue.600", "blue.200");

  return (
    <Box borderRadius={4} w='100%'>
      <Heading
        size='sm'
        as='h3'
        mb={0}
        //   color={authorColor[colorMode]}
        fontWeight='medium'
      >
        {author}
      </Heading>
      <Text color={color} mb={4} fontSize='xs'>
        {format(parseISO(createdAt), "Pp")}
      </Text>
      <Text mb={4} fontSize='xs'>
        {text}
      </Text>
      <Divider borderColor={color} mt={6} mb={6} />
    </Box>
  );
};

export default Feedback;
