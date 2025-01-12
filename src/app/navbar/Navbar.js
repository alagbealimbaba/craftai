import React from 'react';
import { Box, Flex, Text, HStack, Button, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { FaUserGroup } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <Box bg="black" color="white" px={10} py={2}>
      <Flex justify="space-between" align="center">
        <Link href="/">
          <Box display="flex" alignItems="center" cursor="pointer">
            <Image w="50px" h="50px" mt="2px" src="/CrateBg.png" alt="Logo" />
            <Text fontSize="4xl" fontWeight="bold">CRAFT</Text>
          </Box>
        </Link>
        <HStack spacing={8} mr={8}>
        <a href="/my-agents">
        <Button fontSize="18px" variant="link" color={"white"} textDecoration={"none"}><FaUserGroup/>  My Agents</Button>
        </a>
          <Button fontSize="18px" variant="link" color={"white"} textDecoration={"none"}>Documentation</Button>
          <Button fontSize="18px" variant="link" color={"white"} textDecoration={"none"}>Support</Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
