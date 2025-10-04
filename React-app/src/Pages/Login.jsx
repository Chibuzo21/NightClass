import React from "react";

export default function Login() {
  return (
    <form
      action=''
      className='flex flex-col justify-center text-white items-center bg-blue-700 min-h-screen'>
      <h1 className='text-3xl mb-8'>Login page</h1>
      <div>
        <label htmlFor='' className='block text-xl my-2'>
          Username
        </label>
        <input
          type='text'
          className='w-[30vw] bg-white border-none py-2 rounded-md'
        />
      </div>
    </form>
  );
}
