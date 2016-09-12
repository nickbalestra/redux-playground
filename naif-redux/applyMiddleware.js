export default function applyMiddleware(middleware) {
  return createStore => 
    (reducer, initialState) => {
      const store = createStore(reducer, initialState);
      const dispatch = store.dispatch;
      const getState = store.getState;

      const injectedMIddleware = middleware({ dispatch, getState });
      const enhancedDispatch = injectedMIddleware(dispatch);

    return Object.assign({}, store, { dispatch:enhancedDispatch });
  }
}