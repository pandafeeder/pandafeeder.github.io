import topReducer from '../reducers'
import { createStore } from 'redux'

const store = createStore(topReducer, window.devToolsExtension && window.devToolsExtension())
//const store = createStore(topReducer)

export default store
