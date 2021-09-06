import React, { useState, useReducer } from 'react';

const initialState = { count: 0 };

const reducerFunc = (state, action) => {
    switch (action.type) {
        case 'increase':
            return { count: state.count + 1 };
        case 'decrease':
            return { count: state.count - 1 };
        default:
            return { state }
    }
}

export const Hooks = ({ max }) => {

    const [state, dispatch] = useReducer(reducerFunc, initialState);

    const [num, setNum] = useState(0)
    const randomNum = () => setNum(Math.floor(Math.random() * (9999 - 1000 + 1) + 1000));

    const upperLimit = () => {
        state.count !== max ? dispatch({ type: 'increase' }) : console.log('max!')
    }
    const lowerLimit = () => {
        state.count !== 0 ? dispatch({ type: 'decrease' }) : console.log('min')
    }

    return (
        <div className='hook'>
            <div>
                <h1> Counter: {
                    state.count === max ? 'limits reached!' :
                        state.count === 0 ? 'limits reached!' : state.count
                } </h1>
                <h1>passcode <br /> generator: {num} </h1>
            </div>
            <div className="btn">
                <button onClick={upperLimit} >Count Up</button>
                <button onClick={lowerLimit} >Count Down</button>
                <button onClick={randomNum} >generate</button>
            </div>

        </div>
    );
}
