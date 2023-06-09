import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    TabPanel,
    // NumberInput,
    // NumberInputField,
    // NumberInputStepper,
    // NumberIncrementStepper,
    // NumberDecrementStepper,
    useNumberInput,
    HStack,
    Input,
  } from "@chakra-ui/react";

  import { useState } from "react";

  import { CartComponent } from "./cart";

  
  export function InfoProductDetails({ product }) {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const productID = product.id;

    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      defaultValue: 1,
      min: 1,
    })

    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()

    const handleOpenDrawer = () => {
      setIsDrawerOpen(true);
    };


    const handleCloseDrawer = () => {
      setIsDrawerOpen(false);
    };

    return (
      <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={product.images[0].file.url}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {product.name}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              ${product.price}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <Box>
              <Tabs variant="enclosed">
                <TabList>
                  <Tab>Description</Tab>
                  <Tab>Details</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <p>{product.description}</p>
                  </TabPanel>
                  <TabPanel>
                    <p>two!</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Stack>

          <Flex>
          <Button
            rounded={"full"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={"#e9b55f"}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
              bg: "#ff9500",
            }}
            onClick={handleOpenDrawer}
          >
            Add to cart
          </Button>

          <HStack maxW='320px'>
          <Button {...dec}>-</Button>
          <Input {...input} />
          <Button {...inc}>+</Button>
          
          </HStack>
          </Flex>

        </Stack>

        <CartComponent isOpen={isDrawerOpen} onClose = {handleCloseDrawer} productID={productID} source = {"addBtn"}/>
      </SimpleGrid>
    </Container>
    )
  }  