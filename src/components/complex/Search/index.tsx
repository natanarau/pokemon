import React from 'react'
import * as S from './styles'
import { Form, Input, Button } from 'antd'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

export default function Search() {
  return (
    <>
      <S.FormSearch>
        <Form>
          <Form.Item>
              <Input placeholder='Search your Pokèmon!'/>
          </Form.Item>
          <Form.Item>
            <Button><CatchingPokemonIcon fontSize='large'/></Button>
          </Form.Item>
        </Form>
      </S.FormSearch>
    </>
  )
}