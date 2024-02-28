import { useState } from "react"
import { ContainerCars, GeneralContainer, ImgCar, NormalLabel, WrapCars } from "../AvailableCars/styles"
import { Header, Title } from "../Register/styles"
import { CarDetailsProps } from "../../@types/common"
import { useParams, useSearchParams } from "react-router-dom"

export const MyRents = () => {
    const [cars, setCars] = useState<CarDetailsProps[]>([])
    const {id} = useParams()
    const [searchParams] = useSearchParams();

    return(
        <>
        <Header>
            <Title>Meus aluguéis</Title>
        </Header>
        <GeneralContainer>
            <WrapCars>   
                <ContainerCars>
                    <NormalLabel>Oi</NormalLabel>
                    <NormalLabel style={{color: "green"}}>preço</NormalLabel>
                </ContainerCars>
                <ImgCar src="https://miro.medium.com/v2/resize:fit:1358/1*jxOiNxmcG3QTF6qlX0yXbw.jpeg"/>
            </WrapCars>  
        </GeneralContainer>
        <Header>
        <NormalLabel style={{justifyContent: 'center', border: '1px solid gray', width: '50%'}}>blx</NormalLabel>
        </Header>
        

        </>
    )
}