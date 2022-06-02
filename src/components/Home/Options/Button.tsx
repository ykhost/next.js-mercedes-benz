import { Button as ButtonChakra, ButtonProps as ButtonChakraProps } from "@chakra-ui/react";
import { typeSearch } from "../../../Interfaces/searchType";

interface ButtonProps extends ButtonChakraProps{
  handleSelectSearch: (typeSearch: typeSearch) => void

}

export function Button ({handleSelectSearch}: ButtonProps) {
  return (
    <ButtonChakra
      fontSize={["1.1rem","1.5rem"]}
      fontWeight="medium"
      _hover={{ bg: "inherit", color: "black" }}
      _focus={{

      }}
      onClick={() => handleSelectSearch("automobiles")}
    >
      Automoveis
    </ButtonChakra>
  )
}
