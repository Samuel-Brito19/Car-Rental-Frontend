import {  useSearchParams } from "react-router-dom"
import TabMenu from "../../components/TabBar"
import { Header, Title } from "../Register/styles"
import { ContainerCars, GeneralContainer, ImgCar, NormalLabel, WrapCars } from "./styles"
import { useEffect, useState } from "react"
import { CarDetailsProps } from "../../@types/common"
import { AxiosError } from "axios"
import api from "../../services/api"
import { Link } from "react-router-dom"
import { getUser } from "../../services/storage"


const ComponentCar = () => {
    const [cars, setCars] = useState<CarDetailsProps[]>([])
    const [searchParams] = useSearchParams();
    const user = getUser()
    
    const getCars =async () => {
        
        try {
            const response = await api.get('/available', {
                params: {
                    locatedAt: `${searchParams.get('locatedAt')}`,
                    devolutionTime: `${searchParams.get('devolutionTime')}`
                }
            })
            setCars(response.data)
            console.log(response.data)
            
        } catch (error) {
            if (error instanceof AxiosError) {
                alert(error.response?.data.error)
                return 
              }
        
            alert('Something went wrong, please try again.')
        }

        
     }
     useEffect(() => {
        getCars()
    },[])
    return (
        <>
        <Header>
            <Title>Carros disponíveis</Title>
        </Header>
        
        {cars.map((car) => (
            <Link to={`/cardetails/${car.id}/${user?.id}?locatedAt=${searchParams.get('locatedAt')}&devolutionTime=${searchParams.get('devolutionTime')}`} 
            key={car.id}>
            <GeneralContainer>
            <WrapCars>
                <ContainerCars>
                    <NormalLabel>{car.name}</NormalLabel>
                    <NormalLabel style={{color: "green"}}>{car.price}</NormalLabel>
                </ContainerCars>
                    <ImgCar src={car.link}/>
            </WrapCars>
            </GeneralContainer>
            </Link>

        ))}
        <TabMenu/>
        </>
    )
}

export default ComponentCar