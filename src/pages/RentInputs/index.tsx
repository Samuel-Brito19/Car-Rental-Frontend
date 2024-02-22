import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { CarsArray } from '../AvailableCars/array';
import { Header, Title } from '../Register/styles';
import  Button  from '@mui/material/Button';
import { useState } from 'react';
import { Container } from './styles';
import api from '../../services/api';
import { useNavigate, useParams } from 'react-router-dom';
import { AxiosError } from 'axios';


export default function BasicDatePicker() {
  const params = useParams()
  const [pickTime, setPickTime] = useState(null)
  const [devolutionTime, setDevolutionTime] = useState(null)
  const [response, setResponse] = useState(null)
  const navigate = useNavigate()


  const handleDateTimeChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    
     
    try {
      const response = await api.get('/available', {
        params: {
            locatedAt: pickTime,
            devolutionTime: devolutionTime
        }
    })
      setResponse(response.data)
      console.log(response.data)
      navigate('/home')

    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.response?.data.error)
      }
    }
  }
  
  
  return (
  
    <Container>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Header>
      <Title>Escolha uma data e local de retirada:</Title>
      </Header>
      
       <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={CarsArray}
      sx={{ width: '100%' }}
      renderInput={(params) => <TextField {...params} label="Local de retirada" />}

    />
      <DemoContainer components={['DatePicker']}>
        <DateTimePicker label="Basic date time picker"/>
        
      </DemoContainer>

      <Title>Escolha uma data e local de devolução:</Title>
       <Autocomplete
      disablePortal
      id="combo-box-demo2"
      options={CarsArray}
      sx={{ width: '100%' }}
      renderInput={(params) => <TextField {...params} label="Local de retirada" />}
    />
      <DemoContainer components={['DatePicker']}>
        
        <DateTimePicker label="Basic date time picker"/>
        
      </DemoContainer>

    </LocalizationProvider>
    <Header style={{marginTop: 50}}>
    <Button variant='contained'>Escolha um carro</Button>
    </Header>

    </Container>
    
  );
}