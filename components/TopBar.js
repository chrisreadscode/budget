import React, { useState } from "react";
import { Button, Popup, Segment } from "semantic-ui-react";

export default function TopBar({ debt, save, updateDebtOrSave }) {
  const [showDebt, setShowDebt] = useState(false);

  return (
    <div>
      {/* DebtSave */}
      <Button
        color={showDebt ? "red" : "green"}
        floated="right"
        onClick={(event) => setShowDebt(!showDebt)}
        style={{ position: "relative", right: "125px" }}
      >
        ${showDebt ? `${Math.abs(debt)} Debt` : `${save} Save`}
      </Button>

      {/* Plus */}
      <Popup
        content={`Add today's cash to your ${showDebt ? "debt" : "save"}`}
        trigger={
          <Button
            circular
            icon="add"
            floated="right"
            onClick={(state) => updateDebtOrSave(showDebt)}
            style={{ position: "relative", left: "200px" }}
          />
        }
      />
    </div>
  );
}
