import { Link, useNavigate } from "react-router-dom"
import { Button } from "../../components/Button/styles"
import { ContainerForm } from "../../components/Form/style"
import { InputStyled } from "../../components/Input/style"
import { Container, Header, Title } from "../Register/styles"
import { useState } from "react"
import { Span } from "./styles"

const Login = () => {
    //const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }
    
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
            <Span>
          Don't have an account yet? <Link to="/register">Register</Link>
            </Span>
        </ContainerForm>
        </>
    )
}

export default Login