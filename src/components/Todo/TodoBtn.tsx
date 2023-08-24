import { styled } from 'styled-components';

interface Props {
  variant?: 'plus' | 'close';
  onClick: () => void;
}

export const TodoBtn = ({ variant = 'plus', onClick, ...rest }: Props) => {
  return (
    <BtnContainer onClick={onClick} {...rest}>
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
      </svg>
    </BtnContainer>
  );
};

const BtnContainer = styled.div<Props>`
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 99px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.fontPrimary};
  cursor: pointer;

  svg {
    fill: white;
    width: 20px;
    height: 20px;
  }
`;
