import { Flex, HStack, Button } from "@chakra-ui/react";
import { typeSearch } from "../../../Interfaces/searchType";
import { ActiveButton } from "../../ActiveButton";


interface OptionsProps {
  handleSelectSearch: (typeSearch: typeSearch) => void;
  typeSearch: typeSearch;
}

export function Options ({ typeSearch, handleSelectSearch }: OptionsProps) {



  return (
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
        <ActiveButton isActive={true}>
          <Button
            fontSize={["1.1rem","1.5rem"]}
            fontWeight="medium"
            _hover={{ bg: "inherit", color: "black" }}
            _focus={{

            }}
            onClick={() => handleSelectSearch("automobiles")}
          >
            Automoveis
          </Button>
        </ActiveButton>

        <Button
          fontSize={["1.1rem","1.5rem"]}
          fontWeight="medium"
          _hover={{ bg: "inherit", color: "black" }}
          _focus={{}}
          onClick={() => handleSelectSearch("trucks")}
        >
          Caminhoes
        </Button>

        <Button
          fontSize={["1.1rem","1.5rem"]}
          fontWeight="medium"
          _focus={{}}

          onClick={() => handleSelectSearch("bus")}
        >
          Onibus
        </Button>

        <Button
          fontSize={["1.1rem","1.5rem"]}
          fontWeight="medium"
          onClick={() => handleSelectSearch("vans")}
        >
          Vans
        </Button>
      </HStack>
    </Flex >
  )
}
