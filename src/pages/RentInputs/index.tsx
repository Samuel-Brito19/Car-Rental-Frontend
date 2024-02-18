import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { WrapInputRow } from '../AvailableCars/styles';
import { TimePicker } from '@mui/x-date-pickers';

export default function BasicDatePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
       <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
      <DemoContainer components={['DatePicker']}>
        <WrapInputRow>
        <DatePicker label="Basic date picker" />
        <TimePicker label="Basic time picker" />
        </WrapInputRow>
        
      </DemoContainer>
    </LocalizationProvider>
  );
}