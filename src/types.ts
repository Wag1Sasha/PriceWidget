
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
