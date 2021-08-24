import React from "react";
import { Header, Popup, Segment } from "semantic-ui-react";

export default function CashBubble({ cash }) {
  const squareBubble = { width: 200, height: 200 };

  return (
    <div>
      <br />
      <Popup
        content="Click to add anything recurring"
        trigger={
          <Segment circular inverted style={squareBubble}>
            <Header as="h1">
              ${cash}
              <Header sub color={cash < 0 ? "red" : "green"}>
                left today
              </Header>
            </Header>
          </Segment>
        }
      />
      <br />
      <br />
    </div>
  );
}
