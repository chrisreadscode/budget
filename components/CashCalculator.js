import React, { useState } from "react";
import { Button } from "semantic-ui-react";

export default function CashCalculator({ addCash }) {
  const [calculatorAmount, setCalculatorAmount] = useState(100);
  const [minusSignOn, setMinusSignOn] = useState(false);
  const calculatorButtons = [1, 5, 20, 50, 100];

  const createCalculatorButton = (buttonAmount) => {
    return (
      <Button
        color={
          buttonAmount !== calculatorAmount
            ? "black"
            : minusSignOn
            ? "red"
            : "green"
        }
        key={buttonAmount}
        onClick={(state) => {
          setCalculatorAmount(buttonAmount);
        }}
        size="medium"
      >
        {buttonAmount}
      </Button>
    );
  };

  return (
    <div>
      <div>
        <Button.Group>
          {calculatorButtons.map((buttonAmount) =>
            createCalculatorButton(buttonAmount)
          )}
        </Button.Group>
      </div>
      <br />
      <div style={{ position: "relative", textAlign: "center" }}>
        <Button
          circular
          color={minusSignOn ? "red" : "green"}
          onClick={(event) => addCash(calculatorAmount, minusSignOn)}
          size="big"
        >
          {minusSignOn ? "subtract" : "add"}
        </Button>
        <Button
          circular
          icon="exchange"
          onClick={(event) => setMinusSignOn(!minusSignOn)}
          size="small"
          style={{
            position: "absolute",
            marginLeft: minusSignOn ? "28.75px" : "47.5px",
            marginTop: "7.5px",
          }}
        ></Button>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
