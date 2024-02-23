import React from "react";
import { Box, Container, Heading, Text, Button, Stack, Image, Badge, Flex, Spacer, useColorMode, IconButton, Tooltip } from "@chakra-ui/react";
import { FaLightbulb, FaMoon, FaPlayCircle, FaUndoAlt } from "react-icons/fa";

const FeatureBadge = ({ children }) => (
  <Badge px={2} py={1} mr={2} colorScheme="green">
    {children}
  </Badge>
);

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW="container.xl" py={10}>
      <Stack spacing={8}>
        <Flex alignItems="center">
          <Box>
            <Heading as="h1">EmailiLama</Heading>
            <Text>Your Inbox Transformation Guide</Text>
          </Box>
          <Spacer />
          <Tooltip label="Toggle Zen Mode">
            <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaLightbulb />} isRound size="lg" alignSelf="flex-start" onClick={toggleColorMode} />
          </Tooltip>
        </Flex>
        <Image src="https://images.unsplash.com/photo-1444312645910-ffa973656eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpbmJveCUyMHplbnxlbnwwfHx8fDE3MDg3MjMxNjF8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />

        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Core Features</Heading>
          <Stack mt={4} spacing={3}>
            <Text>
              <FeatureBadge>Inbox Sensei</FeatureBadge>AI-powered categorization tailored to your habits.
            </Text>
            <Text>
              <FeatureBadge>Llama Recommends</FeatureBadge>Personalized cleanup suggestions.
            </Text>
            <Text>
              <FeatureBadge>Zen Focus Mode</FeatureBadge>Minimize distractions with a calming interface.
            </Text>
            <Text>
              <FeatureBadge>Powerful Search</FeatureBadge>Find emails effortlessly.
            </Text>
            <Text>
              <FeatureBadge>Undo & Progress</FeatureBadge>Track and revert your changes easily.
            </Text>
          </Stack>
        </Box>

        <Stack spacing={5}>
          <Heading as="h3" size="lg">
            User Experience
          </Heading>
          <Text>Get started with a guided onboarding and enjoy the playful, optional Llama-themed UI.</Text>
          <Text>Unlock "Inbox Zen" points by training your Inbox Sensei through gamification.</Text>
          <Text>Understand how the AI works with transparent suggestions and actions.</Text>
        </Stack>

        <Stack spacing={5}>
          <Heading as="h3" size="lg">
            Freemium Model
          </Heading>
          <Stack direction={["column", "row"]} spacing={4}>
            <Button colorScheme="teal">Get Started for Free</Button>
            <Button colorScheme="blue">Upgrade to Basic</Button>
            <Button colorScheme="purple">Go Premium</Button>
          </Stack>
        </Stack>

        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">EmailiLama's Promise</Heading>
          <Text mt={4}>We believe everyone deserves a peaceful inbox. Achieve inbox zen and reclaim your digital life with EmailiLama!</Text>
        </Box>

        <Stack direction="row" justifyContent="space-between" mt={10}>
          <Button leftIcon={<FaUndoAlt />} colorScheme="yellow">
            Undo Changes
          </Button>
          <Button rightIcon={<FaPlayCircle />} colorScheme="green">
            Start Inbox Zen Journey
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Index;
