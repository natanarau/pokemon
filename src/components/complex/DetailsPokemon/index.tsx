import React from 'react';
import { Box } from 'components/simple/Box';
import * as S from './styles'
import { Text } from 'components/simple/Text';
import TypesPokemon from 'components/complex/TypesPokemon'
import PokemonEntry from 'components/complex/PokemonEntry'
import AbilitiesPokemon from 'components/complex/AbilitiesPokemon'
import HeightPokemon from 'components/complex/HeightPokemon'
import WeightPokemon from 'components/complex/WeightPokemon'
import BaseExpPokemon from 'components/complex/BaseExpPokemon'
import StatsPokemon from 'components/complex/StatsPokemon'
import EvolutionPokemon from 'components/complex/EvolutionPokemon'
import GrupButtons from 'components/complex/GrupButtons'
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';

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

        <TypesPokemon />

        <PokemonEntry />
        
        <AbilitiesPokemon/>

        <Box display='flex' gridGap='.5rem' width='100%'>
          <HeightPokemon />
          <WeightPokemon />
        </Box>

        <BaseExpPokemon />

        <StatsPokemon />

        <EvolutionPokemon />

        <GrupButtons />
      </Box>
    </>
  );
}