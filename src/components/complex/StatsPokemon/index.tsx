import React from 'react'
import { Box } from 'components/simple/Box'
import { Text } from 'components/simple/Text'

type Props = {}

export default function StatsPokemon({}: Props) {
  return (
    <>
      <Box display='grid' width='100%'>
        <Text fontSize='1rem' textAlign='center' fontWeight={800}>STATS</Text>
        <Box display='flex' justifyContent='space-between' gridGap='.2rem'>
          <Box display='grid' justifyItems='center' bg='#F0F5FE' borderRadius='1rem' p='.3rem'>
            <Box display='flex' justifyContent='center' alignItems='center' width='1.8rem' height='1.8rem' borderRadius='50%' fontSize='.6rem' bg='#DF2140' color='#fff'>HP</Box>
            <Text fontSize='.7rem' fontWeight={700}>84</Text>
          </Box>
          <Box display='grid' justifyItems='center' bg='#F0F5FE' borderRadius='1rem' p='.3rem'>
            <Box display='flex' justifyContent='center' alignItems='center' width='1.8rem' height='1.8rem' borderRadius='50%' fontSize='.6rem' bg='#FB8E52' color='#fff'>ATK</Box>
            <Text fontSize='.7rem' fontWeight={700}>86</Text>
          </Box>
          <Box display='grid' justifyItems='center' bg='#F0F5FE' borderRadius='1rem' p='.3rem'>
            <Box display='flex' justifyContent='center' alignItems='center' width='1.8rem' height='1.8rem' borderRadius='50%' fontSize='.6rem' bg='#FEDC61' color='#fff'>DEF</Box>
            <Text fontSize='.7rem' fontWeight={700}>88</Text>
          </Box>
          <Box display='grid' justifyItems='center' bg='#F0F5FE' borderRadius='1rem' p='.3rem'>
            <Box display='flex' justifyContent='center' alignItems='center' width='1.8rem' height='1.8rem' borderRadius='50%' fontSize='.6rem' bg='#85DDFF' color='#fff'>SpA</Box>
            <Text fontSize='.7rem' fontWeight={700}>111</Text>
          </Box>
          <Box display='grid' justifyItems='center' bg='#F0F5FE' borderRadius='1rem' p='.3rem'>
            <Box display='flex' justifyContent='center' alignItems='center' width='1.8rem' height='1.8rem' borderRadius='50%' fontSize='.6rem' bg='#A8EF8C' color='#fff'>SpD</Box>
            <Text fontSize='.7rem' fontWeight={700}>101</Text>
          </Box>
          <Box display='grid' justifyItems='center' bg='#F0F5FE' borderRadius='1rem' p='.3rem'>
            <Box display='flex' justifyContent='center' alignItems='center' width='1.8rem' height='1.8rem' borderRadius='50%' fontSize='.6rem' bg='#FB94A8' color='#fff'>SPD</Box>
            <Text fontSize='.7rem' fontWeight={700}>60</Text>
          </Box>
          <Box display='grid' justifyItems='center' bg='#98BAFF' borderRadius='1rem' p='.3rem'>
            <Box display='flex' justifyContent='center' alignItems='center' width='1.8rem' height='1.8rem' borderRadius='50%' fontSize='.6rem' bg='#7195DC' color='#fff'>TOT</Box>
            <Text fontSize='.7rem' fontWeight={700}>530</Text>
          </Box>
        </Box>
      </Box>
    </>
  )
}