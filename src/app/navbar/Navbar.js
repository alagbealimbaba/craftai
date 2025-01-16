import React from 'react';
import { Box, Flex, Text, HStack, Button, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { FaSuperpowers, FaTwitter, FaUserAstronaut, FaUserGroup } from 'react-icons/fa6';

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
        <HStack spacing={{ base: 0, md: 4 }}>
  <a href="/my-agents">
    <Button
      fontSize={{ base: 'xs', md: 'md', lg: '18px' }} // Smaller text on mobile
      variant="link"
      color="white"
      textDecoration="none"
      w={{ base: 'auto', md: 'auto' }} // Make button width auto to fit content
    >
      <FaUserGroup />
      <Text display={{ base: 'none', md: 'inline' }}>MY AGENTS</Text> {/* Hide text on mobile */}
    </Button>
  </a>
  <a href="explore-agents">
    <Button
      fontSize={{ base: 'xs', md: 'md', lg: '18px' }} // Smaller text on mobile
      variant="link"
      color="white"
      textDecoration="none"
      w={{ base: 'auto', md: 'auto' }} // Make button width auto to fit content
    >
      <FaUserAstronaut />
      <Text display={{ base: 'none', md: 'inline' }}>AI AGENTS</Text> {/* Hide text on mobile */}
    </Button>
  </a>
  <a href="https://x.com/CraftsolAI" target="_blank" rel="noopener noreferrer">
    <Button
      fontSize={{ base: 'sm', md: 'md', lg: '18px' }} // Responsive font sizes
      variant="link"
      color="white"
      textDecoration="none"
      w={{ base: 'auto', md: 'auto' }} // Make button width auto to fit content
    >
      <FaTwitter />
      <Text display={{ base: 'none', md: 'inline' }}>TWITTER</Text> {/* Hide text only for Twitter on mobile */}
    </Button>
  </a>
</HStack>

      </Flex>
    </Box>
  );
};

export default Navbar;
