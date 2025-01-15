import React from 'react';
import { Box, Flex, Text, HStack, Button, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { FaSuperpowers, FaUserAstronaut, FaUserGroup } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <Box 
      bg="black" 
      color="white" 
      px={{ base: 0, md: 10 }} // No padding on smaller screens
      py={2}
    >
      <Flex justify="space-between" align="center">
        <Link href="/">
          <Box display="flex" alignItems="center" cursor="pointer">
            <Image w="50px" h="50px" mt="2px" src="/CrateBg.png" alt="Logo" />
            <Text
              fontSize={{ base: 'xl', md: '3xl', lg: '4xl' }} // Responsive font sizes
              fontWeight="bold"
            >
              CRAFT
            </Text>
          </Box>
        </Link>
        <HStack spacing={4}>
          <a href="/my-agents">
            <Button
              fontSize={{ base: 'sm', md: 'md', lg: '18px' }} // Responsive font sizes
              variant="link"
              color="white"
              textDecoration="none"
            >
              <FaUserGroup />
              MY AGENTS
            </Button>
          </a>
          <a href="explore-agents">
            <Button
              fontSize={{ base: 'sm', md: 'md', lg: '18px' }} // Responsive font sizes
              variant="link"
              color="white"
              textDecoration="none"
            >
              <FaUserAstronaut />
              AI AGENTS
            </Button>
          </a>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
