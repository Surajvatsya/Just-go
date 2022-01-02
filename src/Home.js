import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import driver from "./assets/image/driver.svg";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { useNavigate } from "react-router-dom";

// const Div = styled("div")(({ theme }) => ({
//   ...theme.typography.button,
//   backgroundColor: theme.palette.background.paper,
//   padding: theme.spacing(1),
// }));
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home() {

  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1, m: 10 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <img src={driver} width="499" height="299" alt="driver_img" />
        </Grid>
        <Grid item xs={6} md={4}>
          <Item sx={{ color: "success.main" }}>
            <AcUnitIcon />
            <h2> JUST GO </h2>
            <AcUnitIcon />
          </Item>
          <br />
          {/* <Div>{" Hire a driver "}</Div> */}
          <h1>Wanna go for a ride?</h1>
          <h3>Book driver from most popular platform...</h3>
          <br />
          <Stack direction="row" spacing={2}>
            <Button variant="contained" endIcon={<SendIcon />} onClick={()=> navigate("/login")}>
              Book a driver
            </Button>
          </Stack>
        </Grid>
        <br />
        <Grid item xs={6} md={8}>
        <Stack direction="row" spacing={20} sx={{  m: 10 }}>
            <Button variant="contained" onClick={() => navigate("/signup")} >
              Signup
            </Button>
            <Button variant="contained" onClick={() => navigate("/login")}>
              Login
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
