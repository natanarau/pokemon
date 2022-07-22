import React from 'react'
import { Box } from 'components/simple/Box'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

type Props = {}

export default function GrupButtons({}: Props) {
  return (
    <>
      <Box display='flex' width='100%' justifyContent='space-between' bg='#EFF0F5' p='1rem' borderRadius='1rem'>
        <Box as='button' color='#505050' border='none' display='flex'><KeyboardArrowLeftIcon/> Prinplup #24</Box>
        <Box borderLeft='solid .1rem #505050'/>
        <Box as='button' color='#505050' border='none' display='flex'> #26 Starly <KeyboardArrowRightIcon/></Box>
      </Box>
    </>
  )
}