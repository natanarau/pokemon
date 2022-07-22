import styled, { css } from 'styled-components';
import { switchProp, ifProp, theme } from 'styled-tools';

import { Box } from 'components/simple/Box';

export const Wrapper = styled(Box)<any>`
  cursor: pointer;
  text-align: center;
  font-size: ${theme('fontSizes.md')};
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  border: none;

  ${switchProp('variant', {
    primary: css`
      color: ${theme('colors.realWhite')};
      background-color: ${theme('colors.petroleum.100')};
    `,
    secondary: css`
      color: ${theme('colors.petroleum.100')};
      background-color: transparent;
      border: 1px solid ${theme('colors.petroleum.100')};
    `,
    ghost: css`
      border: 0;
      color: ${theme('colors.petroleum.100')};
      background-color: transparent;
    `,
    white: css`
      border: 1px solid ${theme('colors.petroleum.100')};
      color: ${theme('colors.petroleum.100')};
      background-color: #fff;
    `,
    dark: css`
      border: 0;
      color: #47c8cd;
      background-color: #000;
    `,
    green: css`
      color: #3A7426;
      background-color: #A8F083;
      border: 1px solid #82c56b;
      font-weight: 800;
      font-size: .8rem;
    `,
    blue: css`
      color: #07286A;
      background-color: #98A8FF;
      border: 1px solid #7e90b5;
      font-weight: 800;
      font-size: .8rem;
    `,
    purple: css`
      color: #463338;
      background-color: #ACABCB;
      border: 1px solid #877db5;
      font-weight: 800;
      font-size: .8rem;
    `
  })}
  ${switchProp('border', {
    round: css`
      border-radius: .4rem;
    `,
    square: css`
      border-radius: 0;
    `,
  })}
  transition: all .4s cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    opacity: 0.9;
  }
  ${ifProp(
    'disabled',
    css`
      background-color: #606060;
      opacity: 0.7;
      cursor: not-allowed;
      border-color: #606060;
      :hover {
        filter: brightness(1);
      }
    `
  )}
  ${ifProp(
    'falseDisabled',
    css`
      background-color: #606060;
      opacity: 0.7;
      border-color: #606060;
      :hover {
        filter: brightness(1);
      }
    `
  )}
`;
