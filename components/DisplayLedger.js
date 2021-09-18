import React from "react";
import { Segment } from "semantic-ui-react";

export default function DisplayLedger({ ledger }) {
  const income = ledger["income"];
  const payment = ledger["payment"];
  const dailyCashRelease = ledger["dailyCashRelease"];

  console.log(ledger);
  console.log(payment);

  const makeRow = (entry) => {
    return (
      <Segment.Group horizontal fluid>
        <Segment>{entry.date.toLocaleTimeString()}</Segment>
        <Segment>{entry.title}</Segment>
        <Segment>{entry.amount}</Segment>
        <Segment>{entry.frequency}</Segment>
      </Segment.Group>
    );
  };

  return (
    <div>
      {/* {income.length > 0 ||
      payment.length > 0 ||
      dailyCashRelease.length > 0 ? (
        <Segment.Group horizontal>
          <Segment>Date</Segment>
          <Segment>Category</Segment>
          <Segment>Amount</Segment>
          <Segment>Frequency</Segment>
        </Segment.Group>
      ) : null} */}
      <br />
      <br />
      {dailyCashRelease.map((entry) => makeRow(entry))}
      {income.map((entry) => makeRow(entry))}
      {payment.map((entry) => makeRow(entry))}
    </div>
  );
}
