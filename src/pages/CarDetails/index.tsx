import { useParams } from "react-router-dom"
import { CarDescription, CarName, Container, DescriptionWrap, DetailsContainer, ImageContainer, LinkCarImage, RentButton } from "./styles"
import { useEffect, useState } from "react"
import { CarDetailsProps } from "../../@types/common"
import api from "../../services/api"
import { AxiosError } from "axios"

const CarDetails = () => {
    const [car, setCar] = useState<CarDetailsProps | null>(null)
    const {id} = useParams()

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

    return (
        <>
         {car && (
            <Container key={car.id}>
                <ImageContainer>
                    <LinkCarImage src={car.link}/>
                </ImageContainer>
                <DetailsContainer>
                    <CarName>{car.name}</CarName>
                    <DescriptionWrap>
                        <CarDescription>{car.color}</CarDescription>
                        <CarDescription>{car.carChange}</CarDescription>
                        <CarDescription>{car.doors}</CarDescription>
                        <CarDescription>{car.type}</CarDescription>
                        <CarDescription>{car.model}</CarDescription>
                        <CarDescription>{car.price}</CarDescription>
                    </DescriptionWrap>
                </DetailsContainer>
                <RentButton >Rent Now!!</RentButton>
            </Container>
        )}
       
        </>

    )
}

export default CarDetails