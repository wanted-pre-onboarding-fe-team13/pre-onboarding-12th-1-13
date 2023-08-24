import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router';
import { UserSignInput } from '../types/type';
import { isValidEmail, isValidPassword } from '../utils/utils';

const SignUp = () => {
  // context 가져오기
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<UserSignInput>({ email: '', password: '' });

  const isValid = isValidEmail(inputValue.email) && isValidPassword(inputValue.password);

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  // 이 함수는 provider에서 axios 쓰는지 확인해서 작성해야 할 듯
  const signUpHandler = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // try {
    //   await
    // }
  };

  return (
    <div className="mx-auto p-16 w-4/5">
      <div className=" p-2 pl-0 text-3xl ">회원가입</div>
      <form className="space-y-1" onSubmit={signUpHandler}>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
          <input
            data-testid="email-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5  "
            placeholder="name@gmail.com"
            onChange={inputHandler}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
          <input
            data-testid="password-input"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg block w-full p-2.5  "
            onChange={inputHandler}
          />
        </div>
        <div className="flex items-center justify-between"></div>
        <button
          data-testid="signup-button"
          disabled={isValid}
          className={`w-full duration-200 text-white font-semibold rounded-lg text-sm px-5 py-2.5 ${
            isValid
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-purple-400 hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-purple-300'
          }`}
        >
          회원가입
        </button>
      </form>
      <p className="pt-2 text-sm font-light text-gray-600  ">
        계정이 있나요? {''}
        <button
          onClick={() => navigate('/signin')}
          className="font-medium text-purple-600 hover:underline "
        >
          로그인하러 가기
        </button>
      </p>
    </div>
  );
};

export default SignUp;
