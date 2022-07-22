import React from 'react'
import { Box } from 'components/simple/Box'
import { Text } from 'components/simple/Text'

type Props = {}

export default function BaseExpPokemon({}: Props) {
  return (
    <>
      <Box width='100%'>
        <Text fontSize='1rem' textAlign='center' fontWeight={800}>BASE EXP</Text>
        <Box bg='#F6F8FC' borderRadius='1rem' padding='.4rem'>
          <Text textAlign='center' fontWeight={600}>239</Text>
        </Box>
      </Box>
    </>
  )
}