import React from 'react'
import { Box } from 'components/simple/Box'
import Button from 'components/simple/Button'

type Props = {}

export default function TypesPokemon({}: Props) {
  return (
    <>
      <Box display='grid' justifyItems='center'>
        <Box display='flex' gridGap='.5rem'>
          <Button as='button' width='4rem' height='2rem' variant='blue'>WATER</Button>
          <Button as='button' width='4rem' height='2rem' variant='purple'>STEEL</Button>
        </Box>
      </Box>
    </>
  )
}