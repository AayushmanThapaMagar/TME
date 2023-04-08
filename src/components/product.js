import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from "@chakra-ui/react";
  import {swell} from '@/utils/swell';
  
  const productDetails = await swell.Product.get('642c101ca1da5d0012b902f7');
  const IMAGE =
    "https://mellifera.qodeinteractive.com/wp-content/uploads/2020/05/h1-rev-img-12.jpg";
  
  export function Product() {
    return (
      <Center py={12}>
        <Box
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"230px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: `url(${IMAGE})`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              rounded={"lg"}
              height={230}
              width={282}
              objectFit={"cover"}
              src={IMAGE}
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
              7oz (200 ml)
            </Text>
            <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
              Mad honey
            </Heading>
            <Stack direction={"row"} align={"center"}>
              <Text fontWeight={800} fontSize={"xl"}>
                $69
              </Text>
              <Text textDecoration={"line-through"} color={"gray.600"}>
                $420
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  }