"use client";

import { Flex, Heading, Text, Button, VStack, Box, Image, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaBrain } from "react-icons/fa";
import { BsChatLeft } from "react-icons/bs";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { FaArrowLeftLong } from "react-icons/fa6";

const MotionHeading = motion(Heading);
const MotionText = motion(Text);

export default function CreateAgent() {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [powerLevel, setPowerLevel] = useState(0);
  const [capabilities, setCapabilities] = useState("");
  const [nextBotName, setNextBotName] = useState("");

  const handleSubmit = () => {
    const newAgent = {
      title,
      description,
      longDescription,
      powerLevel,
      capabilities,
      image,
      nextBotName,
    };

    // Save the agent to local storage
    const existingAgents = JSON.parse(localStorage.getItem("agents")) || [];
    existingAgents.push(newAgent);
    localStorage.setItem("agents", JSON.stringify(existingAgents));

    // Redirect to My Agents page after creation
    window.location.href = "/my-agents";
  };

  return (
    <Box display="flex" flexDirection="column" backgroundColor="black" color="white" padding={{ base: "20px", md: "40px" }}>
      <Flex justify="center" align="center" direction="column">
        <Link href="/">
          <Button
            variant="link"
            color="white"
            justifyContent="flex-start"
            padding="5px"
            width="80vw"
          >
          <FaArrowLeftLong />
            Back
          </Button>
        </Link>
        <MotionHeading size={{ base: 'xl', md: '5xl' }} textAlign="center" color="white">
          CREATE AGENT
        </MotionHeading>
        <MotionText fontSize={{ base: "lg", md: "xl" }} textAlign="center" color={"whiteAlpha.600"} mt={4}>
          Design your perfect AI companion by defining its personality, expertise, and purpose
        </MotionText>
      </Flex>

      <Flex gap={4} justifyContent={"center"} alignContent={"center"} flexDirection={{ base: "column-reverse", md: "row" }}>
        <Box width={{ base: "100%", md: "40%" }} marginTop="32px" padding="20px" borderRadius="8px" border="1px solid #262626">
          {/* Image Upload Section */}
          <label style={{ color: "white", marginBottom: "8px", display: "block" }} htmlFor="agent-image">
            Agent Image
          </label>
          <input
            type="file"
            accept="image/*"
            id="agent-image"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setImage(reader.result);
                };
                reader.readAsDataURL(file);
              }
            }}
            style={{ marginBottom: "16px" }}
          />
          {image && <img src={image} alt="Agent" style={{ width: "100%", height: "auto", borderRadius: "8px", marginBottom: "16px" }} />}

          {/* Title Input */}
          <label style={{ color: "white", marginBottom: "8px", display: "block" }} htmlFor="agent-title">
            Agent Title *
          </label>
          <input
            id="agent-title"
            type="text"
            placeholder="e.g., Atlas, Nova"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "16px",
              borderRadius: "10px",
              border: "1px solid #262626",
              backgroundColor: "#1d1d1d",
              color: "white",
            }}
          />

          {/* Description Input */}
          <label style={{ color: "white", marginBottom: "8px", display: "block" }} htmlFor="agent-description">
            Short Description *
          </label>
          <textarea
            id="agent-description"
            placeholder="Describe your agent..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "16px",
              borderRadius: "10px",
              border: "1px solid #262626",
              backgroundColor: "#1d1d1d",
              color: "white",
              resize: "vertical",
              height: "80px",
            }}
          />

          {/* Power Level Input */}
          <label style={{ color: "white", marginBottom: "8px", display: "block" }} htmlFor="agent-power-level">
            Power Level (0-100) *
          </label>
          <input
            id="agent-power-level"
            type="number"
            min="0"
            max="100"
            value={powerLevel}
            onChange={(e) => setPowerLevel(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "16px",
              borderRadius: "10px",
              border: "1px solid #262626",
              backgroundColor: "#1d1d1d",
              color: "white",
            }}
          />

          {/* Capabilities Input */}
          <label style={{ color: "white", marginBottom: "8px", display: "block" }} htmlFor="agent-capabilities">
            Capabilities *
          </label>
          <input
            id="agent-capabilities"
            type="text"
            placeholder="e.g., Data Analysis, Chatbot"
            value={capabilities}
            onChange={(e) => setCapabilities(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "16px",
              borderRadius: "10px",
              border: "1px solid #262626",
              backgroundColor: "#1d1d1d",
              color: "white",
            }}
          />

          {/* Next Bot Name Input */}
          <label style={{ color: "white", marginBottom: "8px", display: "block" }} htmlFor="agent-next-bot-name">
            Next Bot Name *
          </label>
          <input
            id="agent-next-bot-name"
            type="text"
            placeholder="e.g., Companion Bot"
            value={nextBotName}
            onChange={(e) => setNextBotName(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "16px",
              borderRadius: "10px",
              border: "1px solid #262626",
              backgroundColor: "#1d1d1d",
              color: "white",
            }}
          />

          {/* Create Agent Button */}
          <Button
            onClick={handleSubmit}
            width="100%"
            padding="10px"
            borderRadius="10px"
            backgroundColor="#4a90e2"
            color="white"
            fontSize="16px"
            marginTop="16px"
          >
            Create Agent
          </Button>
        </Box>

        {/* Updated Real-Time Dashboard */}
        <Box width={{ base: "100%", md: "40%" }} border="1px solid #262626" marginTop="32px" padding="24px" borderRadius="8px" backgroundColor="#0d0d0d">
          {/* Agent Information */}
          <Flex gap={2} marginBottom="10px">
            <Box display="flex" justifyContent="center" borderRadius="50%" backgroundColor="#1d1d1d" height="60px" width="60px">
              <img src={image || "./CrateBg.png"} style={{ width: "40px", height: "40px", marginTop: "10px" }} alt="Agent Icon" />
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Text color="white" fontSize="20px" fontWeight="700">{title || "Your Agent"}</Text>
              <Text fontSize="14px" color="#7a858d">{capabilities || "Capabilities"}</Text>
            </Box>
          </Flex>

          {/* Personality Section */}
          <Box marginBottom="16px" border="1px solid #292929" borderRadius="10px" padding="1rem" backgroundColor="#191919">
            <Text color="#7a858d" display="flex" alignItems="center" fontSize="14px" marginBottom="5px">
              <FaBrain style={{ marginRight: "8px", marginTop: "0.5px" }} />
              Personality
            </Text>
            <Text color="#7a858d" fontSize="14px">
              {description || "Personality description will appear here..."}
            </Text>
          </Box>

          {/* Capabilities Section */}
          <Box display="flex" flexDirection="column" gap="5px" marginBottom="16px" border="1px solid #292929" borderRadius="10px" padding="1rem" backgroundColor="#191919">
            <Text color="#7a858d" display="flex" alignItems="center" fontSize="14px" marginBottom="5px">
              <BsChatLeft style={{ marginRight: "8px", marginTop: "0.5px" }} />
              Capabilities
            </Text>
            <Flex justifyContent="space-between" color="#7a858d" fontSize="14px">
              <Text>Specialization</Text>
              <Text>{capabilities || "N/A"}</Text>
            </Flex>
            <Flex justifyContent="space-between" color="#7a858d" fontSize="14px">
              <Text>Learning Style</Text>
              <Text>{"Visual"}</Text>
            </Flex>
            <Flex justifyContent="space-between" color="#7a858d" fontSize="14px">
              <Text>Memory Depth</Text>
              <Text>Medium</Text>
            </Flex>
          </Box>

          {/* Communication Section */}
          <Box display="flex" flexDirection="column" gap="5px" marginBottom="16px" border="1px solid #292929" borderRadius="10px" padding="1rem" backgroundColor="#191919">
            <Text color="#7a858d" display="flex" alignItems="center" fontSize="14px" marginBottom="5px">
              <HiOutlineLightningBolt style={{ marginRight: "8px", marginTop: "0.5px" }} />
              Communication
            </Text>
            <Flex justifyContent="space-between" color="#7a858d" fontSize="14px">
              <Text>Style</Text>
              <Text>{"Concise"}</Text>
            </Flex>
            <Flex justifyContent="space-between" color="#7a858d" fontSize="14px">
              <Text>Response Length</Text>
              <Text>{"Short"}</Text>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}