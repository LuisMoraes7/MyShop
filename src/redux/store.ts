import {applyMiddleware, createStore} from 'redux'
import { rootReducer } from './root-reducer'
import logger from 'redux-logger'



export type RootState = ReturnType<typeof store.getState>;

export const store: any = createStore(rootReducer, applyMiddleware(logger))
