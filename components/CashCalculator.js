import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import useMoneyLogic from "./useMoneyLogic";

export default function CashCalculator({ updateCalculatorCash }) {
  // const { updateCalculatorCash } = useMoneyLogic();
  const [activeCalculatorButton, setActiveCalculatorButton] = useState(100);
  const [showMinus, setShowMinus] = useState(false);
  const buttons = [1, 5, 20, 50, 100];

  const makeCalculatorButton = (value) => {
    return (
      <Button
        color={
          activeCalculatorButton === value
            ? showMinus
              ? "red"
              : "green"
            : "black"
        }
        key={value}
        onClick={(state) => {
          setActiveCalculatorButton(value);
          updateCalculatorCash(value, showMinus);
        }}
      >
        {value}
      </Button>
    );
  };

  return (
    <div>
      <div>
        <Button
          color={showMinus ? "red" : "green"}
          onClick={(event) => setShowMinus(!showMinus)}
        >
          {showMinus ? "-" : "+"}
        </Button>
        <Button.Group>
          {buttons.map((buttonValue) => makeCalculatorButton(buttonValue))}
        </Button.Group>
      </div>
      <br />
      <br />
    </div>
  );
}
