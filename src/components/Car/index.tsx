import { WrapCars } from "./styles"

const CarImages = () => {

    const image1 = 'https://www.ram.com.br/content/dam/ram/products/570/profile.png.thumb.1280.1280.png'
    const image2 = 'https://opopular.com.br/image/policy%3A1.2133439%3A1678101760%2Fimage.jpg%3F%26f%3D3x2'
    const image3 = 'https://blog.carrera.com.br/wp-content/uploads/2023/09/image-27-1024x614.png'
    const image4 = 'https://img.sm360.ca/images/article/groupe-duplessis-honda/83098//2020-honda-hr-v-sport-004-source1611605978590.jpg'
    return (
        <WrapCars>
            <img src={image1} alt="Dodge Ram" />
            <img src={image2} alt="Civic" />
            <img src={image3} alt="Nivus" />
            <img src={image4} alt="HRV" />
        </WrapCars>
       
    )
}

export default CarImages