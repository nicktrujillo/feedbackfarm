import React from "react";
import { Heading, Flex, Text, Button } from "@chakra-ui/react";

import DashboardScaffold from "./DashboardScaffold";
import AddNewSiteModal from "./AddNewSiteModal";

const PlanNoSites = () => (
  <DashboardScaffold>
    <Flex
      flexDirection='column'
      justify='center'
      align='center'
      width='100%'
      borderRadius='8px'
      p={16}
    >
      <Heading size='lg' as='h1' pb={4}>
        Let's get started.
      </Heading>
      <Text pb={4}>You don't have any sites yet.</Text>
      <AddNewSiteModal />
    </Flex>
  </DashboardScaffold>
);

export default PlanNoSites;
