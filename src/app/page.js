"use client";

import { Box, Flex, Text, Button, VStack } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";
import { Features } from "./features/Features";
import { UserExperienceShowcase } from "./user-showcase/UserExperienceShowcase";
import { TechnologyShowcase } from "./tech-showcase/TechnologyShowcase";
import Footer from "./footer/Footer";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionButton = motion(Button);

export default function Page() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minH="100vh"
      bg="black"
      color="white"
      textAlign="center"
      overflowX="hidden"
      px={[4, 6, 10]} // Adjust padding for small, medium, and larger screens
    >
     <MotionText
        fontSize={["2xl", "3xl", "3xl"]} // Responsive font sizes
        fontWeight="bold"
        mt={["30px", "50px"]} // Adjust margin for smaller screens
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        color={"white"}
      >
        CA: TBA
      </MotionText>
      {/* Heading Section */}
      <MotionText
        fontSize={["4xl", "6xl", "8xl"]} // Responsive font sizes
        fontWeight="bold"
        mt={["50px", "80px"]} // Adjust margin for smaller screens
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        color={"white"}
      >
        CRAFT
      </MotionText>
      <MotionText
        fontSize={["md", "lg", "xl"]} // Responsive font sizes
        mt={4}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        color="white"
      >
        Create and deploy advanced AI agents with unique personalities
      </MotionText>

      {/* Features Section */}
      <VStack spacing={[4, 6]} my={[4, 6, 8]} w="100%">
        <Flex
          direction={["column", "row"]} // Stack vertically on small screens
          gap={[4, 6]} // Adjust gap for different screen sizes
          justify="center"
          align="center"
        >
          {["Custom Agents", "Advanced Learning", "Real-time Chat"].map(
            (title, index) => (
              <MotionBox
                key={index}
                p={[4, 6]} // Responsive padding
                w={["100%", "30%"]} // Full width on mobile, smaller on larger screens
                bg="whiteAlpha.50"
                borderRadius="15px"
                border="1px solid"
                borderColor="whiteAlpha.100"
                _hover={{ bgColor: "gray.800" }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Text
                  color="white"
                  fontWeight="bold"
                  fontSize="xl"
                  mb="2"
                >
                  {title}
                </Text>
                <Text color="white/60" fontSize="sm">
                  {title === "Custom Agents"
                    ? "Design unique AI personalities"
                    : title === "Advanced Learning"
                    ? "Continuous improvement system"
                    : "Natural conversations"}
                </Text>
              </MotionBox>
            )
          )}
        </Flex>
      </VStack>

      {/* Call-to-Action Section */}
      <Flex
        direction={["column", "row"]} // Stack buttons vertically on small screens
        justify="center"
        align="center"
        gap={6}
        mb={["50px", "100px", "200px"]}
      >
        <a href="/explore-agents">
          <MotionButton
            px={["25px", "35px"]} // Adjust padding for smaller screens
            py={["20px", "30px"]}
            color="black"
            fontSize={["md", "lg", "18px"]}
            bg="white"
            borderRadius="10px"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            _hover={{ transform: "translateX(5px)" }}
          >
            Explore Agents
            <Box
              as={FaArrowRight}
              ml="8px"
              mt="2px"
              fontSize="20px"
              transition="transform 0.3s ease"
              _hover={{ transform: "translateX(5px)" }}
            />
          </MotionButton>
        </a>
        <a href="/create-agent">
          <MotionButton
            px={["25px", "35px"]}
            py={["20px", "30px"]}
            color="white"
            fontSize={["md", "lg", "18px"]}
            bg="black"
            borderRadius="10px"
            border="1px solid"
            borderColor="whiteAlpha.100"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Create Agent
            <Box
              as={FiPlus}
              ml="8px"
              mt="2px"
              fontSize="20px"
              transition="transform 0.3s ease"
              _hover={{ transform: "rotate(180deg)" }}
            />
          </MotionButton>
        </a>
      </Flex>

      {/* Other Sections */}
      <Features />
      <TechnologyShowcase />
      <UserExperienceShowcase />
      <Footer />
    </Flex>
  );
}
