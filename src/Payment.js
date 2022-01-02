import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import car from '../src/assets/image/mycar.svg'

// const myimg =
//   "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Payment() {
  return (
    <Box sx={{ flexGrow: 1, m: 10 }}>
      <Grid container spacing={10}>
        <Grid item xs={6} md={4}>
          <Item>
            <h2>Thank You for subscribing us ❤️</h2>
            <br />
            <h4>Driver is on the way to your given Address</h4>
            <br />
            <Link to="/signup">
              <p>Change your address</p>
            </Link>
          </Item>
        </Grid>
        <Grid item xs={6} md={8}>
        
        <img src={car} alt="driverimg" height="300" />
       
          
        </Grid>
      </Grid>
    </Box>
  );
}
