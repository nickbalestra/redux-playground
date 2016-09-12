export default function createLoggingMiddleware({ getState }) {
  return dispatch => 
    action => {
      const previousState = getState();
      const dispatched = dispatch(action);
      const currentState = getState();
     
      console.log(`Previous state: ${previousState}`);
      console.log(`Action dispatched: ${action.type}`);
      console.log(`Current state: ${currentState}`);
      console.log("=======================")  

      return dispatched; 
    };
} 
