import { useNavigate } from "react-router-dom"
import { CarDescription, CarName, Container, DescriptionWrap, DetailsContainer, ImageContainer, RentButton } from "./styles"

const CarDetails = () => {
    return (
        <Container>
            <ImageContainer/>
            <DetailsContainer>
                <CarName>Fox</CarName>
                <DescriptionWrap>
                <CarDescription>Details</CarDescription>
                <CarDescription>Details</CarDescription>
                <CarDescription>Details</CarDescription>
                <CarDescription>Details</CarDescription>
                <CarDescription>Details</CarDescription>
                <CarDescription>Details</CarDescription>
                <CarDescription>Details</CarDescription>
                </DescriptionWrap>
                
            </DetailsContainer>
            <RentButton >Rent Now!!</RentButton>
        </Container>
    )
}

export default CarDetails