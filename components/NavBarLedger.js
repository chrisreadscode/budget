import React from "react";
import { Button, Popup } from "semantic-ui-react";

export default function NavBarLedger({
  addDebt,
  addSavings,
  debt,
  savings,
  onHomePage,
  setOnHomePage,
}) {
  return (
    <div style={{ position: "relative", textAlign: "left", width: "275px" }}>
      <div style={{ display: "inline-block", width: "125px" }}>
        <Button.Group vertical>
          <Popup
            content={`Total Savings: Click to Add Left Today's Amount`}
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
            content={`Total Debt: Click to Add Left Today's Amount`}
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
        content={
          onHomePage ? "Click to see your ledger" : "Click to see your homepage"
        }
        trigger={
          <Button
            circular
            icon={onHomePage ? "book" : "calculator"}
            floated="right"
            onClick={(state) => setOnHomePage(!onHomePage)}
            size="massive"
            style={{ display: "inline-block", marginTop: "3px" }}
          />
        }
      />
    </div>
  );
}
