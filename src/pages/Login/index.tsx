import { Link, useNavigate } from "react-router-dom"
import { Button } from "../../components/Button/styles"
import { ContainerForm } from "../../components/Form/style"
import { InputStyled, Span } from "../../components/Input/style"
import { Container, Header, Title } from "../Register/styles"
import { useState } from "react"
import * as storage from '../../services/storage'
import api from "../../services/api"
import { AxiosError } from "axios"

const Login = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        try {
            const response = await api.post('/users/login', {
                email,
                password
            })
            console.log(response.data, 'davigomes')
            const {accessToken, user} = response.data
            console.log(user)
            storage.saveForLogin(accessToken, user)


            navigate('/input')
            
        } catch (error) {
            if (error instanceof AxiosError) {
                alert(error.response?.data.error)
                return
              }
        
              alert('Something went wrong, please try again.')
        }
    }
    
    return (
        <>
        <Container>
            <Header>
                <Title>Login</Title>
            </Header>
        </Container>
        <ContainerForm onSubmit={handleSubmit}>
            <InputStyled placeholder="Insira seu email" type="email" value={email} onChange={(event) => {setEmail(event.target.value)}}/>
            <InputStyled placeholder="Insira sua senha" type="password" value={password} onChange={(event) => { setPassword(event.target.value) }}/>
            <Button type="submit">Entrar</Button>
            <Span>
          Don't have an account yet? <Link to="/register">Register</Link>
            </Span>
        </ContainerForm>
        </>
    )
}

export default Login