import { useNavigate } from "react-router-dom"
import TabMenu from "../../components/TabBar"
import { Header, Title } from "../Register/styles"
import { ContainerCars, GeneralContainer, ImgCar, NormalLabel, WrapCars } from "./styles"
import { getUser } from "../../services/storage"
import { useEffect, useState } from "react"
import { CarDetailsProps } from "../../@types/common"
import { AxiosError } from "axios"
import api from "../../services/api"

interface ImageCar {
    image: string,
    label: string,
    price: string
}


interface Props {
    CarsImages: ImageCar[]
}

const ComponentCar: React.FC<Props> = () => {
    const navigate = useNavigate()
    //const user = getUser()
    const [cars, setCars] = useState<CarDetailsProps[]>([])
    const [car, setCar] = useState<CarDetailsProps>()
    const today = new Date()
    const ISODate = today.toISOString()
    
    const getCars =async () => {
        // if (user === null) {
        //     alert('You must be logged in to access this page.')
        //     navigate('/')
        //     return
        // }
        try {
            const response = await api.get('/available', {
                params: {
                    locatedAt: ISODate,
                    devolutionTime: ISODate
                }
            })
            setCars(response.data)
            
        } catch (error) {
            if (error instanceof AxiosError) {
                alert(error.response?.data.error)
                return
              }
        
            alert('Something went wrong, please try again.')
        }

        useEffect(() => {
            getCars()
        },[cars])
       
     }
    return (
        <>
        <Header>
            <Title>Carros disponíveis</Title>
        </Header>
        
        {cars.map((car) => (
            <GeneralContainer key={car.id}>
            <WrapCars >
                <ContainerCars>
                    <NormalLabel>{car.name}</NormalLabel>
                    <NormalLabel style={{color: "green"}}>{car.price}</NormalLabel>
                </ContainerCars>
                    <ImgCar src={car.link}/>
            </WrapCars>
            </GeneralContainer>

        ))}
        <TabMenu/>
        </>
    )
}

export default ComponentCar