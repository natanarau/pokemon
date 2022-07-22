import styled from "styled-components";

type menuSideType = {
  menuSideState: boolean
}

export const listMenu = styled.li `
  display: flex;
  gap: 0.4rem;
  list-style-type: none;
  padding: 1.2rem;
  font-weight: 700;
  color: #434549;
  cursor: pointer;
  transition: 0.3s;
  &&:hover {
    opacity: 50%;
  }
`
export const UlMenu = styled.ul<menuSideType> `
  display: flex;
  align-items: center;
  @media only screen and (max-width: 62.5rem) {
    display: ${props => props.menuSideState ? 'grid' : 'none'};
    justify-items: center;
  }
`
export const MenuImg = styled.img `
  display: none;
  @media only screen and (max-width: 62.5rem) {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 2.85rem;
    margin: 1.07rem;
    cursor: pointer;
  }
`