

import * as React from 'react';
import Button from '@mui/material/Button';

export default function TextButtons({ handleCreateAccount }) {
  return (
      <Button onClick={handleCreateAccount} sx={{boxShadow:'0',position:'relative',top:'20px',width:'100%',textTransform:'none',fontSize:'16px',backgroundColor:'#DB4444',display:'flex',justifyContent:'center',
        '&:hover':{
          backgroundColor:'#DB4444',
          boxShadow:'0'
        }
      }} variant='contained'>Create Account</Button>
  );
}
