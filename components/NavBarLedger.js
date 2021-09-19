import React from "react";
import { Button, Popup } from "semantic-ui-react";
import ToggleLedger from "./ToggleLedger";

export default function NavBarLedger({
  addDebt,
  addSavings,
  debt,
  revealRecurringPayment,
  setRevealRecurringPayment,
  revealLedger,
  setRevealLedger,
  savings,
  onHomePage,
  setOnHomePage,
}) {
  return (
    <div style={{ position: "relative", textAlign: "left", width: "275px" }}>
      <Popup
        content={
          onHomePage ? "Click to see your ledger" : "Click to see your homepage"
        }
        trigger={
          <Button
            circular
            icon={onHomePage ? "book" : "calculator"}
            floated="left"
            onClick={(state) => setOnHomePage(!onHomePage)}
            size="massive"
            style={{ display: "inline-block", marginTop: "3px" }}
          />
        }
      />
      <div style={{ display: "inline-block", float: "right", width: "125px" }}>
        {!revealLedger ? (
          <Button.Group floated="right" vertical>
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
        ) : (
          <ToggleLedger
            revealRecurringPayment={revealRecurringPayment}
            setRevealRecurringPayment={setRevealRecurringPayment}
          />
        )}
      </div>
    </div>
  );
}
