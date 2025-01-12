"use client"

import React from 'react';
import { Flex, Button, Text, Box } from '@chakra-ui/react';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowLeftLong } from 'react-icons/fa6';
import Link from 'next/link';

const MyAgentsPage = () => {
  return (
    <Flex
      direction="column"
      align="center"
      height="100vh"
      backgroundColor="black"
      color="white"
      textAlign="center"
      mt={8}
    >
      {/* Back Button */}
      <Link href="/">
        <button
          style={{
            background: "none",
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            cursor: "pointer",
            padding: "5px",
            width:"80vw",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateX(-5px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateX(0)")
          }
        >
          <FaArrowLeftLong
            style={{ marginRight: "8px", transition: "all 0.3s ease-in-out", textAlign:"left" }}
          />
          Back
        </button>
      </Link>

      {/* Page Title */}
      <Text display={'flex'} fontSize="32px" fontWeight="bold" my="10px">
      <img src='/crateBg.png' width={"50px"} height={"10px"}/>
        MY AGENTS
      </Text>
      <Text fontSize="xl" color={"white/60"}  mb="20px">
        Your personal collection of custom AI agents
      </Text>

      {/* Create New Agent Button */}
      <Link href='/create-agent'>
      <Button
        colorScheme="blue"
        size="lg"
        my="20px"
        py={6}
        px={8}
        borderRadius={"10px"}
      >
        + Create New Agent
      </Button>
</Link>
    </Flex>
  );
};

export default MyAgentsPage;