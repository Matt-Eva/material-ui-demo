import React, {useState} from 'react'
import TextField from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import {DatePicker} from '@mui/x-date-pickers/DatePicker'
import "./Calendar.css"

function Calendar() {
  const [value, setValue] = useState(null)

  return (
    <div className='calendar'>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker 
            label="Schedule date" 
            value={value} 
            onChange={(newValue)=>{
              setValue(newValue)
            }}
            renderInput={(params) => <TextField {...params} />}  
          />
        </LocalizationProvider>

    </div>
  )
}

export default Calendar