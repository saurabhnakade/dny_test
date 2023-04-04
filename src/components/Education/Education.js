import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { FaGraduationCap } from "react-icons/fa";
import { AiOutlineBook } from "react-icons/ai";

const EducationCard = () => {
  return (
    <Box
      bg="white"
      borderRadius="lg"
      boxShadow="xl"
      p={6}
      maxW={{ base: "320px", sm: "420px", md: "500px", lg: "600px" }}
      mx="auto"
      my={4}
    >
      <Flex alignItems="center" mb={4}>
        <Icon as={FaGraduationCap} boxSize={8} color="blue.500" />
        <Heading as="h2" ml={4}>
          Education
        </Heading>
      </Flex>
      <Flex flexDirection={{ base: "column", sm: "row" }} mb={4}>
        <Flex alignItems="center" mr={{ base: 0, sm: 4 }}>
          <Icon as={AiOutlineBook} boxSize={6} color="gray.500" />
          <Text fontWeight="bold" ml={2}>
            College:
          </Text>
        </Flex>
        <Text ml={{ base: 0, sm: 2 }}>
          Walchand College of Engineering, Sangli
        </Text>
      </Flex>
      <Flex flexDirection={{ base: "column", sm: "row" }} mb={4}>
        <Flex alignItems="center" mr={{ base: 0, sm: 4 }}>
          <Icon as={AiOutlineBook} boxSize={6} color="gray.500" />
          <Text fontWeight="bold" ml={2}>
            Program:
          </Text>
        </Flex>
        <Text ml={{ base: 0, sm: 2 }}>B.tech</Text>
      </Flex>
      <Flex flexDirection={{ base: "column", sm: "row" }} mb={4}>
        <Flex alignItems="center" mr={{ base: 0, sm: 4 }}>
          <Icon as={AiOutlineBook} boxSize={6} color="gray.500" />
          <Text fontWeight="bold" ml={2}>
            Degree:
          </Text>
        </Flex>
        <Text ml={{ base: 0, sm: 2 }}>IT</Text>
      </Flex>
      <Flex flexDirection={{ base: "column", sm: "row" }} mb={4}>
        <Flex alignItems="center" mr={{ base: 0, sm: 4 }}>
          <Icon as={AiOutlineBook} boxSize={6} color="gray.500" />
          <Text fontWeight="bold" ml={2}>
            CGPA:
          </Text>
        </Flex>
        <Text ml={{ base: 0, sm: 2 }}>8.38</Text>
      </Flex>
      <Flex flexDirection={{ base: "column", sm: "row" }}>
        <Flex alignItems="center" mr={{ base: 0, sm: 4 }}>
          <Icon as={AiOutlineBook} boxSize={6} color="gray.500" />
          <Text fontWeight="bold" ml={2}>
            Passout Year:
          </Text>
        </Flex>
        <Text ml={{ base: 0, sm: 2 }}>2024</Text>
      </Flex>
    </Box>
  );
};

export default EducationCard;
