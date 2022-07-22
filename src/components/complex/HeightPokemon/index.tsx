import React from 'react'
import { Box } from 'components/simple/Box'
import { Text } from 'components/simple/Text'

type Props = {}

export default function HeightPokemon({}: Props) {
  return (
    <>
      <Box width='100%'>
        <Text fontSize='1rem' textAlign='center' fontWeight={800}>HEIGHT</Text>
        <Box bg='#F6F8FC' borderRadius='1rem' padding='.4rem'>
          <Text textAlign='center' fontWeight={600}>1.7m</Text>
        </Box>
      </Box>
    </>
  )
}