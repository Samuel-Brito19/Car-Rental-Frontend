import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { WrapInputRow } from '../AvailableCars/styles';
import { TimePicker } from '@mui/x-date-pickers';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { CarsArray } from '../AvailableCars/array';
import { Header, Title } from '../Register/styles';
import  Button  from '@mui/material/Button';
import { useState } from 'react';
import { Container } from './styles';


export default function BasicDatePicker() {
  const [locatedDate, setLocatedDate] = useState(Date)

  
  
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
      sx={{ width: 375 }}
      renderInput={(params) => <TextField {...params} label="Local de retirada" />}
    />
      <DemoContainer components={['DatePicker']}>
        <WrapInputRow>
        <DatePicker label="Basic date picker"/>
        
        <TimePicker label="Basic time picker" />
        </WrapInputRow>
        
      </DemoContainer>

      <Title>Escolha uma data e local de devolução:</Title>
       <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={CarsArray}
      sx={{ width: 375 }}
      renderInput={(params) => <TextField {...params} label="Local de retirada" />}
    />
      <DemoContainer components={['DatePicker']}>
        <WrapInputRow>
        <DatePicker label="Basic date picker" />
        <TimePicker label="Basic time picker" />
        </WrapInputRow>
        
      </DemoContainer>

    </LocalizationProvider>
    <Header style={{marginTop: 50}}>
    <Button variant='contained'>Finish your rent</Button>
    </Header>

    </Container>
    
  );
}