import React from 'react'
import store from './stores'
import * as Actions from './actions'
import {render} from 'react-dom'

//Below is for componentReactAlone without react-redux
//import TodoApp from './componentsReactAlone/TodoApp'
//render(<TodoApp/>, document.getElementById("root"))

//Below is with react-redx
import TodoApp from './components/TodoApp'
import { Provider } from 'react-redux'

render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>,
    document.getElementById("root")
)
