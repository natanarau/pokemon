import { BoxProps } from 'components/simple/Box';
import { LoadingIcon } from 'components/simple/LoadingIcon';

import * as S from './styles';

export type ButtonProps = BoxProps & {
  variant?: 'primary' | 'secondary' | 'ghost' | 'white' | 'green' | 'dark' | 'blue' | 'purple';
  border?: 'round' | 'square';
  children: React.ReactNode;
  as?: 'a' | 'button';
  onClick?: () => void;
  disabled?: boolean | any;
  falseDisabled?: boolean | any;
  loading?: boolean;
};

const Button = ({
  variant = 'primary',
  border = 'round',
  loading,
  children,
  ...rest
}: ButtonProps) => (
  <S.Wrapper data-testid="Button" {...rest} border={border} variant={variant}>
    {loading ? <LoadingIcon /> : children}
  </S.Wrapper>
);

export default Button;
