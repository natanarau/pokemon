import React from 'react'
import { Text } from 'components/simple/Text'
import { Box } from 'components/simple/Box'
import Button from 'components/simple/Button'
import * as S from './styles'

export default function AreaInfor() {
  return (
    <>
      <S.PokemonImgMin src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg" alt='Pokemon image'/>
      <Text fontSize={10}>Nº 25</Text>
      <Text fontWeight={800} fontSize={18}>
        Pikachu
      </Text>
      <Box display='grid' justifyItems='center'>
        <Box display='flex' gridGap='.5rem'>
          <Button as='button' width='4rem' height='2rem' variant='blue'>WATER</Button>
          <Button as='button' width='4rem' height='2rem' variant='purple'>STEEL</Button>
        </Box>
      </Box>
    </>
  )
}