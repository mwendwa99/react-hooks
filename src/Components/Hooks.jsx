import React, { useState, useEffect } from 'react';


export const Hooks = ({ max }) => {

    const [count, setCount] = useState(0);

    const countUp = () => setCount(count + 1);
    const countDown = () => setCount(count - 1);

    const upperLimit = max

    if (upperLimit - count === -1) {
        setCount(upperLimit)
    }
    if (count === -1) {
        setCount(0)
    }

    useEffect(() => { document.title = count }, [count])

    return (
        <div>
            <div>
                <h1> level: {count} </h1>
                <div className="btn">
                    <button onClick={countUp} >Count Up</button>
                    <button onClick={countDown} >Count Down</button>
                </div>
            </div>
        </div>
    );
}