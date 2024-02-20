import { useNavigate } from "react-router-dom"
import TabMenu from "../../components/TabBar"
import { Header, Title } from "../Register/styles"
import { ContainerCars, GeneralContainer, ImgCar, NormalLabel, WrapCars } from "./styles"
import { getUser } from "../../services/storage"

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
        <TabMenu/>
        </>
    )
}

export default ComponentCar