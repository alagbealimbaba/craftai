"use client";

import React from 'react'
import { Box, Text, Button, Heading } from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa'


const Footer = () => {
  return (
    <Box display={'flex'} h={"80vh"} gap={6} flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
        <Heading size={{ base: '2xl', lg: '5xl' }} textAlign="center" color="white" letterSpacing={"1.5px"}>
                 START BUILDING TODAY
               </Heading>
               <Text fontSize="2xl" textAlign="center" color={'white/60'} mt={4} w={"800px"} flexWrap={"wrap"} mb={10}>
               Create your first AI agent in minutes and experience the power of neural-enhanced artificial intelligence
               </Text>
 <a href="/create-agent">
        <Button
          px={'35px'}
          py={'30px'}
          color={'black'}
          fontSize={'18px'}
          bg={'white'}
          borderRadius={'10px'}
          _hover={{ transform: 'translateX(5px)' }}
          >
          Create your Agent
          <Box
            as={FaArrowRight}
            ml="8px"
            mt="2px"
            fontSize="20px"
            transition="transform 0.3s ease"
            _hover={{ transform: 'translateX(5px)' }}
          />
        </Button>
      </a>
    </Box>
  )
}

export default Footer