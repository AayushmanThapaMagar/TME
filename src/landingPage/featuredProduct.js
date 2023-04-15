import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  chakra,
  Flex,
} from "@chakra-ui/react";

import { Product } from "../components/productComponent";

export function FeaturedProducts() {
  return (
    <Flex
      textAlign={"center"}
      pt={10}
      justifyContent={"center"}
      direction={"column"}
      width={"full"}
    >
      <Box margin={"auto"}>
        <chakra.h1
          py={5}
          fontSize={48}
          fontFamily={"Work Sans"}
          fontWeight={"bold"}
          color={useColorModeValue("gray.700", "gray.50")}
        >
          Featured Products
        </chakra.h1>
        <Stack direction="row" spacing={100}>
          <Product />
          <Product />
          <Product />
        </Stack>
      </Box>
    </Flex>
  );
}
