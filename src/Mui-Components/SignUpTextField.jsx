


import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';


export default function BasicTextFields() {


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

const handleNameInput = (e) =>{
  setName(e.target.value)
}

const handleEmailInput = (e) =>{
  setEmail(e.target.value)
}


const handlePassInput = (e) =>{
  setPass(e.target.value)
}



  return (
    <>
    <Box sx={{width:'370px',height:'32px',margin:'20px 0 40px 0',position:'relative',right:'4px'}}>
    <Box  
      component="form"
      sx={{
        '& > :not(style)': {margin:'10px 10px', width: '100%',height:'100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={handleNameInput} value={name} id="standard-basic" type='text' label="Name" variant="standard" />
    </Box> 

    {/* 2nd */}

    <Box
      component="form"
      sx={{
        '& > :not(style)': {margin:'10px 10px', width: '100%',height:'100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={handleEmailInput} value={email} id="standard-basic" type='email' label="Email or Phone Number" variant="standard" />
    </Box> 

  {/* 3rd  */}
  <Box
      component="form"
      sx={{
        '& > :not(style)': {margin:'10px 10px', width: '100%',height:'100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={handlePassInput} value={pass} id="standard-basic" label="Password" type='password' variant="standard" />
    </Box> 
</Box>
</>
  );
}
