import { Container, Flex, Text, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import { technologyData } from "./Data";
import { TechnologyItem } from "./TechnologyItem";


export const TechnologyShowcase = () => (
  <Container maxW="7xl" py={{ base: "8", lg: "16" }}>
    <Stack gap={{ base: "6", md: "8", lg: "12" }}>
      <Flex justify="center" direction="column" textAlign="center">
      <Heading size={{ base: '2xl', lg: '5xl' }} textAlign="center" color="white">
          TECHNOLOGY SHOWCASE
        </Heading>
        <Text fontSize="2xl" textAlign="center" color={'white/60'} mt={4}>
        Explore the advanced technologies powering our AI agents
        </Text>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: "4", md: "6", lg: "6" }}>
        {technologyData.map((item, index) => (
          <TechnologyItem key={index} data={item} />
        ))}
      </SimpleGrid>
    </Stack>
  </Container>
);
