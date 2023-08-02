import React from "react";
import { StakeProvider } from "../../context/Stake";
import { Grid } from "@mui/material";
import StakeInput from "./stake-input.tsx";
import Keyboard from "./keyboard.tsx";

export default function StakeSelection() {
  return (
    <div>
      <StakeProvider>
        <Grid container spacing={1}>
          <Grid item>
            <StakeInput fieldName="stake" data-testid="stake-input" />
          </Grid>
          <Grid item>
            <StakeInput
              fieldName="flexibleStake"
              data-testid="stake-input-flexi"
            />
          </Grid>
          <Keyboard />
        </Grid>
      </StakeProvider>
    </div>
  );
}
