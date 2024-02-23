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
import { useNavigate, useParams } from 'react-router-dom';
import { CarDetailsProps } from '../../@types/common';
import dayjs, { Dayjs } from 'dayjs';


export default function BasicDatePicker() {
  const params = useParams()
  const [pickTime, setPickTime] = useState<Dayjs | null>(dayjs(Date.now()))
  const [devolutionTime, setDevolutionTime] = useState<Dayjs | null>(dayjs(Date.now()))
  const navigate = useNavigate()


 
  
  return (

    <Container>
    
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
      <LocalizationProvider dateAdapter={AdapterDayjs} localeText={{previousMonth: 'mês anterior', nextMonth:'próximo mês'}}>
      <DemoContainer components={['DatePicker']}>
        <DateTimePicker label="Basic date time picker" defaultValue={dayjs('2023-04-17T15:30')} value={pickTime} onChange={(date) => setPickTime(date)}/>
      </DemoContainer>
      </LocalizationProvider>


      <Title>Escolha uma data e local de devolução:</Title>
       <Autocomplete
      disablePortal
      id="combo-box-demo2"
      options={CarsArray}
      sx={{ width: '100%' }}
      renderInput={(params) => <TextField {...params} label="Local de retirada" />}
    />
    <LocalizationProvider dateAdapter={AdapterDayjs} localeText={{previousMonth: 'mês anterior', nextMonth:'próximo mês'}}>
      <DemoContainer components={['DatePicker']}>
        <DateTimePicker label="Basic date time picker" defaultValue={dayjs('2022-04-17T15:30')} value={devolutionTime} onChange={(date) => setDevolutionTime(date)}/>
      </DemoContainer>
      </LocalizationProvider>

    <Header style={{marginTop: 50}}>
    <Button variant='contained'>Escolha um carro</Button>
    </Header>

    </Container>

    
  );
}