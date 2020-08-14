import React from 'react'
const Vector =  require("../Vector.png")
import {AddToCart, FooterCont,TotalTitle} from './StyledComponents/styledComponents'




export const Footer =({total}:any)=>{
    return(
        <FooterCont>
            {total?(<TotalTitle><h2>{total} грн</h2></TotalTitle>):(null)}
            <AddToCart>
                <img src={Vector} alt="" />
                <p>До кошика</p>
            </AddToCart>
        </FooterCont>
    )
}