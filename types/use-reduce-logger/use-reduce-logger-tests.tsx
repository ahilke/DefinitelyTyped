import React, { useReducer } from 'react';
import logger from 'use-reducer-logger';

interface ExampleState {
    readonly count: number;
}

enum ExampleActionType {
    increment = 'increment',
    decrement = 'decrement',
}

interface ExampleAction {
    readonly type: ExampleActionType;
    readonly value: number;
}

function exampleReducer(state: ExampleState, action: ExampleAction): ExampleState {
    switch (action.type) {
        case ExampleActionType.increment:
            return {
                count: state.count + action.value,
            };
        case ExampleActionType.decrement:
            return {
                count: state.count - action.value,
            }
    }
}

function ExampleComponent() {
    const [state, dispatch] = useReducer(logger(exampleReducer), {
        count: 0,
    });

    return <div>{state.count}</div>;
}



