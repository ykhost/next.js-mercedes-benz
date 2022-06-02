import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";
import { typeSearch } from "../../../Interfaces/searchType";

interface SearchProps {
  typeSearch: typeSearch
}

export function SearchBox ({ typeSearch }:SearchProps) {

  return (
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
            placeholder={`Buscar ${typeSearch}`}
            _placeholder={{ color: 'gray.500'}}
            // w="100%"
            width="auto"
          />
          <Icon as={RiSearchLine} fontSize="20"/>
        </Flex>
  )
}
