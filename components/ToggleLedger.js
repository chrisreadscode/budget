import React, { useState } from "react";
import { Button, Popup } from "semantic-ui-react";

export default function ToggleLedger({ revealLedger, setRevealLedger }) {
  return (
    <div>
      <br />
      <br />
      <Popup
        content={
          revealLedger
            ? "Click to enter a recurring payment"
            : "Click to see your ledger"
        }
        trigger={
          <Button
            circular
            icon={revealLedger ? "plus" : "list"}
            onClick={(state) => setRevealLedger(!revealLedger)}
            size="massive"
          />
        }
      />
    </div>
  );
}
