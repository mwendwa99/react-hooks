import React, { useState, useEffect } from 'react';
// import ''


export const Hooks = ({ max }) => {

    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0)

    const countUp = () => setCount(count + 1);
    const countDown = () => setCount(count - 1);
    const randomNum = () => setNum(Math.floor(Math.random() * (9999 - 1000 + 1) + 1000));

    const upperLimit = max

    if (upperLimit - count === -1) {
        setCount(upperLimit)
    }
    if (count === -1) {
        setCount(0)
    }

    return (
        <div className='hooks'>
            <div>
                <h1> level: {count} </h1>
                <div className="btn">
                    <button onClick={countUp} >Count Up</button>
                    <button onClick={countDown} >Count Down</button>
                </div>
            </div>
            <div>
                <h1>passcode generator: {num} </h1>
                <button onClick={randomNum} >generate</button>
            </div>
        </div>
    );
}
