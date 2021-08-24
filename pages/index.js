import Head from "next/head";
import {
  Button,
  Input,
  Header,
  Form,
  Label,
  Popup,
  Segment,
} from "semantic-ui-react";
import useMoneyLogic from "../components/useMoneyLogic.js/useMoneyLogic";
import { useState } from "react";

export default function Home() {
  const {
    updateCalculatorCash,
    updateDailyCash,
    updateDebtOrSave,
    cash,
    dailyCash,
    debt,
    save,
  } = useMoneyLogic();
  const [activeCalculatorButton, setActiveCalculatorButton] = useState(100);
  const [dailyCashComponent, setDailyCashComponent] = useState("");
  const [showDebt, setShowDebt] = useState(false);
  const [showMinus, setShowMinus] = useState(false);

  const buttons = [1, 5, 20, 50, 100];
  const squareBubble = { width: 200, height: 200 };

  const makeCalculatorButton = (value) => {
    return (
      <Button
        color={
          activeCalculatorButton === value
            ? showMinus
              ? "red"
              : "green"
            : "black"
        }
        key={value}
        onClick={(state) => {
          setActiveCalculatorButton(value);
          updateCalculatorCash(value, showMinus);
        }}
      >
        {value}
      </Button>
    );
  };

  return (
    <div className="container">
      <Head>
        <title>Budget</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          rel="stylesheet"
        />
      </Head>

      <main>
        <h1 className="title">Welcome to Budget!</h1>

        <br />
        <p className="description">Start by clicking to discover features</p>

        <div>
          <Button
            color={showDebt ? "red" : "green"}
            floated="right"
            onClick={(event) => setShowDebt(!showDebt)}
            style={{ position: "relative", right: "125px" }}
          >
            ${showDebt ? `${Math.abs(debt)} Debt` : `${save} Save`}
          </Button>

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
        </div>
        <br />
        <br />
        <div>
          <Button
            color={showMinus ? "red" : "green"}
            onClick={(event) => setShowMinus(!showMinus)}
          >
            {showMinus ? "-" : "+"}
          </Button>
          <Button.Group>
            {buttons.map((buttonValue) => makeCalculatorButton(buttonValue))}
          </Button.Group>
        </div>
        <br />
        <br />
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
        </div>

        <br />
        <br />
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
