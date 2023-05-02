import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import TextInput from "./TextInput";
import * as Yup from "yup";

export default function CreateAchievementModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const validationSchema = Yup.object({
    code: Yup.number()
      .max(9999, "Must be 4 digits or less")
      .typeError("Code must be number")
      .integer("Code must consist of only integers")
      .required("Code is required"),
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
  });

  return (
    <Formik
      initialValues={{ code: "", name: "", description: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.resetForm();
      }}
    >
      {(props) => (
        <>
          <Button onClick={onOpen}>Create achievement set</Button>
          <Modal
            size="md"
            isOpen={isOpen}
            onClose={onClose}
            scrollBehavior="inside"
          >
            <ModalOverlay backdropFilter="blur(10px)" />
            <ModalContent>
              <ModalHeader>Create an achievement set</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Form>
                  <VStack spacing={7}>
                    <TextInput
                      label="Code"
                      name="code"
                      placeholder="Code to distribute"
                    />
                    <TextInput
                      label="Name"
                      name="name"
                      placeholder="Name of achievement set"
                    />
                    <TextInput
                      label="Description"
                      name="description"
                      placeholder="Short description of your project"
                    />
                  </VStack>
                  <ModalFooter>
                    <Button type="submit" mr="20px" onClick={onClose}>
                      Create
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </Form>
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      )}
    </Formik>
  );
}
