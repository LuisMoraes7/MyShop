import {applyMiddleware, createStore} from 'redux'
import { rootReducer } from './root-reducer'
import logger from 'redux-logger'
import { configureStore } from '@reduxjs/toolkit';



export type RootState = ReturnType<typeof store.getState>;

export const store: any = configureStore({
    reducer: rootReducer,
    middleware(getDefaultMiddleware: any) {
        if (process.env.NODE_ENV === 'development') {
            return getDefaultMiddleware().concat(logger);
          }
          return getDefaultMiddleware();
        
    },
})
