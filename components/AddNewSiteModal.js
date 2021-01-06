import React from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
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
} from "@chakra-ui/react";

import { createSite } from "@/utils/db";

const AddNewSiteModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (values) => createSite(values);

  return (
    <>
      <Button onClick={onOpen} variant='solid' size='md' borderRadius='8px'>
        Add Your First Site
      </Button>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as='form' onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader fontWeight='bold'>Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Site Name</FormLabel>
              <Input
                ref={initialRef}
                placeholder='My Site'
                name='site'
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