import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router';
import { UserSignInput } from '../types/type';
import { isValidEmail, isValidPassword } from '../utils/auth';
import { useAuthContext } from '../hooks/useAuthContext';
import { styled } from 'styled-components';
import Button from '../components/Button';
import Input from '../components/Input';

const SignUp = () => {
  const { regist } = useAuthContext();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<UserSignInput>({ email: '', password: '' });

  const isValid = isValidEmail(inputValue.email) && isValidPassword(inputValue.password);

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const signUpHandler = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await regist(inputValue.email, inputValue.password);
      navigate('/signin');
    } catch (error) {
      console.error(error);
    }
  };

  const goToSignIn = () => {
    navigate('/signin');
  };

  return (
    <Container>
      <Title>Sign Up</Title>
      <Form onSubmit={signUpHandler}>
        <InputContainer>
          <Input
            testId="email-input"
            name="email"
            placeholder="you@example.com"
            onChange={inputHandler}
            variant="primary"
            inputSize="large"
          />
          <Input
            testId="password-input"
            name="password"
            type="password"
            placeholder="Minimum 8 characters"
            inputSize="large"
            variant="primary"
            onChange={inputHandler}
          />
        </InputContainer>
        <Button testId="signup-button" size="large" disabled={!isValid}>
          회원가입
        </Button>
      </Form>
      <Paragraph>
        계정이 있나요?
        <TextButton onClick={goToSignIn}>로그인하러 가기</TextButton>
      </Paragraph>
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  width: 300px;
  height: 600px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 48px;
  text-align: center;
  padding-top: 24px;
`;

const Form = styled.form`
  flex: 1;
  padding-top: 56px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Paragraph = styled.div`
  display: flex;
  text-align: center;
`;

const TextButton = styled.button`
  background: none;
  border: none;
  font-size: inherit;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: #2af0a3;
    text-decoration: none;
  }
`;
