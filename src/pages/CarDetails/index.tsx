import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import { CarDescription, CarName, Container, DescriptionWrap, DetailsContainer, ImageContainer, LinkCarImage, RentButton } from "./styles"
import { useEffect, useState } from "react"
import { CarDetailsProps } from "../../@types/common"
import api from "../../services/api"
import { AxiosError } from "axios"
import { getUser } from "../../services/storage"
import CcLink from "../../components/Back-Button"

const CarDetails = () => {
    const [car, setCar] = useState<CarDetailsProps | null>(null)
    const {id, carId} = useParams()
    const [searchParams] = useSearchParams();
    const user = getUser()
    const navigate = useNavigate()


    const getCar = async() => {
        try {
            const response = await api.get(`/cars/${id}`)
            setCar(response.data)
        } catch (error) {
            if (error instanceof AxiosError) {
                alert(error.response?.data.error)
                return
            }
        }
    }
    useEffect(() => {
        getCar()
    },[])

    const rentNow = async() => {
        try {
                const Req = await api.post('users/rent', {
                locatedAt: searchParams.get('locatedAt'),
                devolutionTime: searchParams.get('devolutionTime'),
                userId: user?.id,
                carId: carId
            })

            if(Req.status === 200) {
                navigate(`/myrents/${user?.id}`)
            }
        } catch (error) {
            
        }
    }

    return (
        <>
        <CcLink backArrow href="/home">
            Voltar página
          </CcLink>
         {car && (
            <Container key={car.id}>
                <ImageContainer>
                    <LinkCarImage src={car.link}/>
                </ImageContainer>
                <DetailsContainer>
                    <CarName>{car.name}</CarName>
                    <DescriptionWrap>
                        <CarDescription>Cor: {car.color}</CarDescription>
                        <CarDescription>Marcha: {car.carChange}</CarDescription>
                        <CarDescription>Portas: {car.doors}</CarDescription>
                        <CarDescription>Tipo: {car.type}</CarDescription>
                        <CarDescription>Modelo: {car.model}</CarDescription>
                        <CarDescription>Preço: {car.price}</CarDescription>
                    </DescriptionWrap>
                </DetailsContainer>
                <RentButton onClick={rentNow}>Rent Now!!</RentButton>
            </Container>
        )}
    
       
        </>

    )
}

export default CarDetails