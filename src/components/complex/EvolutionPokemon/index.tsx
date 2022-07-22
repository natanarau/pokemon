import React from 'react'
import { Box } from 'components/simple/Box'
import { Text } from 'components/simple/Text'

type Props = {}

export default function EvolutionPokemon({}: Props) {
  return (
    <>
      <Box display='grid' width='100%' >
        <Text fontSize='1rem' textAlign='center' fontWeight={800}>EVOLUTION</Text>
        <Box display='grid' gridTemplateColumns='repeat(5, 1fr)' alignItems='center' justifyItems='center'>
          <Box as='img' width='3rem' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg' alt='Image Pokemon Evolution'/>
          <Text p='.3rem' borderRadius='1rem' bg='#F6F8FC'>Lvl 16</Text>
          <Box as='img' width='3rem' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg' alt='Image Pokemon Evolution'/>
          <Text p='.3rem' borderRadius='1rem' bg='#F6F8FC'>Lvl 36</Text>
          <Box as='img' width='3rem' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg' alt='Image Pokemon Evolution'/>
        </Box>
      </Box>
    </>
  )
}