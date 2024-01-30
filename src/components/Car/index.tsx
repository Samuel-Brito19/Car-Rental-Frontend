import { Header, Title } from "../../pages/Register/styles"
import { ImgCar, LabelCars, WrapCars } from "./styles"

interface ImageCar {
    image: string,
    label: string
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
        <WrapCars key={cars.label}>
          <LabelCars>{cars.label}</LabelCars>
          <ImgCar src={cars.image}/>
        </WrapCars>
      ))}
        
        </>
    )
}

export default ComponentCar