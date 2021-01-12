import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

import AddNewSiteModal from "./AddNewSiteModal";

const SiteTableHeader = () => {
  return (
    <Flex justifyContent='space-between' mt={12}>
      <Heading size='lg' as='h1' mb={4}>
        My Sites
      </Heading>
      <AddNewSiteModal />
    </Flex>
  );
};

export default SiteTableHeader;
