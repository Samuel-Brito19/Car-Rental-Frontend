import { Header, Title } from "../Register/styles"
import { ContainerCars, GeneralContainer, ImgCar, NormalLabel, WrapCars } from "./styles"

interface ImageCar {
    image: string,
    label: string,
    price: string
}


interface Props {
    CarsImages: ImageCar[]
}

const ComponentCar: React.FC<Props> = ({CarsImages}) => {
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
        </>
    )
}

export default ComponentCar