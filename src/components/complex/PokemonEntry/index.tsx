import React from 'react'
import { Box } from 'components/simple/Box'
import { Text } from 'components/simple/Text'

type Props = {}

export default function PokemonEntry({}: Props) {
  return (
    <>
      <Box>
        <Text fontSize='1rem' textAlign='center' fontWeight={800}>POKÉDESX ENTRY</Text>
        <Text fontSize='1rem' textAlign='center' fontWeight={600}>In incididunt eleifend nullam itaque nostra, maiores libero quidem cursus dolor! Laboris! Hac! Temporibus! Neque.</Text>
      </Box>
    </>
  )
}