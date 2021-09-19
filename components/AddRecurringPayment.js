import React, { useState } from "react";
import { Button, Dropdown, Form, Input, Label } from "semantic-ui-react";

export default function AddRecurringPayment({ addPayment }) {
  const [frequency, setFrequency] = useState("Pick a Frequency");
  const [ledgerEntryType, setLedgerEntryType] = useState(
    "Payment, Income, or Daily Cash Release"
  );

  const handleAddingPayment = (e) => {
    e.preventDefault();

    addPayment(e, frequency, ledgerEntryType);
  };

  const handleLedgerEntryType = (e) => {
    const value = e.target.textContent;
    if (value === "Daily Cash Release") setFrequency("Day");
    setLedgerEntryType(value);
  };

  const handleFrequency = (e) => {
    let value = e.target.textContent;
    value = value.slice("Every".length + 1);
    setFrequency(value);
  };

  const makeOptionObject = (value) => {
    return {
      key: `${value}`,
      text: frequencies.includes(value) ? `Every ${value}` : `${value}`,
      value: `${value}`,
    };
  };

  const frequencies = ["Day", "Week", "Month", "Year"];
  const frequencyOptions = frequencies.map((element) =>
    makeOptionObject(element)
  );

  const ledgerTypes = ["Payment", "Income", "Daily Cash Release"];
  const paymentOptions = ledgerTypes.map((element) =>
    makeOptionObject(element)
  );

  return (
    <div>
      <br />
      <br />
      <Form
        left
        onSubmit={(e) => handleAddingPayment(e)}
        style={{ width: "300px" }}
      >
        <Input
          fluid
          labelPosition="left"
          name="title"
          placeholder={"groceries, rent, amazon, etc."}
          type="text"
        >
          <Label>Category</Label>
          <input />
        </Input>
        <Input
          fluid
          type="text"
          labelPosition="left"
          name="amount"
          placeholder={"10"}
        >
          <Label>Amount</Label>
          <input />
        </Input>
        <Dropdown
          fluid
          onChange={(e) => handleFrequency(e)}
          options={frequencyOptions}
          placeholder="Pick a Frequency"
          selection
          value={frequency}
        />
        <Dropdown
          fluid
          onChange={(e) => handleLedgerEntryType(e)}
          options={paymentOptions}
          placeholder="Payment or Income"
          selection
          value={ledgerEntryType}
        />
        <br />
        <Button fluid type="submit">
          {`Add ${ledgerEntryType}`}
        </Button>
      </Form>
    </div>
  );
}
