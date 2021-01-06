import React from "react";
import { Heading, Box, Text, Button } from "@chakra-ui/react";

import DashboardScaffold from "./DashboardScaffold";

const FreePlanNoSites = () => (
  <DashboardScaffold>
    <Box width='100%' borderRadius='8px' p={8}>
      <Heading size='xl' as='h1' pb={4}>
        Get instant feedback on your site.
      </Heading>
      <Text pb={4}>Start today, then grow with us 🌱</Text>
      <Button variant='solid' size='md' borderRadius='8px'>
        Upgrade to Starter
      </Button>
    </Box>
  </DashboardScaffold>
);

export default FreePlanNoSites;
