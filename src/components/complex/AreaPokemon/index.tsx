import React from 'react';
import * as S from './styles';
import { Box } from 'components/simple/Box';
import { Text } from 'components/simple/Text';
import Button from 'components/simple/Button';
import AreaInfor from 'components/complex/AreaInfor';

type Props = {};

export default function AreaPokemon({}: Props) {
  return (
    <>
      <Box height="13rem" width="100%" maxWidth='17rem' display="grid" alignItems="end" position="relative">
        <Box
          display="grid"
          gridTemplateRows="2fr 1fr 1fr"
          alignItems="end"
          justifyItems="center"
          bg="#fff"
          width="100%"
          minHeight="10rem"
          boxShadow="0rem .28rem 1.07rem #dfdfdf"
          borderRadius=".71rem"
          padding="1rem"
        >
          <AreaInfor/>
        </Box>
      </Box>
      <Box height="13rem" width="100%" maxWidth='17rem' display="grid" alignItems="end" position="relative">
        <Box
          display="grid"
          gridTemplateRows="2fr 1fr 1fr"
          alignItems="end"
          justifyItems="center"
          bg="#fff"
          width="100%"
          minHeight="10rem"
          boxShadow="0rem .28rem 1.07rem #dfdfdf"
          borderRadius=".71rem"
          padding="1rem"
        >
          <AreaInfor/>
        </Box>
      </Box>
      <Box height="13rem" width="100%" maxWidth='17rem' display="grid" alignItems="end" position="relative">
        <Box
          display="grid"
          gridTemplateRows="2fr 1fr 1fr"
          alignItems="end"
          justifyItems="center"
          bg="#fff"
          width="100%"
          minHeight="10rem"
          boxShadow="0rem .28rem 1.07rem #dfdfdf"
          borderRadius=".71rem"
          padding="1rem"
        >
          <AreaInfor/>
        </Box>
      </Box>
      <Box height="13rem" width="100%" maxWidth='17rem' display="grid" alignItems="end" position="relative">
        <Box
          display="grid"
          gridTemplateRows="2fr 1fr 1fr"
          alignItems="end"
          justifyItems="center"
          bg="#fff"
          width="100%"
          minHeight="10rem"
          boxShadow="0rem .28rem 1.07rem #dfdfdf"
          borderRadius=".71rem"
          padding="1rem"
        >
          <AreaInfor/>
        </Box>
      </Box>
    </>
  );
}
