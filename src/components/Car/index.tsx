import { Header, Title } from "../../pages/Register/styles"
import { ContainerCars, ImgCar, NormalLabel, WrapCars, WrapContainer } from "./styles"

interface ImageCar {
    image: string,
    label: string,
    price: string
}


interface Props {
    CarsImages: ImageCar[]
}

const ComponentCar = ({CarsImages}: Props) => {
    return (
        <>
        <Header>
            <Title>Carros disponíveis</Title>
        </Header>
        {CarsImages.map((cars) => (
        <WrapContainer>
        <WrapCars key={cars.label}>
          <ContainerCars>
          <NormalLabel>{cars.label}</NormalLabel>
          <NormalLabel style={{color: "green"}}>{cars.price}</NormalLabel>
          </ContainerCars>
          <ImgCar src={cars.image}/>
        </WrapCars>
        </WrapContainer>
      ))}
        </>
    )
}

export default ComponentCar