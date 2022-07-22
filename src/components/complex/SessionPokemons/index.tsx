import React from 'react'
import AreaPokemon from 'components/complex/AreaPokemon'
import * as S from './styles'

type Props = {}

export default function SessionPokemons({}: Props) {
  return (
    <>
      <S.SessionPokemon>
        <AreaPokemon/>
      </S.SessionPokemon>
    </>
  )
}