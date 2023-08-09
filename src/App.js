import logo from "./logo.svg";
import "./App.css";
import BannerCard from "./components/banner/BannerCard.tsx";
import StakeInput from "./components/stake/stake-input.tsx";
import Keyboard from "./components/stake/keyboard.tsx";
import { StakeProvider } from "./context/Stake";
// import StakeSelection from "./components/stake/StakeSelection.tsx";
import { Grid } from "@mui/material";
import StakeSelection from "./components/stake/StakeSelection.tsx";
const terms = `
We have terms
1. one
2. two
3. three
`;

console.log(terms);
function App() {
  return (
    <div className="p-12">
      {/* <StakeSelection /> */}
      <p style={{ whiteSpace: "pre-wrap" }}>{terms}</p>
    </div>
  );
}

export default App;
