import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'tertiary' | 'disabled';
  testId?: string;
}

const Button = ({ children, variant, testId, size, disabled = false, ...rest }: ButtonProps) => {
  return (
    <StyledButton data-testid={testId} disabled={disabled} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<ButtonProps>`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  ${({ size }) => sizeStyles[size || 'medium']}
  ${({ variant, disabled }) =>
    disabled ? variantStyles.disabled : variantStyles[variant || 'primary']}
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

const variantStyles = {
  primary: `
    background-color:#00d681;
    color: #23274D;
  `,
  secondary: `
    background-color: gray;
    color: black;
  `,
  tertiary: `
    background-color: white;
    color: blue;
    border: 1px solid blue;
  `,
  disabled: `
    background-color: lightgray;
    color: darkgray;
    cursor: not-allowed;
  `,
};
