import React from "react";
import {
  ChakraProvider,
  Grid,
  Stack,
  Link,
  Flex,
  Avatar,
  Icon,
  Breadcrumb,
  Heading,
  Box,
  Text,
  Button,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { LinkIcon, ChatIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

import { useAuth } from "@/utils/auth";

const DashboardLayout = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const auth = useAuth();

  return (
    <Grid templateColumns='1fr 4fr' templateRows='1fr' p={0} height='100vh'>
      <Stack
        spacing={2}
        p={6}
        justifyContent='flex-start'
        alignItems='stretch'
        height='100vh'
      >
        <Flex alignItems='flex-start' justifyContent='flex-start' mb={14}>
          <Icon viewBox='0 0 100 125' boxSize={9}>
            <path
              d='M12.516 24.352H51.82c2.016 0 3.024.726 3.024 2.18 0 .655-.469 1.85-1.407 3.585-.937 1.735-2.039 3.164-3.304 4.29-1.078.984-2.813 1.476-5.203 1.476H3.164c-.703 0-1.219-.024-1.547-.07-.328-.094-.633-.305-.914-.633-.234-.328-.351-.797-.351-1.407 0-1.734 1.359-3.726 4.078-5.976 2.765-2.297 5.46-3.445 8.086-3.445zM.422 120.68V86.79c0-1.688.562-2.813 1.687-3.376 1.172-.562 2.977-.844 5.414-.844 2.579 0 4.383.282 5.415.844 1.078.563 1.617 1.688 1.617 3.375v26.438c0 2.296-.492 4.007-1.477 5.132-1.172 1.407-2.836 2.649-4.992 3.727-2.11 1.078-3.844 1.617-5.203 1.617-1.64 0-2.461-1.008-2.461-3.023zm0-45.211V44.32c0-1.687.562-2.812 1.687-3.375 1.172-.562 2.977-.843 5.414-.843 2.625 0 4.454.28 5.485.843 1.031.516 1.547 1.64 1.547 3.375v19.617c0 1.922.96 2.883 2.883 2.883h28.617c2.015 0 3.023.727 3.023 2.18 0 .656-.469 1.875-1.406 3.656-.938 1.735-2.04 3.164-3.305 4.29-1.078.937-2.812 1.406-5.203 1.406H3.304c-1.921 0-2.882-.961-2.882-2.883z'
              fill='currentColor'
            />
            <path
              d='M63.484 99.648H24.18c-2.016 0-3.024-.726-3.024-2.18 0-.656.469-1.85 1.407-3.585.937-1.735 2.039-3.164 3.304-4.29 1.078-.984 2.813-1.476 5.203-1.476h41.766c.703 0 1.219.024 1.547.07.328.094.633.305.914.633.234.328.351.797.351 1.407 0 1.734-1.359 3.726-4.078 5.976-2.765 2.297-5.46 3.445-8.086 3.445zM75.578 3.32v33.89c0 1.688-.562 2.813-1.687 3.376-1.172.562-2.977.844-5.414.844-2.579 0-4.383-.282-5.415-.844-1.078-.563-1.617-1.688-1.617-3.375V10.773c0-2.296.492-4.007 1.477-5.132 1.172-1.407 2.836-2.649 4.992-3.727C70.024.836 71.758.297 73.117.297c1.64 0 2.461 1.008 2.461 3.023zm0 45.211V79.68c0 1.687-.562 2.812-1.687 3.375-1.172.562-2.977.843-5.414.843-2.625 0-4.454-.28-5.485-.843-1.031-.516-1.547-1.64-1.547-3.375V60.062c0-1.921-.96-2.882-2.883-2.882H29.945c-2.015 0-3.023-.727-3.023-2.18 0-.656.469-1.875 1.406-3.656.938-1.735 2.04-3.164 3.305-4.29 1.078-.937 2.812-1.406 5.203-1.406h35.86c1.921 0 2.882.961 2.882 2.883z'
              fill='currentColor'
            />
          </Icon>
        </Flex>
        <Flex alignItems='center' mb={14}>
          <LinkIcon mr={2} boxSize={6} />
          <Link>Sites</Link>
        </Flex>
        <Flex alignItems='center' mb={14}>
          <ChatIcon mr={2} boxSize={6} />
          <Link>Feedback</Link>
        </Flex>
        <Flex alignItems='center' justifyContent='flex-start'>
          <Avatar mr={2} boxSize={6} src={auth.user.photoUrl} />
          <Link onClick={(e) => auth.signout()}>Sign Out</Link>
        </Flex>
      </Stack>
      <Flex p={0} justifyContent='flex-start' alignItems='stretch'>
        <Flex
          alignItems='flex-start'
          justifyContent='center'
          flexDirection='row'
          width='100%'
          height='100vh'
        >
          <Flex flexDirection='column' width='90%'>
            <Flex justifyContent='space-between' mt={4}>
              <Heading mb={4}>My Sites</Heading>
              <IconButton
                aria-label='icon'
                icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                size='lg'
                display='flex'
                alignItems='center'
                justifyContent='center'
                flexDirection='row'
                textAlign='left'
                variant='solid'
                isRound
                onClick={toggleColorMode}
              />
            </Flex>
            {children}
          </Flex>
        </Flex>
      </Flex>
    </Grid>
  );
};

export default DashboardLayout;
