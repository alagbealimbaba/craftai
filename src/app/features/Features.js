// Features.js
"use client"; // Ensure this file is treated as a client component

import { Container, Flex, Heading, Text, SimpleGrid, Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { CategoryItem } from './categoryItem'; // Ensure the path is correct
import { data } from './data';

// Create motion components
const MotionContainer = motion.create(Container);
const MotionHeading = motion.create(Heading);
const MotionText = motion.create(Text);
const MotionSimpleGrid = motion.create(SimpleGrid);

export const Features = () => (
  <MotionContainer
    minH={"100vh"}
    my={10}
    maxW="7xl"
    py={{ base: '8', lg: '16' }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <Stack gap={{ base: '6', md: '8', lg: '12' }}>
      <Flex justify="center" align="center" direction="column">
        <MotionHeading
          size={{ base: '2xl', lg: '5xl' }}
          textAlign="center"
          color="white"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          POWERFUL FEATURES
        </MotionHeading>
        <MotionText
          fontSize="2xl"
          textAlign="center"
          color={"white/60"}
          mt={4}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Harness the power of our advanced AI agents with cutting-edge features.
        </MotionText>
      </Flex>
      <MotionSimpleGrid
        columns={{ base: 2, md: 3, lg: 3 }}
        gap={{ base: '4', md: '6', lg: '6' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {data.map((item) => (
          <CategoryItem key={item.header} data={item} />
        ))}
      </MotionSimpleGrid>
    </Stack>
  </MotionContainer>
);