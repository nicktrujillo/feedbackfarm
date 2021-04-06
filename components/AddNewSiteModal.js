import React from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { mutate } from "swr";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Button,
  Input,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

import { createSite } from "@/utils/db";
import { useAuth } from "@/utils/auth";

const AddNewSiteModal = () => {
  const auth = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();
  const { handleSubmit, register, errors } = useForm();
  const toast = useToast();

  const onSubmit = ({ name, url }) => {
    const newSite = {
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      name,
      url,
    };
    createSite(newSite);
    mutate(
      ["/api/sites", auth.user.token],
      async (data) => {
        return { sites: [...data.sites, newSite] };
      },
      false
    );
    toast({
      title: "Success!",
      description: "Your site has been added.",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen} variant='solid' size='md' borderRadius='8px'>
        + Add Site
      </Button>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as='form' onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader fontWeight='bold'>Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel ref={initialRef}>Site Name</FormLabel>
              <Input
                // ref={initialRef}
                placeholder='My Site'
                name='name'
                ref={register({
                  required: "Required",
                })}
              />
              {errors.site && errors.site.message}
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                placeholder='https://website.com'
                name='url'
                ref={register({
                  required: "Required",
                })}
              />
              {errors.url && errors.url.message}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3}>
              Cancel
            </Button>
            <Button type='submit' colorScheme='blue'>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddNewSiteModal;
