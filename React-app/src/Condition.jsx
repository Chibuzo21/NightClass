import { useState } from "react";
// conditional rendering means showing components or elements only when a condition is true
// The three basic ways of conditional rendering are : Ternary operator(?:), logical AND (&&) and if statement(outside JSX)
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
export default function Condition() {
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleError = () => {
    setError(!error);
  };
  const handlePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <section className='bg-slate-900 min-h-screen flex flex-col py-36 w-[100%]'>
      <div className=' mx-auto max-w-[30%] text-center'>
        {error && <h1 className='text-5xl text-red-600'>An Error occurred</h1>}
        <button
          onClick={handleError}
          className='bg-gray-800 cursor-pointer text-xl px-3 text-white py-2 rounded-md mt-20'>
          {error ? "Hide Error" : "Show error"}
        </button>
      </div>
      <form action='' className=' mx-auto  mt-10  '>
        <div className=' flex items-center relative'>
          <input
            type={showPassword ? "text" : "password"}
            placeholder='Enter your password'
            className='bg-gray-400 w-[30vw] py-3 px-5 rounded-md'
          />
          <span
            onClick={handlePassword}
            className=' text-2xl cursor-pointer top-1/2 -translate-y-1/2 absolute right-7'>
            {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </span>
        </div>
      </form>
    </section>
  );
}
