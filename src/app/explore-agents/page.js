// ExploreAgents.js
"use client"; // Ensure this file is treated as a client component

import { Container, SimpleGrid, Heading, Text, Stack, Flex, Link, Button } from "@chakra-ui/react";
import { AIAgentItem } from './AIAgentItem'; // Adjust the path as needed
import { FaArrowLeftLong, FaUserGroup } from "react-icons/fa6";

const agentsData = [
  {
    title: "Nexus-7",
    description: "Logic Weaver",
    longDescription: "A master of complex problem-solving through neural network optimization.",
    powerLevel: 85,
    capabilities: "Neural Architecture",
    image: '/bg1.jpg', // Placeholder image
    nextBotName: "Alpha-9", // Next bot name
  },
  {
    title: "Orion-5",
    description: "Data Analyst",
    longDescription: "An expert in statistical analysis, I utilize advanced algorithms to interpret and visualize complex data.",
    powerLevel: 90,
    capabilities: "Statistical Modeling",
    image: '/bg6.jpg', // Placeholder image
    nextBotName: "Beta-4", // Next bot name
  },
  {
    title: "Zeta-12",
    description: "Predictive Analyst",
    longDescription: "Focused on forecasting trends and behaviors, I create predictive models.",
    powerLevel: 78,
    capabilities: "Machine Learning",
    image: '/bg3.jpg', // Placeholder image
    nextBotName: "Gamma-3", // Next bot name
  },
  {
    title: "Nexus-7",
    description: "Logic Weaver",
    longDescription: "A master of complex problem-solving through neural network optimization.",
    powerLevel: 85,
    capabilities: "Neural Architecture",
    image: '/bg4.jpg', // Placeholder image
    nextBotName: "Alpha-9", // Next bot name
  },
  {
    title: "Orion-5",
    description: "Data Analyst",
    longDescription: "An expert in statistical analysis, I utilize advanced algorithms to interpret and visualize complex data.",
    powerLevel: 90,
    capabilities: "Statistical Modeling",
    image: '/bg5.jpg', // Placeholder image
    nextBotName: "Beta-4", // Next bot name
  },
  {
    title: "Zeta-12",
    description: "Predictive Analyst",
    longDescription: "Focused on forecasting trends and behaviors, I create predictive models.",
    powerLevel: 78,
    capabilities: "Machine Learning",
    image: '/bg2.jpg', // Placeholder image
    nextBotName: "Gamma-3", // Next bot name
  },
];

export default function ExploreAgents() {
  return (
    <Container maxW="7xl" py={10}>
    <Link href="/">
    <Button
        bg="none"
        color="white/60"
        textDecoration="none"
        position="absolute"
        top={4}
        left={4}
        fontSize="md"
        display="flex"
        alignItems="center"
        _hover={{
          textDecoration: "none", // Prevent underline
          transform: "translateX(-5px)", // Move entire button slightly to the left
        }}
        transition="all 0.3s ease-in-out"
      >
        <FaArrowLeftLong
          style={{
            marginRight: "8px",
            transition: "all 0.3s ease-in-out",
          }}
          className="arrow-icon"
        />
        Back
        <style>
          {`
            .arrow-icon:hover {
              transform: scale(0.9) translateX(-5px); /* Shrink and move arrow */
            }
          `}
        </style>
      </Button>
      </Link>
      <Stack mb={8} textAlign="center">
       <Flex justify="center" direction="column" textAlign="center">
             <Heading size={{ base: '2xl', lg: '5xl' }} textAlign="center" color="white">
                 AI AGENTS
               </Heading>
               <Text fontSize="xl" textAlign="center" color={'white/60'} mt={4}>
               Explore our collection of specialized AI agents, each designed with unique capabilities and expertise
               </Text>
               <Link alignSelf={"center"} textDecoration={"none"} href="/my-agents">
               <Button
        mt={8}
        bg="gray.800" 
        color="white"
        px={8}
        py={6}
        mb={4}
        borderRadius="10px"
        _hover={{ bgColor: "gray.800" }}
        w={"200px"}
        alignSelf={"center"}
      >
      <FaUserGroup/>
        View My Agents
      </Button>
      </Link>
             </Flex>
      </Stack>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} gap={6}>
        {agentsData.map((agent, index) => (
          <AIAgentItem key={index} agent={agent} />
        ))}
      </SimpleGrid>
    </Container>
  );
}