import { Action } from "redux";
import {AllProducts} from '../types'

const initState = [
    {
        volume:500,
        price:500,
        id:1,
    },
    {
        volume:150,
        price:300,
        id:2,
    },
    {
        volume:50,
        price:90,
        id:3,
    }
]

export const priceReducer =(state:AllProducts=initState,action:any)=>{
    return state;

}