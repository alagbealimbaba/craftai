"use client";

import { Flex, Heading, Text, Button, VStack, Box, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaBrain } from "react-icons/fa";
import { BsChatLeft } from "react-icons/bs";
import { HiOutlineLightningBolt } from "react-icons/hi";

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
    <div style={{ display: "flex", flexDirection: "column", backgroundColor: "black", color: "white", padding: "20px 0" }}>
      <Flex justify="center" align="center" direction="column">
        <Link href="/">
          <button style={{ background: "none", fontSize: "16px", cursor: "pointer", padding: "5px", width: "80vw" }}>
            Back
          </button>
        </Link>
        <MotionHeading size={{ base: '2xl', lg: '5xl' }} textAlign="center" color="white">
          CREATE AGENT
        </MotionHeading>
        <MotionText fontSize="xl" textAlign="center" color={"white/60"} mt={4}>
          Design your perfect AI companion by defining its personality, expertise, and purpose
        </MotionText>
      </Flex>

      <Flex gap={4} justifyContent={"center"} alignContent={"center"}>
        <div style={{ width: "40%", marginTop: "32px", padding: "20px 28px", borderRadius: "8px", border: "1px solid #262626" }}>
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
          <button
            onClick={handleSubmit}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "10px",
              border: "none",
              backgroundColor: "#4a90e2",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
              marginTop: "16px",
            }}
          >
            Create Agent
          </button>
        </div>

        {/* Updated Real-Time Dashboard */}
        <div style={{ width: "40%", border: "1px solid #262626", marginTop: "32px", padding: "24px", borderRadius: "8px", backgroundColor: "#0d0d0d" }}>
          {/* Agent Information */}
          <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
            <div style={{ display: "flex", justifyContent: "center", borderRadius: "50%", backgroundColor: "#1d1d1d", height: "60px", width: "60px" }}>
              <img src={image || "./CrateBg.png"} style={{ width: "40px", height: "40px", marginTop: "10px" }} alt="Agent Icon" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <h2 style={{ color: "white", fontSize: "20px", fontWeight: 700 }}>{title || "Your Agent"}</h2>
              <p style={{ fontSize: "14px", color: "#7a858d" }}>{capabilities || "Capabilities"}</p>
            </div>
          </div>

          {/* Personality Section */}
          <div style={{ marginBottom: "16px", border: "1px solid #292929", borderRadius: "10px", padding: "1rem", backgroundColor: "#191919" }}>
            <h3 style={{ color: "#7a858d", display: "flex", alignItems: "center", fontSize: "14px", marginBottom: "5px" }}>
              <FaBrain style={{ marginRight: "8px", marginTop: "0.5px" }} />
              Personality
            </h3>
            <p style={{ color: "#7a858d", fontSize: "14px" }}>
              {description || "Personality description will appear here..."}
            </p>
          </div>

          {/* Capabilities Section */}
          <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginBottom: "16px", border: "1px solid #292929", borderRadius: "10px", padding: "1rem", backgroundColor: "#191919" }}>
            <h3 style={{ color: "#7a858d", display: "flex", alignItems: "center", fontSize: "14px", marginBottom: "5px" }}>
              <BsChatLeft style={{ marginRight: "8px", marginTop: "0.5px" }} />
              Capabilities
            </h3>
            <div style={{ display: "flex", justifyContent: "space-between", color: "#7a858d", fontSize: "14px" }}>
              <span>Specialization</span>
              <span>{capabilities || "N/A"}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", color: "#7a858d", fontSize: "14px" }}>
              <span>Learning Style</span>
              <span>{"Visual"}</span> {/* This can be adjusted dynamically if needed */}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", color: "#7a858d", fontSize: "14px" }}>
              <span>Memory Depth</span>
              <span>Medium</span> {/* This can also be adjusted */}
            </div>
          </div>

          {/* Communication Section */}
          <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginBottom: "16px", border: "1px solid #292929", borderRadius: "10px", padding: "1rem", backgroundColor: "#191919" }}>
            <h3 style={{ color: "#7a858d", display: "flex", alignItems: "center", fontSize: "14px", marginBottom: "5px" }}>
              <HiOutlineLightningBolt style={{ marginRight: "8px", marginTop: "0.5px" }} />
              Communication
            </h3>
            <div style={{ display: "flex", justifyContent: "space-between", color: "#7a858d", fontSize: "14px" }}>
              <span>Style</span>
              <span>{"Concise"}</span> {/* Adjust as necessary */}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", color: "#7a858d", fontSize: "14px" }}>
              <span>Response Length</span>
              <span>{"Short"}</span> {/* Adjust as necessary */}
            </div>
          </div>
        </div>
      </Flex>
    </div>
  );
}