import React from 'react'
import { Select } from 'antd'
import * as S from './styles'
import { Box } from 'components/simple/Box';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import RefreshIcon from '@mui/icons-material/Refresh';
import AdjustRoundedIcon from '@mui/icons-material/AdjustRounded';
import HdrWeakRoundedIcon from '@mui/icons-material/HdrWeakRounded';
import HeightRoundedIcon from '@mui/icons-material/HeightRounded';
import ScaleRoundedIcon from '@mui/icons-material/ScaleRounded';

export default function Filter() {
  const { Option } = Select;
  return (
    <>
      <S.Filter>
        <Box bg='#fff' boxShadow='0rem 0.28rem 1.07rem #dfdfdf' borderRadius={7} display='flex' position='relative' alignItems='center'>
          <AdjustRoundedIcon/>
          <Select defaultValue="Type">
            <Option>1</Option>
            <Option>2</Option>
          </Select>
        </Box>
        <Box bg='#fff' boxShadow='0rem 0.28rem 1.07rem #dfdfdf' borderRadius={7} display='flex' position='relative' alignItems='center'>
          <HdrWeakRoundedIcon/>
          <Select defaultValue="Weaknesses">
            <Option>1</Option>
            <Option>2</Option>
          </Select>
        </Box>
        <Box bg='#fff' boxShadow='0rem 0.28rem 1.07rem #dfdfdf' borderRadius={7} display='flex' position='relative' alignItems='center'>
          <CatchingPokemonIcon/>
          <Select defaultValue="Ability">
            <Option>1</Option>
            <Option>2</Option>
          </Select>
        </Box>
        <Box bg='#fff' boxShadow='0rem 0.28rem 1.07rem #dfdfdf' borderRadius={7} display='flex' position='relative' alignItems='center'>
          <HeightRoundedIcon/>
          <Select defaultValue="Height">
            <Option>1</Option>
            <Option>2</Option>
          </Select>
        </Box>
        <Box bg='#fff' boxShadow='0rem 0.28rem 1.07rem #dfdfdf' borderRadius={7} display='flex' position='relative' alignItems='center'>
          <ScaleRoundedIcon/>
          <Select defaultValue="Weight">
            <Option>1</Option>
            <Option>2</Option>
          </Select>
        </Box>
        <Box bg='#8994A5' boxShadow='0rem 0.28rem 1.07rem #dfdfdf' borderRadius={7} display='flex' position='relative' justifyContent='center' alignItems='center'>
          <RefreshIcon/>
        </Box>
      </S.Filter>
    </>
  )
}