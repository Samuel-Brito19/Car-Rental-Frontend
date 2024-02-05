import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 30px;

`

export const ImageContainer = styled.div`
/* display: flex;
align-items: center;
justify-content: center; */
width: 350px;
height: 250px;
background-color: #25292F;
margin-top: 40px;
border: 2px solid none;
border-radius: 20px;
`

export const DetailsContainer = styled.div`
width: 350px;
height: 350px;
background-color: #282D33;
border: 2px solid none;
border-radius: 20px;
`
export const CarName = styled.h2`
font-size: 30px;
padding: 20px;
`
export const DescriptionWrap = styled.div`
display: grid;
grid-template-columns: 110px 110px 110px;
padding: 6px;
gap: 6px;
`

export const CarDescription = styled.label`
font-size: 20px;
padding: 20px;
background-color: #EDEDED;
border: solid 1px none;
border-radius: 10px;
`
export const RentButton = styled.button`
padding: 5px;
width: 200px;
background-color: #1EFFAA;
border: 2px solid gray;
border-radius: 20px;
font-size: 20px;
`
