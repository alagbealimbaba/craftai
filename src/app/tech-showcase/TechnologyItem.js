import { Box, Text, VStack, HStack } from "@chakra-ui/react";

export const TechnologyItem = ({ data }) => {
  const { icon, header, stats, features } = data;

  return (
    <Box
          bg="whiteAlpha.50"
          p={6}
      borderRadius="lg"
      textAlign="center"
      boxShadow="lg"
      _hover={{ bg: "gray.800", transform: "scale(1.05)" }}
      transition="all 0.3s"
    >
      <Text fontSize="3xl" textAlign={"left"} mb={4}>
        {icon}
      </Text>
      <Text fontWeight="bold" textAlign={"left"} fontSize="xl" mb={4} color="white">
        {header}
      </Text>

      <HStack justify="space-around" spacing={6} mb={4}>
        {stats.map((stat, index) => (
          <VStack key={index}  >
            <Text fontWeight="bold" fontSize="3xl" color="white">
              {stat.value}
            </Text>
            <Text fontSize="sm" color={"white/60"}>
              {stat.label}
            </Text>
          </VStack>
        ))}
      </HStack>

      <VStack align="start" spacing={2}>
        {features.map((feature, index) => (
          <Text key={index} fontSize="sm" color={"white/60"}>
            • {feature}
          </Text>
        ))}
      </VStack>
    </Box>
  );
};
