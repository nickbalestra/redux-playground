import createStore from '../naif-redux/createStore'
import applyMiddleware from '../naif-redux/applyMiddleware'
import counter, * as rootReducer from './reducers/counter'
import createLoggingMiddleware from './middlewares/logger'

const createEnhancedStore = applyMiddleware(createLoggingMiddleware)(createStore)

export default function configureStore(initialState) {
  return createEnhancedStore(counter, initialState)
}

module.exports = configureStore