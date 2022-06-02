import { Button as ButtonChakra, ButtonProps as ButtonChakraProps } from "@chakra-ui/react";
import { typeSearch } from "../../../Interfaces/searchType";
import { ActiveButton } from "../../ActiveButton";

interface ButtonProps extends ButtonChakraProps{
  handleSelectSearch: (typeSearch: typeSearch) => void;
  children: string;
  isActive: boolean;
  vehicleType: typeSearch;
}

export function Button ({
  handleSelectSearch,
  children,
  isActive,
  vehicleType
  }: ButtonProps) {
  return (
    <ActiveButton isActive={isActive}>
      <ButtonChakra
        fontSize={["1.1rem","1.5rem"]}
        fontWeight="medium"
        _hover={{ bg: "inherit", color: "black" }}
        _focus={{

        }}
        onClick={() => handleSelectSearch(vehicleType)}
      >
        { children }
      </ButtonChakra>
    </ActiveButton>

  )
}
