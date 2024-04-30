import React from 'react'
import { useState, useEffect } from 'react';
import CounterBox from './CounterBox'
const CounterApp = () => {
    const [counterBoxes, setCountersBoxes] = useState([]);
    const [counterSum, setCounterSum] = useState(0);
    const addCounterBox = () => {
        setCountersBoxes((pre) => {
            return [...pre, { id: Date.now(), value: 0 }];
        });
    };

    const updateCounter = (value, id) => {
        setCountersBoxes((prevCounters) =>
            prevCounters.map((counter) =>
                counter.id === id ? { ...counter, value: value } : counter
            )
        );
    };
    useEffect(() => {
        setCounterSum(counterBoxes.reduce((accumulator, counter) => accumulator + counter.value, 0));
    }, [counterBoxes]);

    return (
        <div className="bg-slate-700 min-h-screen">
            <div className="flex items-center justify-center">
                <button onClick={addCounterBox} className = " w-40 p-2 m-4 rounded bg-teal-400 text-xl font-bold	font-semibold">
                    Add Counter
                </button>
                <div className='bg-white p-2 m-4 rounded '><p className = 'text-xl font-bold'>{counterSum}</p></div>
            </div>
            <div className="flex gap-8 justify-center flex-wrap py-8 px-4 ">
                {counterBoxes.map((count) => {
                    return (
                        <CounterBox key={count.id} id={count.id} updateCounter={updateCounter} />
                    );
                })}
            </div>
        </div>
    );
}

export default CounterApp
