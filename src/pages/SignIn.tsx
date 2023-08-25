import { useNavigate } from 'react-router';
import { useAuthContext } from '../hooks/useAuthContext';
import { isValidEmail, isValidPassword } from '../utils/utils';
import { ChangeEvent, useState } from 'react';
import { UserSignInput } from '../types/type';
import Input from '../components/Input';
import Button from '../components/Button';
import { styled } from 'styled-components';

const SignIn = () => {
  const { login } = useAuthContext();

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
  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <Input
          testId="email-input"
          name="email"
          placeholder="email"
          onChange={handleInputValueChange}
          variant="primary"
          inputSize="medium"
        />
        <Input
          testId="password-input"
          name="password"
          type="password"
          placeholder="password"
          onChange={handleInputValueChange}
        />
        <Button type="submit">로그인</Button>
      </Form>
    </Container>
  );
};

export default SignIn;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 600px;
  background-color: white;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
