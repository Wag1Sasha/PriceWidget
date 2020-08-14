import React from 'react'
import {PriceCard} from './PriceCard'
import {PriceListContainer,Header,TitleVolume,TitlePrice} from './StyledComponents/styledComponents'
import {IPriceListProps} from '../types'




export const PriceList =({data,setSelected,selected}:IPriceListProps)=>{
    return(
        <PriceListContainer>
            <Header>
            <TitleVolume>Тип</TitleVolume>
            <TitlePrice>Ціна</TitlePrice>
            </Header>
            {data.map((card)=>{
                console.log('price card id in priceList ===',card.id)
                return card.id === selected?(
                <PriceCard key={card.id} id={card.id} volume={card.volume} price={card.price} selected={true} setSelected={setSelected}/>
                ):(<PriceCard key={card.id} id={card.id}  volume={card.volume} price={card.price} selected={false} setSelected={setSelected}/>)
            })}
        </PriceListContainer>
        
    )
}