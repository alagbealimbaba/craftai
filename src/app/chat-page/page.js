"use client"; // Ensure this is a client component

import { useSearchParams } from "next/navigation";
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Input,
  Spinner,
  SimpleGrid,
} from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import { FiMic, FiCalendar, FiSend } from "react-icons/fi";
import { HiLightBulb, HiMap } from "react-icons/hi";

export default function ChatPage() {
  const searchParams = useSearchParams();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [parsedAgent, setParsedAgent] = useState(null);
  const messagesEndRef = useRef(null); // Reference for scrolling

  useEffect(() => {
    const agentParam = searchParams.get("agent");
    if (agentParam) {
      try {
        const agentData = JSON.parse(decodeURIComponent(agentParam));
        console.log("Parsed Agent Data:", agentData);
        setParsedAgent(agentData);
      } catch (error) {
        console.error("Error parsing agent data:", error);
      }
    }
  }, [searchParams]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    if (!input.trim()) return;

    // Add user message to state
    const userMessage = { id: Date.now(), role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Call the API
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response");
      }

      const data = await response.json();
      const assistantMessage = data.choices[0].message;

      // Add assistant message to state
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      direction="column"
      minH="100vh"
      bg="black"
      color="white"
      p={{ base: 2, md: 4 }}
    >
      {/* Header Section */}
      <Heading as="h1" size={{ base: "lg", md: "2xl" }} mb={2} color="teal.300" textAlign="center">
        Hello, User
      </Heading>
      <Text fontSize={{ base: "sm", md: "lg" }} color="fg.muted" mb={4} textAlign="center">
        How can I help you today?
      </Text>

      {/* Suggested Questions */}
      <SimpleGrid columns={{ base: 2, md: 4 }} gap={2} mb={4} maxW="100%">
        {[
          { text: "What's the best weather to you?", icon: HiLightBulb },
          { text: "Share the simplest tips for writing an essay", icon: HiMap },
          { text: "What does React.js do?", icon: FiCalendar },
          { text: "Recommend some books I can read", icon: FiMic },
        ].map((item, index) => (
          <Box
            key={index}
            p={{ base: 2, md: 4 }}
            borderRadius="md"
            bg="gray.800"
            color="teal.300"
            boxShadow="lg"
            cursor="pointer"
            textAlign="center"
            _hover={{ bg: "gray.700" }}
            onClick={() => setInput(item.text)}
          >
            <VStack spacing={1}>
              <item.icon size="20" />
              <Text fontSize={{ base: "xs", md: "sm" }}>{item.text}</Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>

      {/* Message Container */}
      <Box
        bg="gray.900"
        p={{ base: 2, md: 4 }}
        width={{ base: "100%", md: "80%" }}
        maxW="100%"
        flex="1"
        borderRadius="md"
        color="white"
        overflowY="auto"
        boxShadow="lg"
        border="1px"
        borderColor="gray.600"
        display="flex"
        flexDirection="column"
        mb={4}
      >
        <VStack spacing={2} align="stretch" flex="1" overflowY="auto">
          {messages.map((message) => (
            <HStack
              key={message.id}
              justifyContent={
                message.role === "assistant" ? "flex-end" : "flex-start"
              }
            >
              <Box
                p={{ base: 2, md: 3 }}
                borderRadius="md"
                bg={message.role === "assistant" ? "teal.500" : "teal.700"}
                maxWidth="80%"
                boxShadow="md"
              >
                <Text color="white" fontWeight="bold" mb={1} fontSize="sm">
                  {message.role === "assistant" ? "GPT-4" : "You"}
                </Text>
                <Text fontSize="sm">
                  {message.content.split("\n").map((textBlock, index) => (
                    <span key={message.id + index}>
                      {textBlock === "" ? <br /> : textBlock}
                    </span>
                  ))}
                </Text>
              </Box>
            </HStack>
          ))}
          <div ref={messagesEndRef} /> {/* Scroll target */}
        </VStack>
        {isLoading && (
          <Flex justifyContent="center" alignItems="center" mt={2}>
            <Spinner size="sm" color="teal.300" />
            <Text ml={2} fontSize="sm">Loading...</Text>
          </Flex>
        )}
      </Box>

      {/* Input Area */}
      <HStack
        width={{ base: "100%", md: "80%" }}
        maxW="100%"
        bg="gray.800"
        borderRadius="md"
        padding={2}
        boxShadow="lg"
        alignItems="center"
      >
        <Input
          placeholder="Ask me anything..."
          value={input}
          onChange={handleInputChange}
          bg="gray.700"
          color="white"
          border="none"
          flex="1"
          height="36px"
          fontSize="sm"
          _focus={{ borderColor: "teal.500" }}
          _placeholder={{ color: "gray.500" }}
        />
        <Button
          colorScheme="teal"
          variant="ghost"
          onClick={handleSubmit}
          bg="teal.600"
          _hover={{ bg: "teal.700" }}
          size="sm"
        >
          <FiSend />
        </Button>
      </HStack>

      {/* Footer */}
      <Text fontSize="xs" color="fg.muted" mt={4} textAlign="center">
        The AI model can make mistakes.
      </Text>
    </Flex>
  );
}
