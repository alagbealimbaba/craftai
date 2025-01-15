// UserExperienceItem.js
"use client"; // Ensure this file is treated as a client component

import { Box, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Create a motion box
const MotionBox = motion(Box);

export const UserExperienceItem = ({ experience }) => {
  const { quote, name, position, company, rating } = experience;

  // Set up the intersection observer
  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust to trigger when 10% of the item is visible
    triggerOnce: true, // Only trigger once
  });

  return (
<MotionBox
  ref={ref} // Attach the ref to the MotionBox
  bg="whiteAlpha.50"
  p={6}
  borderRadius="lg"
  textAlign="left"
  boxShadow="lg"
  _hover={{ bg: "gray.800", transform: "scale(1.05)" }}
  transition="all 0.3s" // Single transition for hover effect
  initial={{ opacity: 0, y: 20 }}
  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate based on visibility
>

      <Text fontSize="xl" textAlign={"left"} color="gray.300" mb={4}>
        "{quote}"
      </Text>
      <VStack align="start">
        <Text fontWeight="bold" color="white">{name}</Text>
        <Text fontSize="sm" color="gray.400">{position}, {company}</Text>
        <Text fontSize="lg" color="yellow.400">{'★'.repeat(rating)}</Text>
      </VStack>
    </MotionBox>
  );
};