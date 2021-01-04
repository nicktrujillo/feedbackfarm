import Head from "next/head";
import { Button, Heading, Text, Code, useColorMode } from "@chakra-ui/react";

import { useAuth } from "@/utils/auth";

export default function Home() {
  const auth = useAuth();
  const { colorMode, toggleColorMode } = useColorMode();

  // console.log(user);

  return (
    <div>
      <Head>
        <title>Feedback Farm</title>
      </Head>

      <main>
        <Heading>
          Feedback Farm{" "}
          <Button onClick={toggleColorMode}>
            Toggle {colorMode === "light" ? "Dark" : "Light"}
          </Button>
        </Heading>
        {auth.user ? (
          <div>
            <Text>
              Email: <Code>{auth.user.email}</Code>
            </Text>
            <Button onClick={(e) => auth.signout()}>Sign Out</Button>
          </div>
        ) : (
          <Button onClick={(e) => auth.signinWithGitHub()}>Sign In</Button>
        )}
      </main>
    </div>
  );
}
