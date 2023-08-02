import logo from "./logo.svg";
import "./App.css";
import BannerCard from "./components/banner/BannerCard.tsx";
import StakeInput from "./components/stake/stake-input.tsx";
import Keyboard from "./components/stake/keyboard.tsx";
import { StakeProvider } from "./context/Stake";
// import StakeSelection from "./components/stake/StakeSelection.tsx";
import { Grid } from "@mui/material";
import StakeSelection from "./components/stake/StakeSelection.tsx";
function App() {
  return (
    <div className="p-12">
      <StakeSelection />
    </div>
  );
}

export default App;
