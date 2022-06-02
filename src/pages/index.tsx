import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useState } from 'react';
import { Header } from '../components/Header'
import { ImageBox } from '../components/Home/ImageBox';
import { Options } from '../components/Home/Options';
import { SearchBox } from '../components/Home/SearchBox';
import { typeSearch } from '../Interfaces/searchType';


const Home: NextPage = () => {
  const [typeSearch, setTypeSearch] = useState<typeSearch>("automobiles")

  const handleSelectSearch = ( typeSearch: typeSearch) => {
    setTypeSearch(typeSearch)
  }

  return (
    <Flex
      direction="column"
      h="100vh"
    >
      <Header />

      <Flex
        // w="100%"
        maxWidth={1480}
        mx="auto"
        mt={["12","20"]}
        align="center"
        px={["2","6"]}
      >
      <Flex
        direction="column"
        justifyContent="space-between"
        align="center"
      >
        <Options typeSearch={typeSearch} handleSelectSearch={handleSelectSearch}/>
        <SearchBox typeSearch={typeSearch}/>
        <ImageBox typeSearch={typeSearch} />
      </Flex>
      </Flex>
    </Flex>
  )
}

export default Home
