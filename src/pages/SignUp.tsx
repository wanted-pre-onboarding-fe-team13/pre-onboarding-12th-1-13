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

  return (
    <Container>
      <Title>Sign Up</Title>
      <Form onSubmit={signUpHandler}>
        <InputContainer>
          <Input
            testId="email-input"
            inputSize="large"
            name="email"
            variant="primary"
            placeholder="you@example.com"
            onChange={inputHandler}
          />
          <Input
            testId="password-input"
            type="password"
            inputSize="large"
            name="password"
            variant="primary"
            placeholder="Minimum 8 characters"
            onChange={inputHandler}
          />
        </InputContainer>
        <ButtonContainer>
          <Button testId="signup-button" size="large" variant="primary" disabled={!isValid}>
            회원가입
          </Button>
        </ButtonContainer>
      </Form>
      <Paragraph>
        계정이 있나요? {''}
        <button onClick={() => navigate('/signin')}>로그인하러 가기</button>
      </Paragraph>
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  align-items: flex;
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

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Form = styled.form`
  flex: 1;
  padding-top: 56px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const Paragraph = styled.p``;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
