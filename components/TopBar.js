import React from "react";
import { Button, Popup } from "semantic-ui-react";

export default function TopBar({
  addDebt,
  addSavings,
  debt,
  savings,
  setOnHomePage,
}) {
  return (
    <div style={{ position: "relative", textAlign: "left", width: "275px" }}>
      <div style={{ display: "inline-block", width: "125px" }}>
        <Button.Group vertical>
          <Popup
            content={`Total Savings: Click to Add Today's Amount`}
            trigger={
              <Button
                color="green"
                compact
                content={`$${savings}`}
                fluid
                icon="plus"
                onClick={(event) => addSavings()}
                style={{ display: "inline-block" }}
              />
            }
          />
          <Popup
            content={`Total Debt: Click to Add Today's Amount`}
            trigger={
              <Button
                color="red"
                compact
                content={`$${Math.abs(debt)}`}
                fluid
                icon="minus"
                onClick={(event) => addDebt()}
                style={{
                  display: "inline-block",
                }}
              />
            }
          />
        </Button.Group>
      </div>

      <Popup
        content={`Click to see your ledger`}
        trigger={
          <Button
            circular
            icon="book"
            floated="right"
            onClick={(state) => setOnHomePage(!state)}
            size="massive"
            style={{ display: "inline-block", marginTop: "3px" }}
          />
        }
      />
    </div>
  );
}
