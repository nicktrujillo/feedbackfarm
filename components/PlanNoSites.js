import React from "react";
import { Heading, Flex, Text, useColorModeValue } from "@chakra-ui/react";

import DashboardLayout from "./DashboardLayout";
import AddNewSiteModal from "./AddNewSiteModal";

const PlanNoSites = () => {
  const bg = useColorModeValue("gray.200", "gray.700");

  return (
    <Flex
      flexDirection='column'
      justify='center'
      align='center'
      width='100%'
      borderRadius='8px'
      p={16}
      backgroundColor={bg}
    >
      <Heading size='lg' as='h1' pb={4}>
        Let's get started.
      </Heading>
      <Text pb={4}>Add your first site.</Text>
      <AddNewSiteModal />
    </Flex>
  );
};

export default PlanNoSites;
