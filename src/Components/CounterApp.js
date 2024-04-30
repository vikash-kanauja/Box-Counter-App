import React, { useState, useEffect } from 'react';
import CounterBox from './CounterBox';

const CounterApp = () => {
    const [counterModal, setCounterModal] = useState([]);
    const [counterSum, setCounterSum] = useState(0);

    const addCounterModal = () => {
        setCounterModal(prev =>
            [...prev,
            {
                id: new Date().getTime(),
                value: 0,
                interValId: null,
                isCounterStart: false
            }]);
    };

    const startCounter = (counterValue) => {
        const interValRef = setInterval(() => {
            setCounterModal((prevCounter) => {
                return prevCounter.map((count) => {
                    if (count.id === counterValue.id) {
                        return { ...count, value: count.value + 1 };
                    }
                    return count;
                });
            });
        }, 1000);
        setCounterModal(
            counterModal.map((count) => {
                if (count.id === counterValue.id) {
                    return { ...count, isCounterStart: true, interValId: interValRef };
                } else {
                    return count;
                }
            })
        );

    };
    const stopCounter = (counter) => {
        clearInterval(counter.interValId);
        setCounterModal(
            counterModal.map((count) => {
                if (count.id === counter.id) {
                    return { ...count, isCounterStart: false, interValRef: null };
                } else {
                    return count;
                }
            })
        );
    };

    useEffect(() => {
        setCounterSum(counterModal.reduce((accumulator, counter) => accumulator + counter.value, 0));
    }, [counterModal]);

    return (
        <div className="bg-slate-700 min-h-screen">
            <div className="flex items-center justify-center">
                <button onClick={addCounterModal} className="w-40 p-2 m-4 rounded bg-teal-400 text-xl font-bold font-semibold">
                    Add Counter
                </button>
                <div className='bg-white p-2 m-4 rounded'><p className='text-xl font-bold'>{counterSum}</p></div>
            </div>
            <div className="flex gap-8 justify-center flex-wrap py-8 px-4 ">
                {counterModal.map((counter) => {
                    console.log(counter.id)
                    return (
                        <CounterBox
                            key={counter.id}
                            counter={counter}
                            startCounter={startCounter}
                            stopCounter={stopCounter}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default CounterApp;

