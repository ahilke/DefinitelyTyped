declare module 'use-reducer-logger' {
    type Reducer<State, Action> = (state: State, action: Action) => State;
    const logger: <R extends Reducer<any, any>>(reducer: R) => R;
    export default logger;
}
