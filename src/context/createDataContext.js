import React, { useReducer } from 'react';

export default createDataContext = (reducer, actions, initialState) => {
    const Context = React.createContext();

    const[state, dispatch] = useReducer(reducer, initialState);

    const boundActions = {};

    for(let key in actions) {
        boundActions[key] = actions[key](dispatch);
    }

    const Provider = ({children}) => {
        return <Context.Provider value={{ state, ...boundActions }}>
            {children}
        </Context.Provider>;
    };

    return { Context, Provider };
}