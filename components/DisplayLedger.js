import React from "react";
import { Table } from "semantic-ui-react";

export default function DisplayLedger({ ledger }) {
  const income = ledger["income"];
  const payment = ledger["payment"];
  const dailyCashRelease = ledger["dailyCashRelease"];

  console.log(ledger);
  console.log(payment);

  const makeRow = (entry) => {
    return (
      <Table.Row>
        <Table.Cell>{entry.date.toLocaleTimeString()}</Table.Cell>
        <Table.Cell>${entry.amount}</Table.Cell>
        <Table.Cell>{entry.title}</Table.Cell>
        <Table.Cell>{entry.frequency}</Table.Cell>
      </Table.Row>
    );
  };

  return (
    <div>
      <br />
      <br />
      <Table definition>
        <Table.Header>
          <Table.HeaderCell textAlign="center">
            Daily Cash Release
          </Table.HeaderCell>
        </Table.Header>
        {dailyCashRelease.map((entry) => makeRow(entry))}
      </Table>
      <Table celled>
        <Table.Header>
          <Table.HeaderCell textAlign="center">Incomes</Table.HeaderCell>
        </Table.Header>
        {income.map((entry) => makeRow(entry))}
      </Table>
      <Table celled>
        <Table.Header>
          <Table.HeaderCell textAlign="center" width={1}>
            Payments
          </Table.HeaderCell>
        </Table.Header>
        {payment.map((entry) => makeRow(entry))}
      </Table>
    </div>
  );
}
