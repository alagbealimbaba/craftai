"use client"; // Ensure this file is treated as a client component

import { Box, Text, VStack, Image, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";
import Link from 'next/link'; // Import Link for navigation

// Create a motion box and motion flex
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

export const AIAgentItem = ({ agent, onDelete, showDeleteButton }) => {
  const { title, description, longDescription, powerLevel, image, nextBotName } = agent; 

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Link href={`/chat-page`}> 
      <MotionBox
        ref={ref}
        position="relative"
        borderRadius="lg"
        boxShadow="lg"
        bg="whiteAlpha.50"
        overflow="hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        whileHover={{
          y: -10, // Moves the entire box up
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)", // Adds hover shadow
        }}
      >
        <Box overflow="hidden" position="relative">
          <MotionBox
            as={Image}
            src={image}
            alt={`${title} Background`}
            objectFit="cover"
            width="100%"
            height="200px"
            borderTopRadius="lg"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }} // Grows the image on hover
            transition={{ duration: 0.5 }}
          />
        </Box>

        <VStack spacing={4} align="start" p={6} zIndex={2} position="relative">
          <Flex w={'full'} justifyContent={"space-between"}>
            <Text fontSize="xl" fontWeight="bold" color="white">
              {title}
            </Text>
            {showDeleteButton && (
              <Text
                onClick={onDelete}
                color="red.500" // Change color to make it visible
                cursor="pointer" // Change cursor to pointer to indicate clickability
                fontSize="lg" // Adjust size as necessary
                aria-label="Delete agent"
              >
                DELETE
              </Text>
            )}
          </Flex>

          <Text fontSize="md" color="whiteAlpha.700">
            {description}
          </Text>

          <Text
            fontSize="sm"
            color="whiteAlpha.700"
            noOfLines={2} // Ensure it limits to 2 lines with ellipsis
          >
            {longDescription}
          </Text>

          <Box my={4} height="1px" width="100%" bg="gray.600" />

          <Flex justify="space-between" align="center" width="100%">
            <Text fontSize="sm" color="whiteAlpha.700">
              Power Level:
            </Text>
            <Text fontSize="sm" color="blue.400">
              {powerLevel}%
            </Text>
          </Flex>

          <Box width="100%" bg="gray.600" borderRadius="md">
            <Box
              width={`${powerLevel}%`}
              bg="blue.400"
              height="8px"
              borderRadius="md"
            />
          </Box>

          <Flex justify="space-between" align="center" mt={4} width="100%">
            <Flex align="center">
              <Text fontSize="md" fontWeight="bold" color="whiteAlpha.700" mr={2}>
                {nextBotName}
              </Text>
            </Flex>
            <MotionFlex
              color="white"
              fontSize="lg"
              whileHover={{
                x: 10, // Moves the arrow icon 10px to the right on hover
              }}
              transition={{ duration: 0.3 }}
            >
              <FaArrowRightLong />
            </MotionFlex>
          </Flex>
        </VStack>
      </MotionBox>
    </Link>
  );
};