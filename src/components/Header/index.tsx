import { Button, Flex, HStack, Text, Image, useBreakpointValue } from "@chakra-ui/react";
// import Image from "next/image";


export function Header () {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true
  })

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
      justifyContent="space-between"
    >
      <Text
        fontSize={["2xl", "3xl"]}
        fontWeight="bold"
        letterSpacing="tight"
        w="64"

      >
        CARFAN.
      </Text>

      <HStack
        spacing={["6", "8"]}
        mx={["6", "8"]}
        pr={["0", "8"]}
        py="1"
        color="gray.700"
      >
        <Text as="button">CARS</Text>
        <Text as="button">FIPE</Text>
        <Text as="button">VIN</Text>
      </HStack>

      {isWideVersion && (
        <Button
        size="sm"
        fontWeight="medium"
        colorScheme="blackAlpha"
        color="gray.50"
      >
        CONTACT US
      </Button>
      )}

    </Flex>
  )
}
