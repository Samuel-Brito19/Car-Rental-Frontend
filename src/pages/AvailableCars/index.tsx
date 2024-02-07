import { InputStyled } from "../../components/Input/style"
import { Header, Title } from "../Register/styles"
import { ContainerCars, GeneralContainer, ImgCar, NormalLabel, OrinalInput, WrapCars, WrapInput, WrapInputRow } from "./styles"

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
        <WrapInput>
            <OrinalInput placeholder="Local de retirada"/>
        </WrapInput>
        <WrapInputRow>
            <OrinalInput placeholder="Data" />
            <OrinalInput placeholder="Hora" />
        </WrapInputRow>
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