import React from 'react';
import { Box } from 'components/simple/Box';
import * as S from './styles'
import { Text } from 'components/simple/Text';
import Button from 'components/simple/Button';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

type Props = {};

export default function DetailsPokemon({}: Props) {
  return (
    <>
      <Box
        display="grid"
        alignItems="end"
        justifyItems="center"
        bg="#fff"
        width='100%'
        boxShadow="0rem .28rem 1.07rem #dfdfdf"
        borderRadius=".71rem"
        padding="1rem"
        mt='7rem'
        pt='7rem'
        gridGap='1rem'
      >
        <Box display='flex' alignItems='flex-end' position='absolute' top={0} width='100%'>
          <S.PokemonImgLg src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg' alt='Pokemon image'/>
          <S.Wc>
            <MaleIcon/>
            <FemaleIcon/>
          </S.Wc>
        </Box>

        <Box>
          <Text textAlign='center'># 25</Text>
          <Text fontSize='2rem' textAlign='center' fontWeight={800}>Pikachu</Text>
          <Text fontSize='1rem' textAlign='center' fontWeight={200}>Emperor Pokemon</Text>
        </Box>

        <Box display='grid' justifyItems='center'>
          <Box display='flex' gridGap='.5rem'>
            <Button as='button' width='4rem' height='2rem' variant='blue'>WATER</Button>
            <Button as='button' width='4rem' height='2rem' variant='purple'>STEEL</Button>
          </Box>
        </Box>
       
        <Box>
          <Text fontSize='1rem' textAlign='center' fontWeight={800}>POKÉDESX ENTRY</Text>
          <Text fontSize='1rem' textAlign='center' fontWeight={600}>In incididunt eleifend nullam itaque nostra, maiores libero quidem cursus dolor! Laboris! Hac! Temporibus! Neque.</Text>
        </Box>

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

        <Box display='flex' gridGap='.5rem' width='100%'>
          <Box width='100%'>
            <Text fontSize='1rem' textAlign='center' fontWeight={800}>HEIGHT</Text>
            <Box bg='#F6F8FC' borderRadius='1rem' padding='.4rem'>
              <Text textAlign='center' fontWeight={600}>1.7m</Text>
            </Box>
          </Box>
          <Box width='100%'>
            <Text fontSize='1rem' textAlign='center' fontWeight={800}>WEIGHT</Text>
            <Box bg='#F6F8FC' borderRadius='1rem' padding='.4rem'>
              <Text textAlign='center' fontWeight={600}>84.5Kg</Text>
            </Box>
          </Box>
        </Box>

        <Box display='flex' gridGap='.5rem' width='100%'>
          <Box width='100%'>
            <Text fontSize='1rem' textAlign='center' fontWeight={800}>WEAKNESSES</Text>
            <Box bg='#F6F8FC' borderRadius='1rem' padding='.4rem'>
              <Text textAlign='center' fontWeight={600}>...</Text>
            </Box>
          </Box>
          <Box width='100%'>
            <Text fontSize='1rem' textAlign='center' fontWeight={800}>BASE EXP</Text>
            <Box bg='#F6F8FC' borderRadius='1rem' padding='.4rem'>
              <Text textAlign='center' fontWeight={600}>239</Text>
            </Box>
          </Box>
        </Box>

        <Box display='grid' width='100%'>
          <Text fontSize='1rem' textAlign='center' fontWeight={800}>BASE EXP</Text>
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

        <Box display='flex' width='100%' justifyContent='space-between' bg='#EFF0F5' p='1rem' borderRadius='1rem'>
          <Box as='button' color='#505050' border='none' display='flex'><KeyboardArrowLeftIcon/> Prinplup #24</Box>
          <Box borderLeft='solid .1rem #505050'/>
          <Box as='button' color='#505050' border='none' display='flex'> #26 Starly <KeyboardArrowRightIcon/></Box>
        </Box>
      </Box>
    </>
  );
}