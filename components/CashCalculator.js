import React, { useState } from "react";
import { Button } from "semantic-ui-react";

export default function CashCalculator({ addCash }) {
  const [clickedValue, setClickedValue] = useState(100);
  const [minusSignOn, setMinusSignOn] = useState(false);
  const calculatorButtonValues = [1, 5, 20, 50, 100];

  const buttonColor = minusSignOn ? "red" : "green";

  const createCalculatorButton = (buttonValue) => {
    return (
      <Button
        color={buttonValue === clickedValue ? buttonColor : "black"}
        key={buttonValue}
        onClick={(state) => {
          addCash(buttonValue, minusSignOn);
          setClickedValue(buttonValue);
        }}
        size="medium"
      >
        {buttonValue}
      </Button>
    );
  };

  return (
    <div>
      <div>
        <Button.Group>
          {calculatorButtonValues.map((buttonValue) =>
            createCalculatorButton(buttonValue)
          )}
        </Button.Group>
      </div>
      <br />
      <div style={{ position: "relative", textAlign: "center" }}>
        <Button
          circular
          color={buttonColor}
          onClick={(event) => addCash(clickedValue, minusSignOn)}
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
