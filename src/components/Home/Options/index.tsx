import { Flex, HStack } from "@chakra-ui/react";
import { typeSearch } from "../../../Interfaces/searchType";
import { Button } from "./Button";



interface OptionsProps {
  handleSelectSearch: (typeSearch: typeSearch) => void;
  typeSearch: typeSearch;
}

interface ButtonProps {
  name: string;
  vehicleType: typeSearch;
  isActive: boolean
}

const buttons: ButtonProps[] = [
  { name: "Automoveis",
    vehicleType: "automobiles",
    isActive: false
  },
  { name: "Caminhoes",
    vehicleType: "trucks",
    isActive: false
  },
  { name: "Onibus",
    vehicleType: "bus",
    isActive: false
  },
  { name: "Vans",
    vehicleType: "vans",
    isActive: false
  },
]

export function Options ({ typeSearch, handleSelectSearch }: OptionsProps) {

  const showButtons = buttons.map(button => {
    if (typeSearch === button.vehicleType) {
      return {
        ...button,
        isActive: true
      }
    }
    return button
  })

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

        {showButtons.map(button => (
          <Button
            key={button.name}
            handleSelectSearch={handleSelectSearch}
            isActive={button.isActive}
            vehicleType={button.vehicleType}
          >
            {button.name}
          </Button>
        ))}

      </HStack>
    </Flex >
  )
}
