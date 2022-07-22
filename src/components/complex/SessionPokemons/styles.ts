import styled from "styled-components";

export const SessionPokemon = styled.div `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 1rem;
  @media only screen and (max-width: 62.5rem)  {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 22rem) {
    grid-template-columns: repeat(1, 1fr);
  }
`