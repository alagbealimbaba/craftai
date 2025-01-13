"use client";

import React, { useEffect, useState, useCallback } from 'react';
import { Flex, Button, Text, SimpleGrid } from '@chakra-ui/react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import Link from 'next/link';
import { AIAgentItem } from '../explore-agents/AIAgentItem';

const MyAgentsPage = () => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAgents = () => {
      try {
        const storedAgents = JSON.parse(localStorage.getItem("agents")) || [];
        setAgents(storedAgents);
      } catch (error) {
        console.error('Error loading agents from local storage', error);
      } finally {
        setLoading(false);
      }
    };

    loadAgents();
  }, []);

  const handleDeleteAgent = useCallback((index) => {
    const updatedAgents = agents.filter((_, idx) => idx !== index);
    try {
      localStorage.setItem("agents", JSON.stringify(updatedAgents));
      setAgents(updatedAgents);
    } catch (error) {
      console.error('Error saving agents to local storage', error);
    }
  }, [agents]);

  if (loading) {
    return <Text display={"flex"}  w={"full"} alignSelf={"center"} fontSize={"xl"} color="white">Loading agents...</Text>; // Loading state
  }

  return (
    <Flex direction="column" align="center" backgroundColor="black" color="white" textAlign="center" mt={8}>
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
            width: "80vw",
          }}
          aria-label="Back to home"
        >
          <FaArrowLeftLong style={{ marginRight: "8px" }} /> Back
        </button>
      </Link>

      {/* Page Title */}
      <Text display={"flex"} fontSize="32px" fontWeight="bold" my="10px">
        <img src='/crateBg.png' width={"50px"} height={"10px"} alt="Background" /> MY AGENTS
      </Text>
      <Text fontSize="xl" color={"whiteAlpha.600"} mb="20px">
        Your personal collection of custom AI agents
      </Text>

      {/* Create New Agent Button */}
      <Link href='/create-agent'>
        <Button colorScheme="blue" size="lg" my="20px" py={6} px={8} borderRadius={"10px"}>
          + Create New Agent
        </Button>
      </Link>

      {/* Display Agents */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} my={12} width="80%">
        {agents.map((agent, index) => (
          <AIAgentItem key={index} agent={agent} onDelete={() => handleDeleteAgent(index)} showDeleteButton={true} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default MyAgentsPage;