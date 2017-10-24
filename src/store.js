import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import rootReducer from './reducer'


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(rootReducer);

export default store