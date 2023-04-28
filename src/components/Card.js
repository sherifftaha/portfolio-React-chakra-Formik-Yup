import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      bg="white"
      borderRadius="10px"
      spacing={4}
    >
      <Image src={imageSrc} borderRadius="10px" />
      <VStack
        alignItems="start"
        bg="white"
        color="black"
        borderRadius="10px"
        spacing={4}
        pl={4}
        pb={4}
      >
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text color={"#484848"}>
          {description}
        </Text>
        <HStack >
          <Text>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
