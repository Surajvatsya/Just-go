
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import {Link}  from "react-router-dom";
export default function MultiActionAreaCard(props) {
  console.log(props.img)
  return (
    // <Grid item>
    <Card sx={{ maxwidth: 300, m: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="text.secondary">
            Driver Id :  {props.driver_id}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Name : {props.name}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Email : {props.email}
          </Typography>

          <Typography gutterBottom variant="body2" component="div">
            Driving experience : {props.experience} yr
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Address : {props.address}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Phone : {props.phone}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to="/plan" style={{ textDecoration: 'none' }}>
      <Button size="small" color="primary">
          Book Driver 
        </Button>   
      </Link>
        
      </CardActions>
    </Card>
    // </Grid>
  );
}
