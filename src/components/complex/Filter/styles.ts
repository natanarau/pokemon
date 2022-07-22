import styled from "styled-components";

export const Filter = styled.div `
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  @media only screen and (max-width: 62rem) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
  @media only screen and (max-width: 42.85rem) {
    grid-template-columns: repeat(2, 1fr);
  }
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border: none;
    box-shadow: none;
    background-color: transparent;
    padding-left: 2.5rem;
  }
  .ant-select-focused:not(.ant-select-desabled).ant-select:not(.ant-select-customize-input) .ant-select-selector {
    box-shadow: none;
    border: none;
  }
  .MuiSvgIcon-root {
    margin: .5rem;
    position: absolute;
    color: #434549;
  }
  [data-testid="RefreshIcon"] {
    position: relative;
    color: #fff;
    cursor: pointer;
  }
  [data-testid="RefreshIcon"]:hover {
    opacity: 50%;
  }
`