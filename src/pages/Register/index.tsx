import { ContainerForm } from "../../components/Form/style"
import { InputStyled, Span } from "../../components/Input/style"
import { Container, Header, SubTitle, Title } from "./styles"

const Register = () => {
    return(
        <>
        <Container>
            <Header>
                <Title>Crie sua conta</Title>
                <SubTitle>Estamos quase lá</SubTitle>
            </Header>
        </Container>
        <ContainerForm>
            <InputStyled placeholder="Insira seu nome"/>
            <InputStyled placeholder="Insira seu email"/>
            <InputStyled placeholder="Insira sua senha"/>
            <InputStyled placeholder="Confirme sua senha"/>
            <Span>Já tem uma conta? Clique aqui</Span>
        </ContainerForm>
        </>
    )
}

export default Register