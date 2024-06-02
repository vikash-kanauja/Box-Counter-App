const CounterBox = ({ counter, startCounter, stopCounter }) => {
    return (
        <div className='w-40'>
            <button
                className="p-2 rounded my-4 bg-blue-100 border-2 border-slat-300 w-full text-xl font-semibold"
                onClick={() => counter.isCounterStart ? stopCounter(counter) : startCounter(counter)}>
                {counter.isCounterStart ? <p>Stop Counter</p> : <p>Start Counter</p>}
            </button>
            <div className="h-40 rounded-lg flex justify-center items-center bg-gray-200 text-4xl">
                <p> {counter.value}</p>
            </div>
        </div>
    );
}

export default CounterBox;
