import { Grid } from '@mui/material';
import React from 'react'
import Data from './Data';
import MultiActionAreaCard from './MultiActionAreaCard';



// const SingleCard = (img, name, email, address, experience, phone) => {
//   return (
//             <MultiActionAreaCard
//               name = {name} img= {img} email={email} address={address} experience={experience} phone={phone}
//             />
//   )
// }
function Event() {
  return (
    <Grid container    direction="row"
    // justifyContent="center"
     >
      {Data.map((item) =>  <MultiActionAreaCard {...item} />)}
    </Grid>
  )
}
export default Event
