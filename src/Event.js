import { Grid } from '@mui/material';
import React from 'react'
import Data from './Data';
import MultiActionAreaCard from './MultiActionAreaCard';

function Event() {
  return (
    <Grid container    direction="row">
      {Data.map((item) =>  <MultiActionAreaCard {...item} />)}
    </Grid>
  )
}
export default Event
