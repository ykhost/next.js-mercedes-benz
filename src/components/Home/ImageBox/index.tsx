import { Flex, Image } from "@chakra-ui/react";
import { typeSearch } from "../../../Interfaces/searchType";

interface ImageProps {
  typeSearch: typeSearch
}

const ImagesVeich = [
  {
    type:"automobiles",
    urlImg: "https://www.motortrend.com/uploads/sites/10/2022/02/2022-mercedes-benz-cla-coupe-250-4wd-sedan-angular-front.png",
    alt: "Car Mercedes Benz CL 22"
  },
  {
    type:"trucks",
    urlImg: "https://cmsgab.com.br/public/uploads/vmmercedes/202002051580908734_amg/c031055f5237a9ce1401bef254ecc95d.png",
    alt: "Car Mercedes Benz CL 22"

  },
  {
    type:"bus",
    urlImg: "https://production.autoforce.com/uploads/version/profile_image/6992/comprar-onibus-urbano_96faf48c00.png",
    alt: "Car Mercedes Benz CL 22"

  },
  {
    type:"vans",
    urlImg: "https://berlin-limo.com/images/vehicles/mercedes-benz-sprinter-vip.png",
    alt: "Car Mercedes Benz CL 22"

  },
]


export function ImageBox({ typeSearch }: ImageProps ) {
  const showImage = ImagesVeich.find(veich => veich.type === typeSearch);

  return (
    <Flex
      width="100%"
      maxH="35rem"
      mt={["5rem"]}
    >
      <Image
        src={showImage?.urlImg}
        alt={showImage?.alt}
        objectFit="scale-down"
      />
    </Flex>
  )
}
