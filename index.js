function createStore(reducer, state = {}) {
	let listeners = []

	const getState = () => state

	const dispatch = action => {
		state = reducer(state, action)
		return action
	}
	
	const subscribe = listener => {
		listeners.push(listener)
		return {
			 dispose() {
				 listeners.splice(listeners.indexOf(listener),1)
			}
		}
	}

	dispatch({type: 'INIT'})
	return { getState, dispatch, subscribe}
}

// # add subscribe/unsubscribe mechanism 
// # add middleares support
// # add react bindings (connect, mapStateToProps, ...)









