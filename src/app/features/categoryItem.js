// categoryItem.js
"use client"; // Ensure this file is treated as a client component

import { Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Create a motion box
const MotionBox = motion(Box);

export const CategoryItem = ({ data }) => {
  const { icon, header, description } = data;

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
  
      <Text fontSize="3xl" mb={4}>
        {icon}
      </Text>
      <Text fontWeight="bold" fontSize="xl" mb={2} color="white">
        {header}
      </Text>
      <Text fontSize="16px" color={"white/60"}>
        {description}
      </Text>
    </MotionBox>
  );
};