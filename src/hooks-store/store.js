//Using Hooks as alternative for REDUX & ReactContext API

import { useState, useEffect } from 'react';

let globalState = {};
let listeners = [];
let actions = {};

//Custom Hooks for state management - plain JS/React code
export const useStore = (shouldListen = true) => {
    const setState = useState(globalState)[1]; // Only looking for the set function to update the state details
    
    const dispatch = (actionIdentifier, payload) => {
        const newState = actions[actionIdentifier](globalState, payload);

        globalState = {...globalState, ...newState};

        for(const listener of listeners) {
            listener(globalState);
        }
    };

    useEffect(() => {
        if(shouldListen) {
            listeners.push(setState);
        }

        return () => {
            if(shouldListen) {
                listeners = listeners.filter(li => li !== setState);
            }
        };
    },[setState, shouldListen]);

    return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
    if(initialState) {
        globalState = {...globalState, ...initialState};
    }

    actions = {...actions, ...userActions};
};