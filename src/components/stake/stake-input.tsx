import { TextField } from "@mui/material";
import { TextFieldProps } from "@mui/material";
import React, { forwardRef, useEffect } from "react";
import { useStake } from "../../context/Stake";
import withStakeInput from "./withStakeInput.tsx";

// interface StakeInputProps {
//   fieldName: string;
// }

type StakeInputProps = TextFieldProps & {
  fieldName: string;
};

const StakeInput = forwardRef<HTMLInputElement, StakeInputProps>(
  (props, ref) => {
    const { fieldName } = props;
    // const inputRef = React.useRef<HTMLInputElement>(null);

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
        (
          ref as React.MutableRefObject<HTMLInputElement | null>
        ).current?.focus();
      }
    };
    const handleFocus = () => {
      console.log("handleFocus", fieldName);
      setFocus(fieldName);
    };

    console.log("PROPS", props);

    return (
      <TextField
        label={fieldName === "flexibleStake" ? "Flexible Stake" : "Stake"}
        variant="outlined"
        sx={fieldName === focusedFieldName ? styles : {}}
        name={fieldName === "flexibleStake" ? "flexibleStake" : "stake"}
        inputRef={ref}
        value={fieldName === "flexibleStake" ? flexibleStake : stake}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={removeFocus}
        // onTouchStart={removeFocus}
        data-testid={props["data-testid"]}
      />
    );
  }
);

export default withStakeInput(StakeInput);
