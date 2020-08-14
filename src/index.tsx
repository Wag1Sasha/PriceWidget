import React, { useState } from 'react';
import { Footer } from './Components/Footer';
import { PriceList } from './Components/PriceList'
import {AppContainer} from './Components/StyledComponents/styledComponents'
import {useSelector } from 'react-redux'
import {RootState, Product} from './types'





const App=()=>{

  const [selected,setSelected] = useState(0)
  
  const priceList = (state: RootState) => state.priceList
  const state = useSelector(priceList)
  console.log(state)

  
  

  const totalPrice =(id :number)=>{
    const selectedCard = state.find((card :Product) :boolean=>card.id ===selected);
    return selectedCard? selectedCard.price : ''
  }

  return (
    <AppContainer>
      <PriceList data={state} selected={selected} setSelected={setSelected} />
      <Footer total={totalPrice(selected)}/>
    </AppContainer>
  );
}

export default App;