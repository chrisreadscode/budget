import React from "react";
import { Button, Popup } from "semantic-ui-react";

export default function ToggleLedger({
  revealLedger,
  setRevealLedger,
  revealRecurringPayment,
  setRevealRecurringPayment,
}) {
  return (
    <div>
      <Popup
        content={
          revealRecurringPayment
            ? "Click to see your ledger"
            : "Click to enter a recurring payment"
        }
        trigger={
          <Button
            circular
            icon={revealRecurringPayment ? "list" : "plus"}
            onClick={(state) =>
              setRevealRecurringPayment(!revealRecurringPayment)
            }
            size="massive"
          />
        }
      />
    </div>
  );
}

// revealRecurringPayment,
// setRevealRecurringPayment,
