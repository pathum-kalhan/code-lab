import logo from "./logo.svg";
import "./App.css";
import BannerCard from "./components/banner/BannerCard.tsx";
import StakeInput from "./components/stake/stake-input.tsx";
import Keyboard from "./components/stake/keyboard.tsx";
import { StakeProvider } from "./context/Stake";
import { Grid } from "@mui/material";
function App() {
  return (
    <div className="p-12">
      <StakeProvider>
        <Grid container spacing={1}>
          <Grid item>
            <StakeInput fieldName="stake" />
          </Grid>
          <Grid item>
            <StakeInput fieldName="flexibleStake" />
          </Grid>
          <Keyboard />
        </Grid>
      </StakeProvider>
    </div>
  );
}

export default App;
