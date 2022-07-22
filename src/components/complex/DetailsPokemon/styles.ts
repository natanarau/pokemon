import styled from "styled-components";

export const PokemonImgLg = styled.img `
  width: 13rem;
  height: 13rem;
  top: 0;
  margin: auto;
`
export const Wc = styled.div `
  display: grid;
  position: absolute;
  right: .5rem;
  gap: .5rem;
  .MuiSvgIcon-root {
    font-size: 2.5rem;
  }
  [data-testid="MaleIcon"] {
    color: #074560;
    border: solid .2rem #074560;
    border-radius: .5rem;
  }
  [data-testid="FemaleIcon"] {
    color: #C13145;
    border: solid .2rem #C13145;
    border-radius: .5rem;
  }
`