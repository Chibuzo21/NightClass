import { useState } from "react";
// React hooks are functions that let you "hook into" React state and lifecycle features like state, context etc from function components. They are include : useState, useEffect, useRef, useContext, useReducer,useCallback etc
// useState is the react hook for handling states in functional components.
// State are used to store data which react watches and can change overtime.
// States can be triggered by events which cause re-rendering of the component
export default function State() {
  const [count, setCount] = useState(0);
  const [style, setStyle] = useState("bg-blue-500");
  // the first variable which in this case is count, stores the current State value, the second variable ie setCount is a function that changes the state value.
  const handleClick = () => {
    setCount(count + 1);
    setStyle("bg-orange-500");
    // setCount((prev) => prev + 1);
  };
  return (
    <div
      className={`flex justify-center items-center flex-col h-96 gap-4 ${style}`}>
      <p className='text-4xl'>{count}</p>
      <button
        onClick={handleClick}
        className='bg-slate-900 text-white px-4 py-2'>
        Add
      </button>
    </div>
  );
}
