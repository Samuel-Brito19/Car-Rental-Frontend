import { Link, useNavigate } from "react-router-dom"
import { Button } from "../../components/Button/styles"
import { ContainerForm } from "../../components/Form/style"
import { InputStyled, Span } from "../../components/Input/style"
import { Container, Header, SubTitle, Title } from "./styles"
import { useState } from "react"
import api from "../../services/api"
import { AxiosError } from "axios"

const Register = () => {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: '',
        passwordConf: ''
    })

    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs(prev => ({...prev, [e.target.name] : e.target.value}))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        try {
          await api.post('/users', inputs)
          console.log(inputs)
    
          if (inputs.password !== inputs.passwordConf) {
            alert('Password does not match!!')
            setInputs(
              {
                name: '',
                email: '',
                password: '',
                passwordConf: ''
              })
    
            return
          }
    
          navigate('/')
        } catch (error) {
          if (error instanceof AxiosError) {
            alert(error.response?.data.error)
          }
        }
      }
    return(
        <>
        <Container>
            <Header>
                <Title>Crie sua conta</Title>
                <SubTitle>Estamos quase lá</SubTitle>
            </Header>
        </Container>
        
        <ContainerForm>
            <InputStyled required type='text' placeholder='Username' name='name' onChange={handleChange}/>
            <InputStyled required type='email' placeholder='Enter email' name='email' onChange={handleChange} />
            <InputStyled  required type='password' placeholder='Enter password' name='password' value={inputs.password} onChange={handleChange}/>
            <InputStyled required type='password' placeholder='Confirm password' name='passwordConf' value={inputs.passwordConf} onChange={handleChange}/>
            <Button onClick={handleSubmit}>Cadastrar</Button>
            <Span>
          Don't have an account yet? <Link to="/">Login</Link>
            </Span>
            
        </ContainerForm>
        </>
    )
}

export default Register