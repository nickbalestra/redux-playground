export default function createStore(reducer, state) {
  let subscriptions= []

  const getState = () => state
  const dispatch = action => {
    state = reducer(state, action)
    subscriptions.forEach(listener => listener())
    return action
  }
  const subscribe = listener => {
    subscriptions.push(listener)
    return {
       dispose() {
         subscriptions.splice(subscriptions.indexOf(listener),1)
      }
    }
  }

  dispatch({type: 'INIT'})
  return { getState, dispatch, subscribe}
}








