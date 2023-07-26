import { Button, Grid } from "@mui/material";
import React from "react";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { useStake } from "../../context/Stake";
export default function Keyboard() {
  const { changeStake, removeLastStake } = useStake();

  const onInputValue = (value: number) => {
    changeStake(value);
  };

  return (
    <Grid container item spacing={1}>
      {/* Loop 10 times */}
      {Array.from(Array(10).keys()).map((i) => {
        return (
          <Grid item md={4} key={i}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => onInputValue(i)}
            >
              {i}
            </Button>
          </Grid>
        );
      })}
      <Grid item md={4}>
        <Button
          variant="outlined"
          fullWidth
          startIcon={<BackspaceIcon />}
          onClick={() => removeLastStake()}
        ></Button>
      </Grid>
      <Grid item md={4}>
        <Button variant="contained" fullWidth>
          Done
        </Button>
      </Grid>
    </Grid>
  );
}
