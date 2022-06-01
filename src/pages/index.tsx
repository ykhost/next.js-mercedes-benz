import { Box, Flex, HStack, Image, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Header } from '../components/Header'

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
        h="100vh"
        mx="auto"
        mt="2rem"
        px="6"
      >
      <Flex
        direction="column"
        justifyContent="space-between"
        align="center"
        h="90vh"
      >
        <Flex
          h="100%"
          align="center"
          justifyContent="flex-end"
        >
          <HStack
            spacing="2rem"
            fontSize="1.5rem"
            fontWeight="medium"
            color="gray.500"
          >
            <Text as="button">Automoveis</Text>
            <Text as="button">Caminhoes</Text>
            <Text as="button">Onibus</Text>
            <Text as="button" >Vans</Text>
          </HStack>
        </Flex >
        <Flex
          width="100%"
          maxH="35rem"
          mt="2rem"
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
