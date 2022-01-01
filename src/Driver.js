import React from 'react'
import Event from './Event'
import Navbar from './Navbar'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function Driver() {
  return (
    <div>
      <Navbar />
      <Box sx={{ flexGrow: 1 }}>
        <Container sx={{ mt: 5 }} style={{
          marginTop: "80px",
          maxWidth: "1100px"
        }}>
          <Event />
        </Container>
      </Box>


    </div>
  )
}

export default Driver
