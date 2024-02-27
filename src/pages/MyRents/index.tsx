import { ContainerCars, GeneralContainer, ImgCar, NormalLabel } from "../AvailableCars/styles"
import { Header, Title } from "../Register/styles"

export const MyRents = () => {
    return(
        <>
        <Header>
            <Title>Meus aluguéis</Title>
        </Header>
        <GeneralContainer>
        <ContainerCars>
            <NormalLabel>Oi</NormalLabel>
            <NormalLabel style={{color: "green"}}>preço</NormalLabel>
        </ContainerCars>
            <ImgCar src="https://miro.medium.com/v2/resize:fit:1358/1*jxOiNxmcG3QTF6qlX0yXbw.jpeg"/>
        </GeneralContainer>
        <Header>
        <NormalLabel style={{justifyContent: 'center', border: '1px solid gray'}}>blx</NormalLabel>
        </Header>
        

        </>
    )
}