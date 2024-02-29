import { useEffect, useState } from "react"
import { ContainerCars, GeneralContainer, ImgCar, NormalLabel, WrapCars } from "../AvailableCars/styles"
import { Header, Title } from "../Register/styles"
import { CarDetailsProps } from "../../@types/common"
import { useParams, useSearchParams } from "react-router-dom"
import api from "../../services/api"
import { AxiosError } from "axios"

export const MyRents = () => {
    const [rentedCar, setRentedCar] = useState<CarDetailsProps[]>([])
    const {id} = useParams()
    const [searchParams] = useSearchParams();
    const locatedAt = searchParams.get('locatedAt')!.toString().substring(0, 10)
    const devolutionTime = searchParams.get('devolutionTime')!.toString().substring(0, 10)

    const getRents = async() => {
        try {
            const req = await api.get(`users/${id}/rent`)
            const rentedCarsInfo = req.data.map((item: { rentedCar: any }) => item.rentedCar);
            setRentedCar(rentedCarsInfo)
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
        {rentedCar.map((car) => (
            <GeneralContainer key={car.id}>
            <WrapCars>   
                <ContainerCars>
                    <NormalLabel>{car.name}</NormalLabel>
                    <NormalLabel style={{color: "green"}}>{car.price}</NormalLabel>
                </ContainerCars>
                <ImgCar src={car.link}></ImgCar>
            </WrapCars>
            
        </GeneralContainer>
        
        ))}
        <Header>
                <NormalLabel style={{backgroundColor: 'gray'}}>De {locatedAt} até {devolutionTime}</NormalLabel>
            </Header>
        </>
    )
}