import {priceReducer} from './priceReducer'
import {combineReducers} from 'redux'


export const rootReducer = combineReducers({
    priceList:priceReducer,
})


type RootState = ReturnType<typeof rootReducer>;