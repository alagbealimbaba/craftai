"use client";

import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { BsChatLeft } from "react-icons/bs";
import { FaBrain} from "react-icons/fa";
import { FaArrowLeftLong, FaUserGroup } from "react-icons/fa6";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { motion } from "framer-motion";


const MotionHeading = motion.create(Heading);
const MotionText = motion.create(Text);
const MotionButton = motion(Button);


export default function CreateAgent() {
  // State for form inputs
  const [agentImage, setAgentImage] = useState("");
  const [agentName, setAgentName] = useState("");  // Updated state for agent name
  const [primaryPurpose, setPrimaryPurpose] = useState("");
  const [description, setDescription] = useState("");
  const [personalityTraits, setPersonalityTraits] = useState([]);
  const [responseLength, setResponseLength] = useState("Balanced");
  const [communicationStyle, setCommunicationStyle] = useState("Friendly and Casual");
  const [learningStyle, setLearningStyle] = useState("Adaptive Learning");

  const handleSubmit = () => {
    console.log({
      agentImage,
      agentName,  
      primaryPurpose,
      description,
      personalityTraits,
      responseLength,
      communicationStyle,
      learningStyle,
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "black",
        color: "white",
        padding: "20px 0",
      }}
    >
      {/* Back Button */}


      {/* Header Section */}
     <Flex justify="center" align="center" direction="column">
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
             <MotionHeading
               size={{ base: '2xl', lg: '5xl' }}
               textAlign="center"
               color="white"
               initial={{ y: -50 }}
               animate={{ y: 0 }}
               transition={{ duration: 0.5, delay: 0.2 }}
             >
               CREATE AGENT
             </MotionHeading>
             <MotionText
               fontSize="xl"
               textAlign="center"
               color={"white/60"}
               mt={4}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.4 }}
             >
              Design your perfect AI companion by defining its personality, expertise, and purpose
             </MotionText>
             <a href="/my-agents">
             <Button
            my={8}
            bg="#1a1a1a"
            color="white"
            px={8}
            py={6}
            borderRadius="10px"
            _hover={{ bg: "gray.700" }}
        >
        <FaUserGroup fontSize={"10px"}/>
          View My Agents
        </Button>
        </a>
           </Flex>

      <Flex gap={4} justifyContent={"center"} alignContent={"center"}>
        {/* Form Section */}
        <div
          style={{
            width: "40%",
            border: "1px solid #262626",
            marginTop: "32px",
            padding: "20px 28px",
            borderRadius: "8px",
          }}
        >
          {/* Image Upload Section */}
          <label
            style={{
              color: "white",
              marginBottom: "8px",
              display: "block",
            }}
            htmlFor="agent-image"
          >
            Agent Image
          </label>

          <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px dashed #7a858d",
    padding: "0",
    marginTop: "20px",
    borderRadius: "8px",
    height: "120px",
    width: "120px",
    marginBottom: "16px",
    cursor: "pointer",
    position: "relative",
  }}
  onClick={() => document.getElementById('file-input').click()}
>
  {agentImage ? (
    <img
      src={agentImage}
      alt="Agent"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "8px",
        objectFit: "cover",
      }}
    />
  ) : (
    <>
      <span style={{ color: "#7a858d", fontSize: "24px" }}>+</span>
      <span style={{ color: "#7a858d", fontSize: "12px" }}>Upload an Image</span>
    </>
  )}
</div>

          <input
            type="file"
            id="file-input"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setAgentImage(reader.result);
                };
                reader.readAsDataURL(file);
              }
            }}
          />

          {/* Other input fields */}
          <label style={{ color: "white", marginBottom: "8px", display: "block" }} htmlFor="agent-name">
            Agent Name *
          </label>
          <input
            id="agent-name"
            type="text"
            placeholder="e.g., Atlas, Nova, Cipher"
            value={agentName}  // Bind input to agentName state
            onChange={(e) => setAgentName(e.target.value)}  // Update agentName on change
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

          <label style={{ color: "white", marginBottom: "8px", display: "block" }} htmlFor="personality-description">
            Personality Description *
          </label>
          <textarea
            id="personality-description"
            placeholder="Describe your agent's personality and approach..."
            value={description}  // Bind textarea to description state
            onChange={(e) => setDescription(e.target.value)}  // Update description on change
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "16px",
              borderRadius: "10px",
              border: "1px solid #262626",
              backgroundColor: "#1d1d1d",
              color: "white",
              resize: "vertical",
              height: "200px",
            }}
          />

          {/* Communication Style */}
          <label style={{ color: "white", marginBottom: "8px", display: "block" }} htmlFor="communication-style">
            Communication Style *
          </label>
          <select
            id="communication-style"
            value={communicationStyle}
            onChange={(e) => setCommunicationStyle(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "16px",
              borderRadius: "10px",
              border: "1px solid #262626",
              backgroundColor: "#1d1d1d",
              color: "white",
            }}
          >
            <option value="Friendly and Casual">Friendly and Casual</option>
            <option value="Formal">Formal</option>
            <option value="Concise">Concise</option>
            <option value="Detailed">Detailed</option>
          </select>

          {/* Learning Style */}
          <label style={{ color: "white", marginBottom: "8px", display: "block" }} htmlFor="learning-style">
            Learning Style *
          </label>
          <select
            id="learning-style"
            value={learningStyle}
            onChange={(e) => setLearningStyle(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "16px",
              borderRadius: "10px",
              border: "1px solid #262626",
              backgroundColor: "#1d1d1d",
              color: "white",
            }}
          >
            <option value="Adaptive Learning">Adaptive Learning</option>
            <option value="Static Learning">Static Learning</option>
            <option value="Collaborative Learning">Collaborative Learning</option>
          </select>

          {/* Response Length */}
          <label style={{ color: "white", marginBottom: "8px", display: "block" }} htmlFor="response-length">
            Response Length *
          </label>
          <select
            id="response-length"
            value={responseLength}
            onChange={(e) => setResponseLength(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "16px",
              borderRadius: "10px",
              border: "1px solid #262626",
              backgroundColor: "#1d1d1d",
              color: "white",
            }}
          >
            <option value="Concise">Concise</option>
            <option value="Balanced">Balanced</option>
            <option value="Elaborate">Elaborate</option>
          </select>

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

        {/* Dashboard Section */}
        <div
          style={{
            width: "40%",
            height: "fit-content",
            border: "1px solid #262626",
            marginTop: "32px",
            padding: "24px",
            borderRadius: "8px",
            backgroundColor: "#0d0d0d",
            gap: "20px",
          }}
        >
          {/* Agent Information */}
          <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
  <div style={{ display: "flex", justifyContent: "center", borderRadius: "50%", backgroundColor: "#1d1d1d", height: "60px", width: "60px", }}>
    <img src="./CrateBg.png" style={{ width: "40px", height: "40px", marginTop: "10px" }} />
  </div>
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
    <h2 style={{ color: "white", fontSize: "20px", fontWeight: 700 }}>{agentName || "Your Agent"}</h2>
    <p style={{ fontSize: "14px", color: "#7a858d" }}>Data-Analysis</p>
  </div>
</div>

          {/* Personality Section */}
          <div style={{ marginBottom: "16px", border: "1px solid #292929", borderRadius: "10px", padding: "1rem", backgroundColor: "#191919" }}>
            <h3 style={{ color: "#7a858d", display: "flex", alignItems: "center", fontSize: "14px", marginBottom: "5px" }}>
              <FaBrain style={{ marginRight: "8px", marginTop: "0.5px" }} />
              Personality
            </h3>
            <p style={{ color: "#7a858d", fontSize: "14px" }}>
              {description || "Personality description will appear here..."} {/* Display personality description */}
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
              <span>{primaryPurpose || "Data-Analysis"}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", color: "#7a858d", fontSize: "14px" }}>
              <span>Learning Style</span>
              <span>{learningStyle || "N/A"}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", color: "#7a858d", fontSize: "14px" }}>
              <span>Memory Depth</span>
              <span>Medium</span>
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
              <span>{communicationStyle}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", color: "#7a858d", fontSize: "14px" }}>
              <span>Response Length</span>
              <span>{responseLength}</span>
            </div>
          </div>

        </div>
      </Flex>
    </div>
  );
}