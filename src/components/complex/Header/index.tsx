import React from 'react'
import { Box } from 'components/simple/Box'
import { menuList } from './listMenu.tabs'
import * as S from './styles'
import Link from 'next/link'

export default function Header() {
  const [menuSide, setMenuSide] = React.useState(false)
  
  return (
    <>
      <Box 
        borderRadius={10} 
        minHeight={20}
        height='100%' 
        bg='#fff' 
        width={'100%'} 
        boxShadow='0px 4px 15px #dfdfdf' 
        display='flex' 
        alignItem='center'
        justifyContent='center' 
        position='relative'
      >
        <S.MenuImg src='../images/menu.png' onClick={() => setMenuSide(!menuSide)}/>
        <S.UlMenu menuSideState={menuSide}>
          {menuList.map(item => 
            <>
              <S.listMenu key={item.page}>
                {item.icon}
                <Link href={`/${item.page}`}>{item.label}</Link>
              </S.listMenu>
            </>  
          )}
        </S.UlMenu>
      </Box>
    </>
  )
}