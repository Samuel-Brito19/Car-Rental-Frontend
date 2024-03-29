import styled from "styled-components";

export const GeneralContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
//width: 100%;
padding: 10px;
`

export const WrapCars = styled.button`
display: flex;
align-items: center;
justify-content: center;
//width: 80%;
gap: 30px;
padding: 10px;
border-radius: 20px;
`

export const ContainerCars = styled.label`
width: 100px;
height: 100px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`

export const ImgCar = styled.img`
width: 150px;
align-items: flex-end;
height: 75px;
`

export const NormalLabel = styled.label`
flex-direction: column;
padding: 10px;
`
export const WrapInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & input {
        width: 100%; /* Use percentage for fluidity */
        max-width: 370px; /* Set a max-width if needed */
    }
`

export const WrapInputRow = styled.div`
display: flex;
flex-direction: row;

`
export const OriginalInput = styled.input`
height: 30px;
`