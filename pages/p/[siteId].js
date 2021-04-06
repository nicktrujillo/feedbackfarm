import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

import Feedback from "@/components/Feedback";
import { useAuth } from "@/utils/auth";
import { createFeedback } from "@/utils/db";
import { getAllFeedback, getAllSites } from "@/utils/db-admin";

export async function getStaticProps(context) {
  const siteId = context.params.siteId;
  const { feedback } = await getAllFeedback(siteId);

  return {
    props: {
      initialFeedback: feedback,
    },
    unstable_revalidate: 1,
  };
}

export async function getStaticPaths() {
  const { sites } = await getAllSites();
  const paths = sites.map((site) => ({
    params: {
      siteId: site.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

const SiteFeedback = ({ initialFeedback }) => {
  const auth = useAuth();
  const router = useRouter();
  const [input, setInput] = useState("");
  const [allFeedback, setAllFeedback] = useState(initialFeedback);

  const onSubmit = (e) => {
    e.preventDefault();

    const newFeedback = {
      author: auth.user.name,
      authorId: auth.user.uid,
      siteId: router.query.siteId,
      text: input,
      createdAt: new Date().toISOString(),
      provider: auth.user.provider,
      status: "pending",
    };

    createFeedback(newFeedback);
    setAllFeedback([newFeedback, ...allFeedback]);
    setInput("");
  };

  return (
    <Box
      display='flex'
      flexDirection='column'
      width='full'
      maxWidth='500px'
      margin='0 auto'
    >
      <Box as='form' onSubmit={onSubmit}>
        <FormControl my={8}>
          <FormLabel htmlFor='feedback'>Leave Feedback</FormLabel>
          <Input
            type='feedback'
            id='feedback'
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <Button type='submit' mt={2}>
            Submit
          </Button>
        </FormControl>
      </Box>
      {allFeedback.map((feedback) => (
        <Feedback key={feedback.id} {...feedback} />
      ))}
    </Box>
  );
};

export default SiteFeedback;
