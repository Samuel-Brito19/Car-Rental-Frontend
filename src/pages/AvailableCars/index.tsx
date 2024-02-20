import { useNavigate } from "react-router-dom"
import TabMenu from "../../components/TabBar"
import { Header, Title } from "../Register/styles"
import { ContainerCars, GeneralContainer, ImgCar, NormalLabel, WrapCars } from "./styles"
import { getUser } from "../../services/storage"
import { useState } from "react"
import { CarProps } from "../../@types/common"
import { AxiosError } from "axios"

interface ImageCar {
    image: string,
    label: string,
    price: string
}


interface Props {
    CarsImages: ImageCar[]
}

const ComponentCar: React.FC<Props> = ({CarsImages}) => {
    const navigate = useNavigate()
    const user = getUser()
    const [cars, setCars] = useState<CarProps[]>([])
    const today = new Date()
    const ISODate = today.toISOString()
    
    const getCars =async () => {
        if (user === null) {
            alert('You must be logged in to access this page.')
            navigate('/')
            return
        }
        try {
            const response = 
            
        } catch (error) {
            if (error instanceof AxiosError) {
                alert(error.response?.data.error)
                return
              }
        
              alert('Something went wrong, please try again.')
        }
       
     }
    return (
        <>
        <Header>
            <Title>Carros disponíveis</Title>
        </Header>
        
        {CarsImages.map((cars) => (
            <GeneralContainer key={cars.label}>
            <WrapCars >
                <ContainerCars>
                    <NormalLabel>{cars.label}</NormalLabel>
                    <NormalLabel style={{color: "green"}}>{cars.price}</NormalLabel>
                </ContainerCars>
                    <ImgCar src={cars.image}/>
            </WrapCars>
            </GeneralContainer>

        ))}
        <TabMenu/>
        </>
    )
}

export default ComponentCar