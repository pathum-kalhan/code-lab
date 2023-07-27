import { TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useStake } from "../../context/Stake";
export default function StakeInput(props) {
  const { fieldName } = props;
  const inputRef = React.useRef<HTMLInputElement>(null);

  const styles = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderWidth: "4px",
        borderColor: "purple",
      },
    },
  };

  const {
    stake,
    focusedFieldName,
    setFocus,
    flexibleStake,
    stayFocused,
    removeFocus,
  } = useStake();

  const handleBlur = (e) => {
    if (stayFocused && focusedFieldName === fieldName) {
      e.preventDefault();
      inputRef.current?.focus();
    }
  };
  const handleFocus = () => {
    setFocus(fieldName);
  };

  return (
    <TextField
      label={fieldName === "flexibleStake" ? "Flexible Stake" : "Stake"}
      variant="outlined"
      sx={fieldName === focusedFieldName ? styles : {}}
      name={fieldName === "flexibleStake" ? "flexibleStake" : "stake"}
      inputRef={inputRef}
      value={fieldName === "flexibleStake" ? flexibleStake : stake}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={removeFocus}
      onTouchStart={removeFocus}
    />
  );
}
