import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

import AddNewSiteModal from "./AddNewSiteModal";

const SiteTableHeader = () => {
  return (
    <Flex justifyContent='space-between' mt={8}>
      <Heading size='lg' as='h1' mb={8}>
        My Sites
      </Heading>
      <AddNewSiteModal />
    </Flex>
  );
};

export default SiteTableHeader;
