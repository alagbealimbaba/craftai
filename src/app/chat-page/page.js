"use client";
import { Box, Flex, Heading, Textarea, Button, Text } from "@chakra-ui/react";
import { useChat } from "ai/react";

// Define the ChatComponent function
function ChatComponent() {
    const { input, handleInputChange, handleSubmit, messages } = useChat();

    console.log(messages);
    console.log(input);

    return (
        <div>
            {messages.map((message) => (
                <div key={message.id}>
                    {/* Name of person talking */}
                    <Heading as="h3" size="md" className="mt-2" color={message.role === "assistant" ? "blue.400" : "green.400"}>
                        {message.role === "assistant" ? "GPT-4" : "User"}
                    </Heading>

                    {/* Formatting the message */}
                    {message.content.split("\n").map((currentTextBlock, index) => (
                        <Text key={message.id + index} mt={1}>
                            {currentTextBlock === "" ? " " : currentTextBlock}
                        </Text>
                    ))}
                </div>
            ))}

            <form className="mt-12" onSubmit={handleSubmit}>
                <Textarea
                    className="mt-2"
                    placeholder="What are data structures and algorithms?"
                    value={input}
                    onChange={handleInputChange}
                    bg="gray.600"
                    color="white"
                    resize="none"
                />
                <Button className="rounded-md mt-2" colorScheme="blue" type="submit">
                    Send message
                </Button>
            </form>
        </div>
    );
}

// Define the ChatPage function
export default function ChatPage() {
    return (
        <Flex direction="column" align="center" justify="center" minH="100vh" p={6}>
            <Box bg="gray.700" p={4} width={{ base: "90%", md: "800px" }} borderRadius="md" color="white">
                <Heading as="h2" size="lg" color="white">
                    GPT-4 Streaming Chat Application
                </Heading>
                <ChatComponent />
            </Box>
        </Flex>
    );
}