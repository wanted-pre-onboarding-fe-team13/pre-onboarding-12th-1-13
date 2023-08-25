import { InputHTMLAttributes } from 'react';
import styled, { DefaultTheme } from 'styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary';
  testId?: string;
}

const Input = ({ inputSize, variant, testId, ...rest }: InputProps) => {
  return <StyledInput data-testid={testId} inputSize={inputSize} variant={variant} {...rest} />;
};

export default Input;

const StyledInput = styled.input<InputProps>`
  padding: 8px 16px;
  border: none;
  outline: none;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s;
  &:focus {
    border: 1px solid ${({ theme }) => theme.color.grey200};
    outline: none;
  }
  ${({ inputSize }) => {
    switch (inputSize) {
      case 'small':
        return `
          font-size: 12px;
          padding: 4px 8px;
        `;
      case 'large':
        return `
          font-size: 16px;
          padding: 12px 24px;
        `;
      default:
        return `
          font-size: 16px;
          padding: 8px 16px;
        `;
    }
  }}

  ${({ variant, theme }) => inputVariantStyles({ variant, theme })}
`;

const inputVariantStyles = ({
  variant,
  theme,
}: {
  variant?: 'primary' | 'secondary';
  theme: DefaultTheme;
}) => {
  switch (variant) {
    case 'primary':
      return `
        background-color:${theme.color.grey50};
      `;
    case 'secondary':
      return `
        border: 1px solid ${theme.color.grey200};
      `;
    default:
      return '';
  }
};
