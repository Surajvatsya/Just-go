import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom' 

const card = (
  <React.Fragment  >
  
    <CardContent >
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      Subscription Plan 2
      </Typography>
      <Typography variant="h5" component="div">
       Hire for a year or more
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
       Charges :- $2500 per month
      </Typography>
      {/* <Typography variant="body2">
        Hire for 1 month
        <br />
       
      </Typography> */}
    </CardContent>
    <Link to="/payment" style={{ textDecoration: 'none' }}>
    <CardActions >
      <Button variant='contained' size="small">Choose this Plan?</Button>
    </CardActions>
    </Link>
  </React.Fragment>
);

export default function OutlinedCard(props) {
  return (
    <Box sx={{ minWidth: 275, m: 4}}>
      <Card >{card}</Card>
    </Box>
  );
}
