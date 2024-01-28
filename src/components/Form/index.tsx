import { ReactNode } from "react"
import { Container, ContainerForm } from "./style"

interface PropsForm {
    props: ReactNode
}

const Form: React.FC<PropsForm> = ({props}) => {
    return(
        <Container>
            <ContainerForm>
                {props}
            </ContainerForm>
        </Container>
    )
}

export default Form