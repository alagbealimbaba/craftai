"use client";

import { Box, Flex, Text, Button, VStack } from '@chakra-ui/react';
import { FaArrowRight } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";
import { Features } from './features/Features';
import { UserExperienceShowcase } from './user-showcase/UserExperienceShowcase';
import { TechnologyShowcase } from './tech-showcase/TechnologyShowcase';
import Footer from './footer/Footer';

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
    >
      <MotionText
        fontSize={'8xl'}
        fontWeight={'bold'}
        mt={"80px"}
        sx={{
          fontFamily: 'Poppins, sans-serif',
          background: 'linear-gradient(to right, #fff, #999)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        CRAFT
      </MotionText>
      <MotionText
        fontSize="1.5rem"
        color={"white/60"}
        mt={4}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Create and deploy advanced AI agents with unique personalities
      </MotionText>

      <VStack spacing="6" my="8">
        <Flex gap="6">
          {["Custom Agents", "Advanced Learning", "Real-time Chat"].map((title, index) => (
            <MotionBox
              key={index}
              p="25px"
              bg="whiteAlpha.50"
              borderRadius="15px"
              border="1px solid"
              borderColor={"whiteAlpha.100"}
              _hover={{ bgColor: "gray.800" }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Text fontWeight="bold" fontSize="xl" mb="2">
                {title}
              </Text>
              <Text color={"white/60"} fontSize="18px">
                {title === "Custom Agents" ? "Design unique AI personalities" : title === "Advanced Learning" ? "Continuous improvement system" : "Natural conversations"}
              </Text>
            </MotionBox>
          ))}
        </Flex>
      </VStack>

      <Flex justify={'center'} alignItems={'center'} gap={6} mb={"200px"}>
        <a href="/explore-agents">
          <MotionButton
            px={'35px'}
            py={'30px'}
            color={'black'}
            fontSize={'18px'}
            bg={'white'}
            borderRadius={'10px'}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            _hover={{ transform: 'translateX(5px)' }}
          >
            Explore Agents
            <Box
              as={FaArrowRight}
              ml="8px"
              mt="2px"
              fontSize="20px"
              transition="transform 0.3s ease"
              _hover={{ transform: 'translateX(5px)' }}
            />
          </MotionButton>
        </a>
        <a href="/create-agent">
          <MotionButton
            px={'35px'}
            py={'30px'}
            color={'white'}
            fontSize={'18px'}
            bg={'black'}
            borderRadius={'10px'}
            border={'1px solid'}
            borderColor={'whiteAlpha.100'}
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
              _hover={{ transform: 'rotate(180deg)' }}
            />
          </MotionButton>
        </a>
      </Flex>
      <Features/>
      <TechnologyShowcase/>
      <UserExperienceShowcase/>
      <Footer/>
    </Flex>

  );
}