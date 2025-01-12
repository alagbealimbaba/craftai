// UserExperienceShowcase.js
import { Container, Stack, Heading, SimpleGrid } from "@chakra-ui/react";
import { UserExperienceItem } from "./UserExperienceItem";
import { userExperienceData } from "./UserExperienceData";

export const UserExperienceShowcase = () => (
  <Container maxW="7xl" py={{ base: "8", lg: "16" }} my={"100px"}>
    <Stack gap={{ base: "6", md: "8", lg: "12" }}>
      <Heading size={{ base: '2xl', lg: '5xl' }} textAlign="center" color="white">
       USER EXPERIENCES
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: "4", md: "6", lg: "6" }}>
        {userExperienceData.map((item, index) => (
          <UserExperienceItem key={index} experience={item} />
        ))}
      </SimpleGrid>
    </Stack>
  </Container>
);