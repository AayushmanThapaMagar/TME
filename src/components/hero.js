import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import { useRouter } from "next/router";

export function SplitScreen() {
  const router = useRouter();
  return (
    <Stack minH={"95vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              Himalayan
            </Text>
            <br />{" "}
            <Text color={"#ff6a00"} as={"span"}>
              Mad Honey
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Taste the authentic flavors of the Himalayas with our mad honey.
          </Text>

          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Sourced from the highest peaks of Nepal, now available to be
            delieverd right to your doorstep.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"#ff9500"}
              color={"white"}
              _hover={{
                bg: "#ff6a00",
              }}
              onClick={() => router.push("/products")}
            >
              Buy Now
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://mellifera.qodeinteractive.com/wp-content/uploads/2020/05/h1-rev-img-12.jpg"
          }
        />
      </Flex>
    </Stack>
  );
}
