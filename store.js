import { createStore, applyMiddleware, compose } from 'redux'
import promise from 'redux-promise'
import rootReducer from './redux/reducers/index.js'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { INITIAL_STATE } from './redux/reducers/index'

const p = applyMiddleware(promise);
const t = applyMiddleware(thunk);

export function configureStore(initialState=INITIAL_STATE)
{
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            p,
            t
        )
    )
}