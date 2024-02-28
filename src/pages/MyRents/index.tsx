import { useEffect, useState } from "react"
import { ContainerCars, GeneralContainer, ImgCar, NormalLabel, WrapCars } from "../AvailableCars/styles"
import { Header, Title } from "../Register/styles"
import { CarDetailsProps } from "../../@types/common"
import { useParams } from "react-router-dom"
import api from "../../services/api"
import { AxiosError } from "axios"

export const MyRents = () => {
    const [cars, setCars] = useState<CarDetailsProps[]>([])
    const {id} = useParams()

    const getRents = async() => {
        try {
            const req = await api.get(`users/${id}/rent`)

            console.log(req.data)
            setCars(req.data)
        } catch (error) {
            if (error instanceof AxiosError) {
                alert(error.response?.data.error)
                return
            }
        }
    }

    useEffect(() => {
        getRents()
    },[])
    return(
        <>
        <Header>
            <Title>Meus aluguéis</Title>
        </Header>
        {cars.map((car) => (
            <GeneralContainer key={car.id}>
            <WrapCars>   
                <ContainerCars>
                    <NormalLabel>{car.name}</NormalLabel>
                    <NormalLabel style={{color: "green"}}>{car.price}</NormalLabel>
                </ContainerCars>
                <ImgCar>{car.link}</ImgCar>
            </WrapCars>
            <Header>
                <NormalLabel style={{justifyContent: 'center', border: '1px solid gray', width: '50%'}}></NormalLabel>
            </Header>
        </GeneralContainer>
        ))}
        </>
    )
}