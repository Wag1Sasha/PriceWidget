import styled from 'styled-components'


export const AppContainer = styled.div`
position:absolute;
left:40%;
top:30%;
display:flex;
flex-direction:column;
height:250px;
width:20%;
background: #FFFFFF;
box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.16);
border-radius: 16px;
`

export const Header = styled.div`
display:flex;
flex-direction:row;
width:95%;
justify-content:space-around;
`

export const PriceListContainer = styled.div`

display:flex;
flex-wrap: nowrap;
flex-direction:column;
align-items:center;

`

export const PriceCardContainer = styled.div`
display:flex;
width:80%;
height:35px;
padding-top:10px;
align-items:center;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
`



export const VolumeCont = styled.div`
display:flex;
flex:2;
width:10%;
margin-left:1vw;

`
export const PriceCont = styled.div`
display:flex;
width:10%;
flex:1;
`

export const TitleVolume = styled.p`
font-weight:bold;
`

export const TitlePrice = styled.p`
display:flex;

font-weight:bold;
`

export const FooterCont = styled.div`
display:flex;
flex-direction:row;
justify-content:flex-end;
align-items:center;
height:20%;
margin:2vw;
`

export const AddToCart = styled.div`
background-color:#6CA22C;
width:50%;
height:50px;
display:flex;
align-items:center;
justify-content:space-around;
color:white;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;
border:1px solid #6CA22C;
border-radius:10px;
padding-left:.5vw;
margin-bottom:1.5vh;
cursor:pointer;
`

export const TotalTitle = styled.div`
    margin-right:1.5vw;
`