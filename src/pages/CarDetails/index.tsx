import { CarDescription, CarName, Container, DetailsContainer, ImageContainer } from "./styles"

const CarDetails = () => {
    return (
        <Container>
            <ImageContainer/>
            <DetailsContainer>
                <CarName>Fox</CarName> 
                <CarDescription>como colocar um read more?</CarDescription>
            </DetailsContainer>
        </Container>
    )
}

export default CarDetails