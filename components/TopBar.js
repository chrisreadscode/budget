import React from "react";
import { Button, Popup } from "semantic-ui-react";

export default function TopBar({
  debt,
  save,
  setOnHomePage,
  updateDebtOrSave,
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
                content={`$${save}`}
                fluid
                icon="plus"
                onClick={(event) => updateDebtOrSave(false)}
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
                onClick={(event) => updateDebtOrSave(true)}
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
