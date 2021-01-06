import Head from "next/head";
import {
  Button,
  Heading,
  Text,
  Code,
  useColorMode,
  Icon,
  Flex,
} from "@chakra-ui/react";

import { useAuth } from "@/utils/auth";
import PlanNoSites from "@/components/PlanNoSites";

export default function Dashboard() {
  const auth = useAuth();

  //   console.log(auth.user);

  if (!auth.user) {
    return "Loading...";
  }

  return <PlanNoSites />;
}
