import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers';
import { Header, Title } from '../Register/styles';
import  Button  from '@mui/material/Button';
import { useState } from 'react';
import { Container } from './styles';
import { useNavigate } from 'react-router-dom';
import dayjs, { Dayjs } from 'dayjs';


export default function BasicDatePicker() {
  const [pickTime, setPickTime] = useState<Dayjs | null>(dayjs(Date.now()))
  const [devolutionTime, setDevolutionTime] = useState<Dayjs | null>(dayjs(Date.now()))
  const navigate = useNavigate()

  
  const handleClick = () => {
    const formatedPickTime = pickTime?.toISOString()
    const formatedDevolutionTime = devolutionTime?.toISOString()
    navigate(`/home?locatedAt=${formatedPickTime}&devolutionTime=${formatedDevolutionTime}`)
  }

  
  return (
    <Container>
      <Header>
      <Title>Escolha uma data de retirada:</Title>
      </Header>
     
      <LocalizationProvider dateAdapter={AdapterDayjs} localeText={{previousMonth: 'mês anterior', nextMonth:'próximo mês'}}>
      <DemoContainer components={['DatePicker']}>
        <DateTimePicker label="Basic date time picker" defaultValue={dayjs('2023-04-17T15:30')} value={pickTime} onChange={(date) => setPickTime(date)} sx={{width: '100%'}}/>
      </DemoContainer>
      </LocalizationProvider>

      <Header>
      <Title>Escolha uma data de devolução:</Title>
      </Header>
       
    <LocalizationProvider dateAdapter={AdapterDayjs} localeText={{previousMonth: 'mês anterior', nextMonth:'próximo mês'}}>
      <DemoContainer components={['DatePicker']}>
        <DateTimePicker label="Basic date time picker" defaultValue={dayjs('2022-04-17T15:30')} value={devolutionTime} onChange={(date) => setDevolutionTime(date)} sx={{width: '100%'}}/>
      </DemoContainer>
      </LocalizationProvider>

    <Header style={{marginTop: 50}}>
    <Button variant='contained' onClick={handleClick}>Escolha um carro</Button>
    </Header>

    </Container>

    
  );
}