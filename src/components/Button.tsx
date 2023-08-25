import { ButtonHTMLAttributes } from 'react';
import styled, { DefaultTheme } from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'tertiary' | 'disabled';
  testId?: string;
}

type StyledButtonProps = Omit<ButtonProps, 'variant' | 'size'> & {
  $variant?: 'primary' | 'secondary' | 'tertiary' | 'disabled';
  $size?: 'small' | 'medium' | 'large';
};

const Button = ({ children, variant, testId, size, disabled = false, ...rest }: ButtonProps) => {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      data-testid={testId}
      disabled={disabled}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  border-radius: 10px;
  cursor: pointer;
  ${({ $size }) => sizeStyles[$size || 'medium']}

  ${({ $variant = 'primary', disabled, theme }) =>
    disabled
      ? variantStyles({ variant: 'disabled', theme })
      : variantStyles({ variant: $variant, theme })}
`;

const sizeStyles = {
  small: `
    font-size: 12px;
    padding: 8px 12px;
  `,
  medium: `
    font-size: 14px;
    padding: 10px 14px;
  `,
  large: `
    font-size: 16px;
    padding: 12px 16px;
  `,
};

const variantStyles = ({ theme, variant }: { theme: DefaultTheme; variant?: string }) => {
  switch (variant) {
    case 'primary':
      return `
        background-color: ${theme.color.primary};
        color: ${theme.color.fontPrimary};
      `;
    case 'secondary':
      return `
        background-color: ${theme.color.grey200};  
        color: ${theme.color.grey850};
      `;
    case 'tertiary':
      return `
        background-color: white;
        color: black;  
        border: 1px solid ${theme.color.grey200}; 
      `;
    case 'disabled':
      return `
        background-color: ${theme.color.grey100};
        color: ${theme.color.grey600}; 
        cursor: inherit;
      `;
    default:
      return '';
  }
};
