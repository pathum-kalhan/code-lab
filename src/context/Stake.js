import { createContext, useState, useContext } from "react";

const StakeContext = createContext({
  stake: 0,
  changeStake: (stake) => {},
  removeLastStake: () => {},
  focusedFieldName: "",
  setFocus: (name) => {},
  flexibleStake: "",
  stayFocused: false,
  removeFocus: () => {},
});

export const useStake = () => {
  const context = useContext(StakeContext);

  if (!context) {
    throw new Error(`useStake must be used within a StakeProvider`);
  }

  return context;
};

export const StakeProvider = ({ children }) => {
  const [stake, setStake] = useState("");
  const [flexibleStake, setFlexibleStake] = useState("");
  const [focusedFieldName, setFocusedFieldName] = useState("");
  const [stayFocused, setStayFocused] = useState(false);

  const changeStake = (stake) => {
    if (focusedFieldName === "stake") {
      setStake((prev) => `${prev}${stake}`);
    } else {
      setFlexibleStake((prev) => `${prev}${stake}`);
    }
  };

  const removeLastStake = () => {
    if (focusedFieldName === "stake") {
      setStake((prev) => prev.slice(0, -1));
    } else {
      setFlexibleStake((prev) => prev.slice(0, -1));
    }
  };

  const setFocus = (name) => {
    setFocusedFieldName(name);
    setStayFocused(true);
  };

  const removeFocus = () => {
    setFocusedFieldName("");
    setStayFocused(false);
  };

  return (
    <StakeContext.Provider
      value={{
        stake,
        changeStake,
        removeLastStake,
        focusedFieldName,
        setFocus,
        removeFocus,
        flexibleStake,
        stayFocused,
      }}
    >
      {children}
    </StakeContext.Provider>
  );
};
