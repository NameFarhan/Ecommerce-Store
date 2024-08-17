

import * as React from 'react';
import Button from '@mui/material/Button';

export default function TextButtons() {
  return (
      <Button sx={{boxShadow:'0',margin:'0',textTransform:'none',fontSize:'16px',backgroundColor:'#DB4444',display:'flex',justifyContent:'center',
        '&:hover':{
          backgroundColor:'#DB4444',
          boxShadow:'0'
        }
      }} href="#text-buttons" variant='contained'>Create Account</Button>
  );
}
