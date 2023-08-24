import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router';
import { UserSignInput } from '../types/type';
import { isValidEmail, isValidPassword } from '../utils/utils';
import { useAuthContext } from '../hooks/useAuthContext';

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
    <div>
      <div>회원가입</div>
      <form onSubmit={signUpHandler}>
        <div>
          <label>Email</label>
          <input
            data-testid="email-input"
            name="email"
            placeholder="name@gmail.com"
            onChange={inputHandler}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            data-testid="password-input"
            name="password"
            placeholder="••••••••"
            onChange={inputHandler}
          />
        </div>
        <div></div>
        <button data-testid="signup-button" disabled={!isValid}>
          회원가입
        </button>
      </form>
      <p>
        계정이 있나요? {''}
        <button onClick={() => navigate('/signin')}>로그인하러 가기</button>
      </p>
    </div>
  );
};

export default SignUp;
