import { useEffect, useState } from "react"
import { ContainerCars, GeneralContainer, ImgCar, NormalLabel, WrapCars } from "../AvailableCars/styles"
import { Header, Title } from "../Register/styles"
import { RentInfo } from "../../@types/common"
import { useParams } from "react-router-dom"
import api from "../../services/api"
import { AxiosError } from "axios"
import CcLink from "../../components/Back-Button"

export const MyRents = () => {
    const [rentedCar, setRentedCar] = useState<RentInfo[]>([])
    //const [rent, setRent] = useState<rentedCarProps[]>([])
    const {id} = useParams()
    
    const getRents = async() => {
        try {
            const req = await api.get(`users/${id}/rent`)
            console.log(req.data)

            const rentInfoData: RentInfo[] = req.data.map((item: any) => {
                return {
                    locatedAt: item.locatedAt,
                    devolutionTime: item.devolutionTime,
                    rentedCar: item.rentedCar
                };
            });
            setRentedCar(rentInfoData)
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
        <CcLink backArrow href="/home">
            Voltar página
          </CcLink>
        <Header>
            <Title>Meus aluguéis</Title>
        </Header>
        {rentedCar.map((car) => (
            <>
            <GeneralContainer key={car.rentedCar.id}>
            <WrapCars>   
                <ContainerCars>
                    <NormalLabel>{car.rentedCar.name}</NormalLabel>
                    <NormalLabel style={{color: "green"}}>{car.rentedCar.price}</NormalLabel>
                </ContainerCars>
                <ImgCar src={car.rentedCar.link}></ImgCar>
            </WrapCars>
            <NormalLabel></NormalLabel>
            
        </GeneralContainer>
        <Header>
            <NormalLabel style={{backgroundColor: 'gray'}}>{String(car.locatedAt).substring(0,10)} até {String(car.devolutionTime).substring(0,10)}</NormalLabel>
        </Header>
        </>
        
        ))}
        </>
    )
}