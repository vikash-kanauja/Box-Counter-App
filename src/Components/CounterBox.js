import React from 'react'
import { useState,useEffect } from 'react';

const CounterBox = ({id,updateCounter}) => {
  const [isCounterStart, setIsCounterStart] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let timeinterval;
    if (isCounterStart) {
      timeinterval = setInterval(() => setCounter((prev) => prev + 1), 1000);
    }
    return () => clearInterval(timeinterval);
  }, [isCounterStart]);

  useEffect(()=> {
    updateCounter(counter, id)
  }, [counter])

  return (
    <div className='w-40 '>
      <button
        className="p-2 rounded my-4 bg-blue-100 border-2 border-slat-300 w-full text-xl font-semibold"
        onClick={() => { setIsCounterStart((prev) => !prev);}}>
        { isCounterStart ? <p>Stop Counter</p> : <p>Start Counter</p>}
      </button>
      <div className="  h-40 rounded-lg flex justify-center items-center bg-gray-200 text-4xl">
        {counter}
      </div>
    </div>
  );
}

export default CounterBox
