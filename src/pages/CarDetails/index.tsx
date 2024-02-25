import { useParams } from "react-router-dom"
import { CarDescription, CarName, Container, DescriptionWrap, DetailsContainer, ImageContainer, RentButton } from "./styles"
import { useEffect, useState } from "react"
import { CarDetailsProps } from "../../@types/common"
import api from "../../services/api"
import { AxiosError } from "axios"

const CarDetails = () => {
    const [car, setCar] = useState<CarDetailsProps[]>([])
    const params = useParams()

    const getCar = async() => {
        try {
            const response = await api.get(`/cars/${params.id}`)
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
        {car.map((detail) => (
            <Container>
            <ImageContainer>{detail.link}</ImageContainer>
            <DetailsContainer>
                <CarName>{detail.name}</CarName>
                <DescriptionWrap>
                <CarDescription>{detail.color}</CarDescription>
                <CarDescription>{detail.carChange}</CarDescription>
                <CarDescription>{detail.doors}</CarDescription>
                <CarDescription>{detail.type}</CarDescription>
                <CarDescription>{detail.model}</CarDescription>
                <CarDescription>{detail.price}</CarDescription>
                </DescriptionWrap>
            </DetailsContainer>
        </Container>
        ))}
        <RentButton >Rent Now!!</RentButton>
        </>

    )
}

export default CarDetails