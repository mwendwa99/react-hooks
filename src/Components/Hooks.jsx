import React, { useState, useEffect } from 'react';
// import ''


export const Hooks = ({ max }) => {

    const [count, setCount] = useState(0);

    const [num, setNum] = useState(0)
    const randomNum = () => setNum(Math.floor(Math.random() * (9999 - 1000 + 1) + 1000));

    const countUp = () => setCount(count + 1);
    const countDown = () => setCount(count - 1);

    const upperLimit = max

    if (upperLimit - count === -1) {
        setCount(upperLimit)
    }
    if (count === -1) {
        setCount(0)
    }

    return (
        <div className='hook'>
            {/* <div> */}
            <div>
                <h1> Counter: {count} </h1>
                <h1>passcode <br /> generator: {num} </h1>
            </div>
            <div className="btn">
                <button onClick={countUp} >Count Up</button>
                <button onClick={countDown} >Count Down</button>
                <button onClick={randomNum} >generate</button>
            </div>
            {/* </div> */}

        </div>
    );
}

// export const PasscodeGenerator = () => {




//     return (
//         <div className='hook' >

//             <div>

//             </div>
//         </div>
//     )
// }
