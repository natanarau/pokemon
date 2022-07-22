import React from 'react'
import { Container, ContainerType } from 'components/simple/Container'
import HomePage from 'pages/'

type LayoutType = ContainerType 

export default function Layout({children}: LayoutType) {
  return (
    <>
      <Container p={2} maxWidth={900} display="grid" gridGap={5}>
        {children}
      </Container>
    </>
  )
}