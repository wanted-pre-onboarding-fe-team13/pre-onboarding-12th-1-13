import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router';
import { UserSignInput } from '../types/type';
import { isValidEmail, isValidPassword } from '../utils/utils';
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
      <div>Sign Up</div>
      <Form onSubmit={signUpHandler}>
        <Input
          testId="email-input"
          inputSize="medium"
          name="email"
          variant="primary"
          placeholder="name@gmail.com"
          onChange={inputHandler}
        />
        <Input
          testId="password-input"
          inputSize="medium"
          name="password"
          placeholder="••••••••"
          onChange={inputHandler}
        />
        <Button testId="signup-button" variant="primary" size="medium" disabled={!isValid}>
          회원가입
        </Button>
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
  align-items: flex-start;
  padding: 25px;
  width: 40vw;
  height: 60vh;
  min-width: 200px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Paragraph = styled.p``;
