import React, { useReducer } from 'react';
import { ThemeContext } from './Context';

// const theme = useContext(ThemeContext);
const initialState = { darkTheme: false };

const reducerFunc = (state, action) => {
    switch (action.type) {
        case 'light':
            return { darkTheme: false };
        case 'dark':
            return { darkTheme: true };
        default:
            return state
    }
}

export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(reducerFunc, initialState);

    return (
        <ThemeContext.Provider value={{ state: state, dispatch: dispatch }}>
            {props.children}
        </ThemeContext.Provider>
    )

};


export default ThemeProvider;