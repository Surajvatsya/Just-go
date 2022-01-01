// import React from 'react'

// function Card() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Card
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';

export default function MultiActionAreaCard(props) {
  console.log(props.img)
  return (
    // <Grid item>
    <Card sx={{ maxWidth: 300, m: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.img}
          alt="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {props.driver_id}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {props.email}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {props.address}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {props.experience}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {props.phone}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    // </Grid>
  );
}
