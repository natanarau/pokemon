import React from 'react'
import * as S from './styles'

type MainProps = {
  children: React.ReactNode
}

export default function Main({children}: MainProps) {
  return (
    <>
      <S.Main>
        {children}
      </S.Main>
    </>
  )
}