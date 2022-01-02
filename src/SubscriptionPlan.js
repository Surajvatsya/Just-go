import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import PlanCard from "./PlanCard";
import PlanCard2 from "./PlanCard2";

const img =
  "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJpdmV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60";

const img2 =
  "https://media.istockphoto.com/photos/success-will-get-you-everything-you-want-picture-id1284854701?b=1&k=20&m=1284854701&s=170667a&w=0&h=29kF4rah-gjO2HcQ4ZIHrKRs7v0cXzFyiUN7my9bWq8=";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <PlanCard />
        </Grid>
        <Grid item xs={4} sx={{ m: 4 }}>
          <img src={img} alt="plan" height="180" />
        </Grid>
        <Grid item xs={4} sx={{ m: 2 }}>
          <img src={img2} alt="plan" height="180" />
        </Grid>

        <Grid item xs={6}>
          <PlanCard2 />
        </Grid>
      </Grid>
    </Box>
  );
}
