import { useState } from "react";
// conditional rendering means showing components or elements only when a condition is true
// The three basic ways of conditional rendering are : Ternary operator(?:), logical AND (&&) and if statement(outside JSX)
export default function Condition() {
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(!error);
  };

  return (
    <section className='bg-slate-900 min-h-screen py-36'>
      <div className=' mx-auto max-w-[30%] text-center'>
        {error && <h1 className='text-5xl text-red-600'>An Error occurred</h1>}
        <button
          onClick={handleError}
          className='bg-gray-800 cursor-pointer text-xl px-3 text-white py-2 rounded-md mt-20'>
          {error ? "Hide Error" : "Show error"}
        </button>
      </div>
    </section>
  );
}
