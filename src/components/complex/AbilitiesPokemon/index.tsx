import React from 'react'
import { Box } from 'components/simple/Box'
import { Text } from 'components/simple/Text'

type Props = {}

export default function AbilitiesPokemon({}: Props) {
  return (
    <>
      <Box display='grid' gridGap='.5rem' width='100%'>
        <Text fontSize='1rem' textAlign='center' fontWeight={800}>ABILITIES</Text>
        <Box display='flex' gridGap='.5rem' width='100%'>
          <Box border='solid .1rem #6E84AF' bg='#F6F8FC' borderRadius='1rem' width='100%' padding='.4rem'>
            <Text textAlign='center' fontWeight={600}>Torrent</Text>
          </Box>
          <Box border='solid .1rem #6E84AF' bg='#F6F8FC' borderRadius='1rem' width='100%' padding='.4rem'>
            <Text textAlign='center' fontWeight={600}>Defiant</Text>
          </Box>
        </Box>
      </Box>
    </>
  )
}