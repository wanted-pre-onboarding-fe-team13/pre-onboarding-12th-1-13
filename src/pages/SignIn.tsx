import { useNavigate } from 'react-router';
import { useAuthContext } from '../hooks/useAuthContext';
import { isValidEmail, isValidPassword } from '../utils/auth';
import { ChangeEvent, useState } from 'react';
import { UserSignInput } from '../types/type';
import Input from '../components/Input';
import Button from '../components/Button';
import { styled } from 'styled-components';

const SignIn = () => {
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const [inputData, setInputData] = useState<UserSignInput>({ email: '', password: '' });

  const isValid = isValidEmail(inputData.email) && isValidPassword(inputData.password);

  const handleInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: ChangeEvent<HTMLFormElement>) => {
    if (!isValid) return;
    e.preventDefault();
    try {
      await login(inputData.email, inputData.password);
    } catch (e) {
      console.error(e);
    }
  };

  const goToSignUp = () => {
    navigate('/signup');
  };

  return (
    <Container>
      <Title>Sign In</Title>
      <Form onSubmit={handleLogin}>
        <InputContainer>
          <Input
            testId="email-input"
            name="email"
            placeholder="you@example.com"
            onChange={handleInputValueChange}
            variant="primary"
            inputSize="large"
          />
          <Input
            testId="password-input"
            name="password"
            type="password"
            placeholder="Minimum 8 characters"
            variant="primary"
            inputSize="large"
            onChange={handleInputValueChange}
          />
        </InputContainer>
        <Button testId="signin-button" type="submit" size={'large'} disabled={!isValid}>
          로그인
        </Button>
      </Form>
      <Paragraph>
        계정이 없나요?
        <TextButton onClick={goToSignUp}>회원 가입하러 가기</TextButton>
      </Paragraph>
    </Container>
  );
};

export default SignIn;

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
  position: relative;
  top: -2px;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: #2af0a3;
    text-decoration: none;
  }
`;
