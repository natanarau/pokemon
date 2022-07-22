import styled from "styled-components";

export const Main = styled.main `
  display: grid;
  grid-template-areas: 'session session details';
  gap: 1rem;
  align-items: start;
  @media only screen and (max-width: 35rem){
    grid-template-areas: none;
    [data-id="session"], [data-id="details"] {
      grid-area: auto;
    }
  }
`