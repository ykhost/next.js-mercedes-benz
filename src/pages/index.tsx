import { Flex, HStack, Icon, Image, Input, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { RiSearchLine } from "react-icons/ri";

const Home: NextPage = () => {
  return (
    <Flex
      direction="column"
      h="100vh"
    >
      <Header />

      <Flex
        w="100%"
        maxWidth={1480}
        mx="auto"
        mt={["12","4"]}
        align="center"
        px={["2","6"]}
      >
      <Flex
        direction="column"
        justifyContent="space-between"
        align="center"
      >
        <Flex
          align="center"
          justifyContent="flex-end"
        >
          <HStack
            spacing={["1rem","5rem"]}
            fontSize={["1.1rem","1.5rem"]}
            fontWeight="medium"
            color="gray.500"
          >
            <Text
              as="button"
              color="gray.800"
            >
              Automoveis
            </Text>
            <Text as="button">Caminhoes</Text>
            <Text as="button">Onibus</Text>
            <Text as="button" >Vans</Text>
          </HStack>
        </Flex >
        <Flex
          flex="1"
          py={["3","4"]}
          px={["3","8"]}
          mt="10"
          width="100%"
          maxWidth={["19rem","39rem"]}
          maxHeight={["3rem","3.5rem"]}
          alignSelf="center"
          justifyContent="space-between"
          color="gray.800"
          bg="gray.200"
          borderRadius="full"
        >
          <Input
            color="gray.600"
            variant="unstyled"
            px="4"
            mr="4"
            placeholder="Buscar automoveis"
            _placeholder={{ color: 'gray.500'}}
            // w="100%"
            width="auto"
          />
          <Icon as={RiSearchLine} fontSize="20"/>
        </Flex>
        <Flex
          width="100%"
          maxH="35rem"
          mt={["5rem"]}
        >
          <Image
            src="https://www.motortrend.com/uploads/sites/10/2022/02/2022-mercedes-benz-cla-coupe-250-4wd-sedan-angular-front.png"
            alt="CL2323"
            objectFit="contain"
          ></Image>
        </Flex>
        </Flex>
      </Flex>
    </Flex>

// https://www.motortrend.com/uploads/sites/10/2022/02/2022-mercedes-benz-cla-coupe-250-4wd-sedan-angular-front.png
  )
}

export default Home
