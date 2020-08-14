import {rootReducer} from './Redux/rootReducer'
export type Product={
    volume:number,
    price:number,
    id:number,
  }
  export type AllProducts = Product[]


export interface IPriceListProps {
    setSelected:(id:number)=>void,
    selected:number,
    data:Array<Product>
}

export type RootState = ReturnType<typeof rootReducer>;
