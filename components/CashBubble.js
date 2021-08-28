import React from "react";
import { Header, Segment } from "semantic-ui-react";

export default function CashBubble({ cash }) {
  const squareBubble = { width: 200, height: 200 };

  return (
    <div>
      <br />
      <Segment circular inverted style={squareBubble}>
        <Header as="h1">
          ${cash}
          <Header sub color={0 < cash ? "green" : "red"}>
            left today
          </Header>
        </Header>
      </Segment>
      <br />
      <br />
    </div>
  );
}
