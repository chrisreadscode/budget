import React, { useState } from "react";
import { Button, Form, Input, Label } from "semantic-ui-react";

export default function DailyCash({ dailyCash, updateDailyCash }) {
  const [dailyCashComponent, setDailyCashComponent] = useState("");

  return (
    <div>
      <Form onSubmit={(e) => updateDailyCash(e, setDailyCashComponent)}>
        <Input
          labelPosition="left"
          type="text"
          onChange={(state) => setDailyCashComponent(state.value)}
          placeholder={
            dailyCash || dailyCash === 0
              ? `$${dailyCash} Cash Released Per Day`
              : "Enter Daily Cash Release"
          }
          value={dailyCashComponent}
        >
          <Label>$</Label>
          <input />
        </Input>
        <br />
        <br />
        <Button fluid type="submit">
          Submit
        </Button>
      </Form>
      <br />
      <br />
    </div>
  );
}
