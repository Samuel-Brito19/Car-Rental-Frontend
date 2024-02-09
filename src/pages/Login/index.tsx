import { Button } from "../../components/Button/styles"
import { ContainerForm } from "../../components/Form/style"
import { InputStyled } from "../../components/Input/style"
import { Container, Header, Title } from "../Register/styles"

const Login = () => {
    
    return (
        <>
        <Container>
            <Header>
                <Title>Login</Title>
            </Header>
        </Container>
        <ContainerForm>
            <InputStyled placeholder="Insira seu email"/>
            <InputStyled placeholder="Insira sua senha"/>
            <Button>Entrar</Button>
        </ContainerForm>
        </>
    )
}

export default Login