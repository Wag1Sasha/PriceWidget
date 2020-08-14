import React from 'react'
const checkbox_false =  require("../checkbox_false.png")
const checkbox_true =  require("../checkbox_true.png")
import {PriceCardContainer,VolumeCont,PriceCont} from './StyledComponents/styledComponents'

interface IPriceCardProps {
    id:number,
    price:number,
    volume:number,
    selected:boolean,
    setSelected:(id:number)=>void
}

export const PriceCard =({id, price,volume,selected,setSelected}:IPriceCardProps)=>{

    return(
        <PriceCardContainer>
            <div onClick={()=>{setSelected(id)}}>
                {selected?<img src={checkbox_true} alt="" /> : <img src={checkbox_false} alt=""/>}
            </div>
            <VolumeCont><p>{volume} г</p></VolumeCont>
            <PriceCont><p>{price} грн</p></PriceCont>
        </PriceCardContainer>
    )
}