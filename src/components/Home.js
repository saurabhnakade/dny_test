import React from "react";
import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
  Box,
} from "@chakra-ui/react";
import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaEnvelope,
  FaAccusoft,
} from "react-icons/fa";
import "./homeStyle.css";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="homeBack">
        <Container maxW={"5xl"}>
          <Stack
            textAlign={"center"}
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
            >
              Hello Everyone ,
              <Text as={"span"} color={"orange.400"}>
                I'm Dnyaneshwar Shinde
              </Text>
            </Heading>
            <Text color={"gray.500"} maxW={"3xl"}></Text>
            <Flex justifyContent="center" w="100%" mt={10}>
              <Box
                d="flex"
                alignItems="center"
                bg="white"
                border="1px solid"
                borderColor="gray.200"
                borderRadius="md"
                p={2}
                mr={2}
                mb={2}
                _hover={{ bg: "gray.100" }}
              >
                <a
                  href="https://github.com/create-dan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon as={FaGithub} boxSize={6} mr={2} />
                  Github
                </a>
              </Box>
              <Box
                d="flex"
                alignItems="center"
                bg="white"
                border="1px solid"
                borderColor="gray.200"
                borderRadius="md"
                p={2}
                mr={2}
                mb={2}
                _hover={{ bg: "gray.100" }}
              >
                <a
                  href="https://www.linkedin.com/in/dnyaneshwarshinde0611/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon as={FaLinkedin} boxSize={6} mr={2} />
                  Linkdin
                </a>
              </Box>
              <Box
                d="flex"
                alignItems="center"
                bg="white"
                border="1px solid"
                borderColor="gray.200"
                borderRadius="md"
                p={2}
                mr={2}
                mb={2}
                _hover={{ bg: "gray.100" }}
              >
                <a
                  href="https://leetcode.com/create-dan/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon as={FaAccusoft} boxSize={6} mr={2} />
                  Leetcode
                </a>
              </Box>
            </Flex>
          </Stack>
        </Container>
      </div>
    </>
  );
};

export default Home;
